# 🚀 VibeXCraft

<div align="center">

**🧠 The Ultimate AI-Powered Workspace for Coders & Creators**

*Merging Google Workspace's modularity with Replit's developer energy*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

**🌐 Live Demo:** [vibe-x-craft.vercel.app](https://vibe-x-craft.vercel.app)

[Features](#-features) • [Installation](#-installation) • [Deployment](#-deployment) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

VibeXCraft is an all-in-one AI-powered workspace designed for developers, creators, and teams. It blends real-time collaboration, smart coding assistance, and project management — powered by AI copilots.

### ⚡ Built by: The Binary Brains 🧠

A passionate team of innovators crafting intelligent tools that empower creators, coders, and thinkers to build the future.

### ✨ Key Highlights

- 🤖 **5 Specialized AI Copilots** — Code, Meeting, Tutor, Design & Workflow
- 💻 **Live Pair Programming** — Real-time collaborative coding sessions
- 📁 **Project Management** — Import, fork & manage GitHub projects easily
- 👥 **Community Hub** — Discover, collaborate & showcase your projects
- 📊 **Analytics Dashboard** — Track productivity, focus & coding patterns
- 🎨 **Modern UI** — Built with shadcn/ui, Tailwind CSS, and Framer Motion

---

## 🎯 Features

### 🤖 AI Copilots

| Copilot | Purpose |
|---------|---------|
| 🧩 **Code Copilot** | Write, debug & refactor code instantly |
| 🧠 **Tutor Copilot** | Learn & understand coding concepts |
| 🎥 **Meeting Copilot** | Summarize calls & extract key points |
| 🎨 **Design Copilot** | Get real-time UI/UX feedback |
| 📋 **Workflow Copilot** | Plan sprints & optimize workflows |

**✨ Smart Features:**
- Automatic fallback to mock data when API is unavailable
- Context-aware responses based on user queries
- Code examples with syntax highlighting
- Follow-up suggestions for deeper learning

### 💻 Workspace & Projects

- **Full VS Code-like editor** with syntax highlighting
- **GitHub Integration** for repo import, fork & sync
- **Multi-file support** with tabs and file explorer
- **Live Pair Programming** mode with real-time collaboration
- **Built-in Project Explorer** and Task Manager
- **Standalone Editor** for offline coding

### 👥 Community & Collaboration

- **Customizable Developer Profiles** with GitHub integration
- **Nearby Developer Map** (like Snapchat Snap Map for devs)
- **Direct Messaging** between developers
- **Project Showcases** and Hackathon Events
- **Follow & Connect** features for networking

### 📊 Analytics & Insights

- **Coding Metrics Dashboard** with beautiful visualizations
- **Vibe Score™** – Measure your energy & focus
- **Focus Rate & Weekly Coding Hours** tracking
- **Interactive Charts** powered by Recharts
- **Customizable Metrics** – Add your own scores

---

## 🧩 Tech Stack

### 🖥️ Frontend

- **React 18** + **TypeScript** – Modern UI framework
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** + **shadcn/ui** + **Radix UI** – Beautiful, accessible components
- **React Router v6** – Client-side routing
- **Framer Motion** – Smooth animations
- **Clerk** – Authentication & user management
- **TanStack Query** – Powerful data fetching
- **Supabase** – Real-time database & storage
- **Lucide React** – Beautiful icons

### ⚙️ Backend

- **Node.js** + **Express.js** – Robust server framework
- **Supabase** – Database & real-time features
- **OpenAI GPT API** – Copilot intelligence (gpt-3.5-turbo, gpt-4)
- **WebSockets** – Live collaboration support
- **CORS** – Cross-origin resource sharing

### 🧰 Development Tools

- **TypeScript** – Type-safe development
- **ESLint** + **Prettier** – Code quality
- **Git** + **GitHub** – Version control
- **Vercel** – Frontend deployment
- **Render** – Backend hosting

---

## 📋 Prerequisites

Make sure you have:

- **Node.js** ≥ 18 ([Install with nvm](https://github.com/nvm-sh/nvm))
- **npm** / **yarn** / **pnpm**
- **Git**

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/jharajiv16/VibeXCraft.git
cd VibeXCraft
```

### 2️⃣ Install dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 3️⃣ Set up environment variables

#### Frontend `.env`

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3001

# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here

# Supabase Configuration
VITE_SUPABASE_URL=https://yourproject.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_public_key_here

# GitHub OAuth (Optional)
VITE_GITHUB_CLIENT_ID=your_github_client_id_here
```

#### Backend `server/.env`

Create a `.env` file in the `server` directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3001

# OpenAI API Configuration
OPENAI_API_KEY=sk-your_openai_key_here
OPENAI_MODEL=gpt-3.5-turbo

# CORS Configuration
CORS_ORIGIN=http://localhost:8080
FRONTEND_URL=http://localhost:8080
```

### 4️⃣ Get API Keys

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to **API Keys**
4. Create a new API key
5. Add it to `server/.env` as `OPENAI_API_KEY`

#### Clerk API Key
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy the **Publishable Key**
4. Add it to `.env` as `VITE_CLERK_PUBLISHABLE_KEY`

#### Supabase Credentials
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project
3. Go to **Settings** → **API**
4. Copy **URL** and **anon/public key**
5. Add them to `.env` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`

### 5️⃣ Start the development servers

```bash
# Start backend (in one terminal)
cd server
npm start

# Start frontend (in another terminal)
npm run dev
```

The app will be available at:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3001

---

## 🏃 Development Commands

### Frontend

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run deploy      # Deploy to Vercel (production)
npm run deploy:preview  # Deploy to Vercel (preview)
```

### Backend

```bash
cd server
npm run dev         # Start backend (watch mode)
npm start           # Start production server
```

---

## 🚀 Deployment

### Quick Deployment (Recommended)

**Frontend**: Deploy to [Vercel](https://vercel.com)  
**Backend**: Deploy to [Render](https://render.com)

See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for step-by-step instructions.

### Deployment Platforms

| Layer | Recommended Platform | Alternative |
|-------|---------------------|-------------|
| Frontend | Vercel | Netlify |
| Backend | Render | Railway |

### Detailed Guides

- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) – Quick deployment guide
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) – Comprehensive deployment guide
- [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md) – Frontend deployment
- [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md) – Backend deployment
- [VERCEL_DEPLOY_STEPS.md](./VERCEL_DEPLOY_STEPS.md) – Vercel-specific guide

### Environment Variables for Production

#### Frontend (Vercel)
- `VITE_API_URL` – Your backend URL (e.g., `https://vibexcraft-backend.onrender.com`)
- `VITE_CLERK_PUBLISHABLE_KEY` – Your Clerk publishable key
- `VITE_SUPABASE_URL` – Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` – Your Supabase anon key
- `VITE_GITHUB_CLIENT_ID` – Your GitHub OAuth client ID

#### Backend (Render)
- `NODE_ENV` – `production`
- `PORT` – `10000` (Render's default)
- `OPENAI_API_KEY` – Your OpenAI API key
- `OPENAI_MODEL` – `gpt-3.5-turbo` (or `gpt-4`)
- `CORS_ORIGIN` – Your frontend URL (e.g., `https://vibe-x-craft.vercel.app`)
- `FRONTEND_URL` – Your frontend URL

---

## 🧪 API Overview

### Base URL
- **Development**: `http://localhost:3001`
- **Production**: `https://your-backend-url.onrender.com`

### Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/copilots/code` | POST | Code Copilot |
| `/api/copilots/tutor` | POST | Tutor Copilot |
| `/api/copilots/design` | POST | Design Copilot |
| `/api/copilots/meeting` | POST | Meeting Copilot |
| `/api/copilots/workflow` | POST | Workflow Copilot |
| `/api/agent/gemini` | POST | General AI Agent |

### Example Request

```bash
curl -X POST http://localhost:3001/api/copilots/code \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Explain React components",
    "language": "javascript"
  }'
```

### Example Response

```json
{
  "success": true,
  "response": "React components are reusable pieces of UI...",
  "copilot": "Code Copilot"
}
```

---

## 🧭 Project Structure

```
VibeXCraft/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── livePair/      # Live pair programming components
│   │   └── ...            # Other components
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Copilots.tsx
│   │   ├── Workspace.tsx
│   │   └── ...
│   ├── lib/               # Utility functions
│   │   ├── copilots.ts   # API client for copilots
│   │   ├── mockCopilot.ts # Mock data for offline mode
│   │   └── utils.ts
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Third-party integrations
│   │   └── supabase/      # Supabase client
│   └── assets/            # Static assets
├── server/                # Backend API
│   ├── controllers/       # API controllers
│   │   └── copilotController.js
│   ├── routes/            # API routes
│   │   └── copilotRoutes.js
│   ├── middleware/        # Express middleware
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── validator.js
│   └── index.js           # Server entry point
├── public/                # Public assets
├── dist/                  # Build output (generated)
└── docs/                  # Documentation files
```

---

## 📚 Documentation

### Setup Guides
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) – Quick deployment guide
- [STEP_BY_STEP_FIX.md](./STEP_BY_STEP_FIX.md) – Troubleshooting guide
- [YOUR_VERCEL_SETUP.md](./YOUR_VERCEL_SETUP.md) – Vercel setup guide

### Feature Guides
- [COPILOTS_SETUP.md](./COPILOTS_SETUP.md) – AI Copilots setup
- [server/README.md](./server/README.md) – Backend API documentation
- [server/OPENAI_SETUP.md](./server/OPENAI_SETUP.md) – OpenAI integration

### Deployment Guides
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) – Comprehensive deployment
- [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md) – Frontend deployment
- [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md) – Backend deployment
- [VERCEL_DEPLOY_STEPS.md](./VERCEL_DEPLOY_STEPS.md) – Vercel steps

### Troubleshooting
- [FIX_CORS_ERROR.md](./FIX_CORS_ERROR.md) – CORS error fixes
- [URGENT_FIX_CORS.md](./URGENT_FIX_CORS.md) – Quick CORS fix
- [FIX_VERCEL_DEPLOYMENT.md](./FIX_VERCEL_DEPLOYMENT.md) – Vercel issues

---

## 🤝 Contributing

We ❤️ contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/VibeXCraft.git
   cd VibeXCraft
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests if applicable

4. **Commit your work**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push and open a PR**
   ```bash
   git push origin feature/amazing-feature
   ```
   Then open a Pull Request on GitHub!

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add documentation for new features
- Test your changes thoroughly
- Be respectful and constructive in discussions

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to these amazing tools, platforms, and communities that made VibeXCraft possible:

### 🎨 UI & Design
- **[shadcn/ui](https://ui.shadcn.com/)** – Beautiful, accessible React components
- **[Radix UI](https://www.radix-ui.com/)** – Unstyled, accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** – Production-ready motion library
- **[Lucide](https://lucide.dev/)** – Beautiful & consistent icon toolkit

### 🔐 Authentication & User Management
- **[Clerk](https://clerk.com/)** – Complete user management and authentication

### 🗄️ Database & Backend
- **[Supabase](https://supabase.com/)** – Open source Firebase alternative
- **[Express.js](https://expressjs.com/)** – Fast, unopinionated web framework
- **[Node.js](https://nodejs.org/)** – JavaScript runtime

### 🤖 AI & Machine Learning
- **[OpenAI](https://openai.com/)** – GPT API for AI copilots
- **[OpenAI Node.js SDK](https://github.com/openai/openai-node)** – Official OpenAI SDK

### 🚀 Deployment & Hosting
- **[Vercel](https://vercel.com/)** – Frontend deployment platform
- **[Render](https://render.com/)** – Backend hosting platform
- **[Netlify](https://www.netlify.com/)** – Alternative deployment option
- **[Railway](https://railway.app/)** – Alternative backend hosting

### 🛠️ Development Tools
- **[Vite](https://vitejs.dev/)** – Next generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** – Typed JavaScript
- **[React](https://react.dev/)** – UI library
- **[React Router](https://reactrouter.com/)** – Declarative routing
- **[TanStack Query](https://tanstack.com/query)** – Powerful data synchronization

### 📊 Data Visualization
- **[Recharts](https://recharts.org/)** – Composable charting library

### 🎯 Code Quality
- **[ESLint](https://eslint.org/)** – JavaScript linter
- **[Prettier](https://prettier.io/)** – Code formatter

### 📦 Package Management
- **[npm](https://www.npmjs.com/)** – Package manager
- **[GitHub](https://github.com/)** – Version control and collaboration

### 🌐 Community & Inspiration
- **Google Workspace** – Inspiration for modularity
- **Replit** – Inspiration for developer energy
- **VS Code** – Editor interface inspiration
- **GitHub** – Project management inspiration

### 👥 Contributors

Thank you to all contributors who have helped make VibeXCraft better!

- **[Rajiv Ranjan Jha](https://github.com/jharajiv16)** – Project Creator & Lead Developer
- **The Binary Brains Team** – Core development team

---

## 🌟 Star the Repo

If you like what we're building —

⭐ **Star this repo** to show your support and follow our journey!

Your stars help us:
- Reach more developers
- Get feedback and suggestions
- Build a stronger community
- Continue improving VibeXCraft

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/jharajiv16/VibeXCraft/issues)
- **Discussions**: [Join the conversation](https://github.com/jharajiv16/VibeXCraft/discussions)
- **Email**: [Contact the team](mailto:support@vibexcraft.com)

---

<div align="center">

### 💡 Crafted with passion by

# 🧠 The Binary Brains

**Creators of VibeXCraft**

---

[🌐 Website](https://vibe-x-craft.vercel.app) • [📘 Documentation](./docs) • [🐙 GitHub](https://github.com/jharajiv16/VibeXCraft) • [📧 Contact](mailto:support@vibexcraft.com)

---

**"Code. Create. Collaborate. Craft your vibe."**

Made with ❤️ by developers, for developers

---

[![GitHub stars](https://img.shields.io/github/stars/jharajiv16/VibeXCraft?style=social)](https://github.com/jharajiv16/VibeXCraft/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jharajiv16/VibeXCraft?style=social)](https://github.com/jharajiv16/VibeXCraft/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/jharajiv16/VibeXCraft?style=social)](https://github.com/jharajiv16/VibeXCraft/watchers)

</div>
