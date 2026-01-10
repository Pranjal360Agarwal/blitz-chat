<h1 align="center">Blitz Chat App ⚡</h1>

<p align="center">
  <img src="/public/photo1.jpg" alt="Demo App" width="700"/>
</p>

<p align="center">
  <img src="/public/photo2.jpg" alt="Demo App" width="700"/>
</p>

Blitz Chat is a full-stack chat application built with Next.js 14, TypeScript, Tailwind CSS, and UPSTASH Redis. The app supports real-time messaging, secure authentication, and includes features like image uploads, notification sounds, and a responsive UI with light and dark modes.

## 🚀 Features

- **Real-Time Messaging**: Instant message delivery using Pusher WebSockets
- **User Authentication**: Secure authentication with Kinde OAuth
- **Rich Media Support**: Share images with Cloudinary integration
- **Dark Mode**: Theme switching with next-themes
- **Responsive Design**: Mobile-friendly interface with resizable panels
- **User Presence**: See online users in the sidebar
- **Message History**: Persistent message storage with Redis
- **Smooth Animations**: Framer motion for polished UI transitions
- **Emoji Support**: Built-in emoji picker for expressive messaging
- **Sound Notifications**: Audio feedback for new messages

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14.2.5 (React 18)
- **UI Components**: Radix UI + Custom shadcn/ui components
- **Styling**: Tailwind CSS + Tailwind Merge
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query (v5)
- **Theme Management**: next-themes

### Backend & Infrastructure

- **Runtime**: Next.js API Routes
- **Real-Time Communication**: Pusher.js (WebSockets)
- **Authentication**: Kinde OAuth
- **Database**: Upstash Redis (session & message storage)
- **File Storage**: Cloudinary (image uploads)
- **Monitoring**: Vercel Analytics

### Development Tools

- **Language**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm
- **Build Tool**: Next.js compiler

## 📋 Prerequisites

- Node.js 18+ and npm
- Kinde account for authentication
- Upstash Redis account
- Pusher account for real-time messaging
- Cloudinary account for image uploads

## 🔧 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd blitz-chat
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory with the following variables:

```env
# Kinde Authentication
KINDE_CLIENT_ID=<your-kinde-client-id>
KINDE_CLIENT_SECRET=<your-kinde-client-secret>
KINDE_ISSUER_URL=<your-kinde-issuer-url>
KINDE_SITE_URL=<your-site-url>
KINDE_POST_LOGIN_REDIRECT_URL=<your-redirect-url>
KINDE_POST_LOGOUT_REDIRECT_URL=<your-logout-url>

# Upstash Redis
UPSTASH_REDIS_REST_URL=<your-upstash-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-token>

# Pusher
NEXT_PUBLIC_PUSHER_KEY=<your-pusher-key>
PUSHER_ID=<your-pusher-id>
PUSHER_SECRET=<your-pusher-secret>

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-name>
CLOUDINARY_API_SECRET=<your-cloudinary-secret>
```

4. **Run development server**

```bash
npm run dev
```

Visit `http://localhost:3000` to access the application.

## 📁 Project Structure

```
blitz-chat/
├── src/
│   ├── app/
│   │   ├── auth/                    # Authentication pages
│   │   │   ├── page.tsx            # Login page
│   │   │   ├── callback/page.tsx   # OAuth callback
│   │   │   └── AuthButtons.tsx     # Auth UI components
│   │   ├── api/                     # API routes
│   │   │   ├── auth/[kindeAuth]/   # Kinde auth handler
│   │   │   └── sign-cloudinary-params/  # Image upload signing
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── globals.css             # Global styles
│   │   └── page.tsx                # Main chat interface
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatLayout.tsx      # Main chat layout with resizable panels
│   │   │   ├── ChatTopBar.tsx      # Chat header with user info
│   │   │   ├── ChatBottomBar.tsx   # Message input area
│   │   │   ├── MessageList.tsx     # Messages display with animations
│   │   │   ├── MessageContainer.tsx # Chat wrapper component
│   │   │   └── EmojiPicker.tsx     # Emoji selection component
│   │   ├── Sidebar.tsx             # User list sidebar
│   │   ├── PreferencesTab.tsx      # User preferences & logout
│   │   ├── ui/                     # Reusable UI components
│   │   └── providers/              # Context providers
│   ├── store/                       # Zustand state management
│   │   ├── useSelectedUser.ts      # Selected chat state
│   │   └── usePreferences.ts       # User preferences state
│   ├── lib/
│   │   ├── db.ts                   # Redis client initialization
│   │   └── utils.ts                # Utility functions
│   ├── actions/
│   │   └── message.actions.ts      # Server actions for messages
│   └── db/
│       └── dummy.ts                # Type definitions
└── public/                          # Static assets
    ├── avatars/                    # User avatar images
    ├── sounds/                     # Audio notification files
    └── logo.png                    # Application logo
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables
   - Click "Deploy"

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t blitz-chat .
docker run -p 3000:3000 blitz-chat
```

## 🔐 Security Best Practices

- **Authentication**: Uses OAuth 2.0 via Kinde (no password storage)
- **CORS**: Configured for Pusher and Cloudinary
- **API Routes**: Protected by Kinde middleware
- **Image Upload**: Signed requests prevent unauthorized uploads
- **Session Management**: Secure HTTP-only cookies via Kinde
- **Redis**: REST API with token authentication

## 📊 Performance Optimizations

- **React Query**: Automatic caching and synchronization
- **Framer Motion**: GPU-accelerated animations
- **Next.js Image**: Optimized image delivery
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components load on demand
- **Redis Caching**: Fast message retrieval

## 🐛 Known Limitations

- Single Redis instance (no clustering for production scale)
- Pusher free tier limited to concurrent connections
- Cloudinary free tier storage limits
- Message history depends on Redis retention policy

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Kinde Auth Docs](https://kinde.com/docs)
- [Pusher Documentation](https://pusher.com/docs)
- [Upstash Redis Docs](https://upstash.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For issues, questions, or suggestions, please:

- Open an issue on GitHub
- Check existing issues for solutions
- Contact the development team

---

## Contact

If you have any questions or feedback, please feel free to contact me at [pranjal360agarwal@gmail.com](mailto:pranjal360agarwal@gmail.com). You can also connect with me on [LinkedIn](https://www.linkedin.com/in/pranjalagarwal99/) or [Twitter](https://twitter.com/Pranjal12393385). Thank you for visiting my project!

# Made with ❤ by [Pranjal Agarwal](https://github.com/Pranjal360Agarwal).
