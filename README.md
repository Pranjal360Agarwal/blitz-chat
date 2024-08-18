<h1 align="center">Blitz Chat App ⚡</h1>

<p align="center">
  <img src="/public/photo1.jpg" alt="Demo App" width="400"/>
</p>

<p align="center">
  <img src="/public/photo2.jpg" alt="Demo App" width="400"/>
</p>


Blitz Chat is a full-stack chat application built with Next.js 14, TypeScript, Tailwind CSS, and UPSTASH Redis. The app supports real-time messaging, secure authentication, and includes features like image uploads, notification sounds, and a responsive UI with light and dark modes.

## Features

- **Real-Time Messaging:** Instant messaging with real-time updates.
- **Authentication:** Secure user authentication and session management using Kinde.
- **Responsive UI:** Fully responsive design optimized for mobile, tablet, and desktop.
- **Light and Dark Mode:** User preference-based theme switching.
- **Notification Sounds:** Customizable notification sounds for new messages.
- **Satisfying Typing Effects:** Smooth and visually appealing typing effects.
- **Redis Integration:** Efficient data storage and retrieval using UPSTASH Redis.
- **Image Uploads:** Share images directly within the chat.
- **Deployment:** Application deployed using Vercel.

## Tech Stack

### Frontend

- **Next.js 14:** React framework with server-side rendering and static site generation.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Redux Toolkit:** State management with Redux and RTK Query.
- **Cloudinary:** For handling image uploads and storage.

### Backend

- **Node.js:** JavaScript runtime for building scalable network applications.
- **Express.js:** Web application framework for Node.js.
- **UPSTASH Redis:** Managed Redis database for real-time data handling.
- **Pusher:** Service for adding real-time functionality.

### DevOps & Deployment

- **Vercel:** Deployment platform for frontend and backend.

## Installation & Setup

### Prerequisites

- **Node.js:** [Download and Install Node.js](https://nodejs.org/en/download/)
- **MongoDB:** Install and run MongoDB locally or use a cloud provider.
- **VSCode:** [Download and Install Visual Studio Code](https://code.visualstudio.com/download)

### Frontend Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blitz-chat.git
    cd blitz-chat
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Backend Installation

1. Navigate to the backend directory (if separated):
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm run dev
    ```

### Environment Variables

1. Create a `.env` file in the root of your project and add the following environment variables:

    ```plaintext
    KINDE_CLIENT_ID=
    KINDE_CLIENT_SECRET=
    KINDE_ISSUER_URL=
    KINDE_SITE_URL=
    KINDE_POST_LOGOUT_REDIRECT_URL=
    KINDE_POST_LOGIN_REDIRECT_URL=

    UPSTASH_REDIS_REST_URL=
    UPSTASH_REDIS_REST_TOKEN=

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
    NEXT_PUBLIC_CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=

    NEXT_PUBLIC_PUSHER_APP_KEY=
    ```

2. Update the variables with your specific configuration values.

### Deployment

- **Vercel Deployment:** Deploy both the frontend and backend on [Vercel](https://vercel.com/).

    1. Connect your GitHub repository to Vercel.
    2. Set the environment variables in the Vercel dashboard.
    3. Deploy the application directly from the Vercel dashboard.

## Resources & References

- **Next.js:** [Next.js Documentation](https://nextjs.org/docs/getting-started)
- **TypeScript:** [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- **Tailwind CSS:** [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Redux Toolkit:** [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- **UPSTASH Redis:** [UPSTASH Redis Documentation](https://upstash.com/docs)
- **Cloudinary:** [Cloudinary Documentation](https://cloudinary.com/documentation)
- **Vercel:** [Vercel Documentation](https://vercel.com/docs)

## Contact

If you have any questions or feedback, please feel free to contact me at [pranjal360agarwal@gmail.com](mailto:pranjal360agarwal@gmail.com). You can also connect with me on [LinkedIn](https://www.linkedin.com/in/pranjalagarwal99/) or [Twitter](https://twitter.com/Pranjal12393385). Thank you for visiting my project!

# Made with ❤ by [Pranjal Agarwal](https://github.com/Pranjal360Agarwal).
