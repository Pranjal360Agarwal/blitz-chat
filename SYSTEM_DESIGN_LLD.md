### Low-Level Design (LLD)

#### 1. **Authentication Flow**

```
User
  │
  ├─> Visits /auth
  │     └─> AuthButtons Component
  │           ├─> Login with Kinde OAuth
  │           └─> Redirect to Kinde
  │
  ├─> Kinde authenticates user
  │
  └─> Callback to /auth/callback
        ├─> [kindeAuth] route handler
        ├─> Create user session
        ├─> Store user in Redis (user:{id})
        └─> Redirect to home page
```

#### 2. **Message Flow Architecture**

```
User A (Sender)
  │
  ├─> Composes message in ChatBottomBar
  │
  ├─> Calls getMessages() server action
  │     ├─> Validates user authentication
  │     ├─> Queries Redis for message history
  │     └─> Returns paginated messages
  │
  ├─> Message sent via MessageList component
  │     ├─> Framer Motion animation
  │     ├─> Scrolls to latest message
  │     └─> Updates React Query cache
  │
  └─> Pusher publishes to channel
        └─> Real-time delivery to User B

User B (Receiver)
  │
  ├─> Subscribed to Pusher channel
  │
  ├─> Receives message event
  │
  ├─> TanStack Query invalidates cache
  │
  ├─> MessageList refetches messages
  │
  └─> Displays with animation
```

#### 3. **Data Models**

```typescript
// User Model (stored in Redis as user:*)
interface User {
  id: string;
  email: string;
  image: string;
  name: string;
  createdAt: string;
  lastSeen: string;
}

// Message Model (stored in Redis as messages:*)
interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  messageType: "text" | "image";
  timestamp: string;
  read: boolean;
}

// Conversation Model
interface Conversation {
  userId1: string;
  userId2: string;
  lastMessage: Message;
  updatedAt: string;
}
```

#### 4. **Component Hierarchy**

```
RootLayout
  ├─> ThemeProvider
  ├─> TanStackProvider (React Query)
  │
  └─> Home Page
        ├─> PreferencesTab
        │
        └─> ChatLayout (Resizable Panels)
              ├─> Sidebar
              │     └─> User List Items
              │
              └─> MessageContainer
                    ├─> ChatTopBar
                    │     └─> Selected User Info
                    │
                    ├─> MessageList
                    │     └─> Individual Messages (animated)
                    │
                    └─> ChatBottomBar
                          ├─> Message Input
                          ├─> EmojiPicker
                          └─> Image Upload
```

#### 5. **State Management (Zustand)**

```
Store: useSelectedUser
  ├─> selectedUser: User | null
  ├─> setSelectedUser(user: User | null)
  └─> clearSelectedUser()

Store: usePreferences
  ├─> notifications: boolean
  ├─> theme: "light" | "dark" | "system"
  ├─> setNotifications(enabled: boolean)
  └─> setTheme(theme: string)
```

#### 6. **API Endpoints**

```
POST /api/auth/[kindeAuth]
  - Kinde OAuth callback handler
  - Creates user session
  - Stores user in Redis

POST /api/sign-cloudinary-params
  - Generates signed parameters for image upload
  - Used for secure direct uploads to Cloudinary
  - Returns: { signature, timestamp, cloudName }
```

#### 7. **Server Actions**

```
getMessages(recipientId: string, currentUserId: string)
  - Fetches message history
  - Filters by user pair
  - Returns sorted messages
  - Used by React Query for caching
```

#### 8. **Real-Time Flow (Pusher)**

```
Chat Channel: chat-{userId1}-{userId2}
  ├─> Event: message.sent
  │     └─> Payload: { message: Message, senderId: string }
  │
  ├─> Event: user.typing
  │     └─> Payload: { userId: string, isTyping: boolean }
  │
  └─> Event: user.online
        └─> Payload: { userId: string, status: "online" | "offline" }
```

#### 9. **Image Upload Process**

```
User selects image
  │
  ├─> ChatBottomBar calls sign-cloudinary-params API
  │     └─> Receives signature, timestamp
  │
  ├─> next-cloudinary uploads directly to Cloudinary
  │     └─> Returns secure image URL
  │
  ├─> Image URL sent as message (type: "image")
  │
  └─> MessageList renders image with optimized Cloudinary transforms
```
