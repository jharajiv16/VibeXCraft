# 🚀 VibeXCraft

<div align="center">

**The Ultimate AI-Powered Workspace for Coders & Creators**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

*Merging Google Workspace's modularity with Replit's developer energy*

[Features](#-features) • [Installation](#-installation) • [Deployment](#-deployment) • [Documentation](#-documentation)

</div>

---

## 📖 About

VibeXCraft is a comprehensive AI-powered workspace platform that combines the best of development tools, AI copilots, and collaboration features. Built for developers, creators, and teams who want to code, create, and collaborate with cutting-edge AI assistance.

### Key Highlights

- 🤖 **5 AI Copilots**: Code, Meeting, Tutor, Design, and Workflow assistants
- 💻 **Live Pair Programming**: Real-time collaborative coding sessions
- 📁 **Project Management**: Import, fork, and manage GitHub projects
- 👥 **Community Features**: Connect with developers, share projects, and collaborate
- 📊 **Analytics Dashboard**: Track your coding metrics and productivity
- 🎨 **Modern UI**: Beautiful, responsive design built with shadcn/ui and Tailwind CSS

## ✨ Features

### 🎯 Core Features

- **AI Copilots**
  - 🤖 **Code Copilot**: Write, debug, and refactor code with AI assistance
  - 📹 **Meeting Copilot**: Summarize meetings and extract action items
  - 🎓 **Tutor Copilot**: Learn concepts and get explanations
  - 🎨 **Design Copilot**: Get UI/UX design suggestions and feedback
  - 📋 **Workflow Copilot**: Plan sprints and optimize development workflows

- **Workspace & Projects**
  - 💻 **Standalone Editor**: VS Code-like file-based coding interface
  - 🔄 **Live Pair Programming**: Real-time collaborative coding sessions
  - 📁 **Project Management**: Import, fork, and manage projects
  - 🔗 **GitHub Integration**: Sync and manage GitHub repositories
  - 📝 **Multi-file Editor**: Edit multiple files with tabs

- **Community & Collaboration**
  - 👥 **Developer Profiles**: Create and customize your profile
  - 🌍 **Location Directory**: Find developers nearby (Snapchat-style)
  - 💬 **Messaging**: Connect and message other developers
  - 🚀 **Project Showcase**: Share and discover projects
  - 🎉 **Events**: Join coding events and hackathons

- **Analytics & Insights**
  - 📊 **Dashboard**: Track coding metrics and productivity
  - 🎯 **Vibe Score**: Monitor your coding vibe and energy
  - ⏱️ **Focus Rate**: Track your focus and productivity
  - 📈 **Weekly Coding Hours**: Monitor your coding time
  - 📉 **Charts & Visualizations**: Visualize your progress

### 🛠️ Technical Features

- **Authentication**: Clerk integration for secure user management
- **Database**: Supabase for real-time data and storage
- **AI Integration**: OpenAI GPT API for all AI copilots
- **Real-time Updates**: WebSocket support for live collaboration
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Built-in theme support

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Hooks + TanStack Query
- **Animations**: Framer Motion
- **Authentication**: Clerk
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **AI**: OpenAI GPT API (gpt-3.5-turbo, gpt-4)
- **Database**: Supabase
- **CORS**: Configured for production

### Development Tools
- **Language**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier (via ESLint)
- **Version Control**: Git + GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Install with nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn** or **pnpm**
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jharajiv16/VibeXCraft.git
cd VibeXCraft
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 3. Set Up Environment Variables

#### Frontend (.env)

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3001

# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here

# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# GitHub OAuth (Optional)
VITE_GITHUB_CLIENT_ID=your_github_client_id_here
```

#### Backend (server/.env)

Create a `.env` file in the `server` directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3001

# OpenAI API Configuration
OPENAI_API_KEY=sk-your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo

# CORS Configuration (for production)
CORS_ORIGIN=http://localhost:8080
FRONTEND_URL=http://localhost:8080
```

### 4. Get API Keys

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

#### GitHub OAuth (Optional)
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set **Authorization callback URL**: `http://localhost:8080/auth/github/callback`
4. Copy the **Client ID**
5. Add it to `.env` as `VITE_GITHUB_CLIENT_ID`

## 🏃 Development

### Start Development Server

```bash
# Start frontend (runs on http://localhost:8080)
npm run dev

# Start backend (runs on http://localhost:3001)
cd server
npm start
```

### Available Scripts

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run deploy       # Deploy to Vercel (production)
npm run deploy:preview # Deploy to Vercel (preview)

# Backend
cd server
npm start            # Start production server
npm run dev          # Start development server with watch mode
```

## 🚀 Deployment

### Quick Deployment (Recommended)

**Frontend**: Deploy to [Vercel](https://vercel.com)  
**Backend**: Deploy to [Render](https://render.com)

See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for step-by-step instructions.

### Deployment Options

1. **Vercel (Frontend) + Render (Backend)** - ⭐ Recommended
   - See [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md) and [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md)

2. **Netlify (Frontend) + Railway (Backend)**
   - See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

3. **Full Stack on Render**
   - Uses `render.yaml` for both services
   - See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Vercel Deployment (Frontend)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Dashboard**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Add environment variables
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   vercel login
   vercel --prod
   ```

### Render Deployment (Backend)

1. **Go to Render Dashboard**
   - Visit [Render Dashboard](https://render.com/dashboard)
   - Sign up or log in

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `server` as root directory
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables
   - Click "Create Web Service"

3. **Update CORS**
   - Add your frontend URL to `CORS_ORIGIN` environment variable
   - Redeploy backend

### Environment Variables for Production

#### Frontend (Vercel)
- `VITE_API_URL` - Your backend URL (e.g., `https://vibexcraft-backend.onrender.com`)
- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon key
- `VITE_GITHUB_CLIENT_ID` - Your GitHub OAuth client ID

#### Backend (Render)
- `NODE_ENV` - `production`
- `PORT` - `10000` (Render's default)
- `OPENAI_API_KEY` - Your OpenAI API key
- `OPENAI_MODEL` - `gpt-3.5-turbo` (or `gpt-4`)
- `CORS_ORIGIN` - Your frontend URL (e.g., `https://vibexcraft.vercel.app`)
- `FRONTEND_URL` - Your frontend URL

## 📚 Documentation

- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Quick deployment guide
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Comprehensive deployment guide
- [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md) - Frontend deployment
- [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md) - Backend deployment
- [VERCEL_DEPLOY_STEPS.md](./VERCEL_DEPLOY_STEPS.md) - Vercel deployment steps
- [FIX_VERCEL_DEPLOYMENT.md](./FIX_VERCEL_DEPLOYMENT.md) - Troubleshooting Vercel deployment
- [COPILOTS_SETUP.md](./COPILOTS_SETUP.md) - AI Copilots setup guide
- [server/README.md](./server/README.md) - Backend API documentation

## 🛣️ Project Structure

```
VibeXCraft/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── lib/                # Utility functions and API clients
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # Third-party integrations (Supabase, Clerk)
│   └── assets/             # Static assets
├── server/                 # Backend API
│   ├── controllers/        # API controllers
│   ├── routes/             # API routes
│   ├── middleware/         # Express middleware
│   └── index.js            # Server entry point
├── public/                 # Public assets
├── dist/                   # Build output (generated)
└── node_modules/           # Dependencies (generated)
```

## 🔌 API Endpoints

### Backend API (Base URL: `http://localhost:3001`)

#### Health Check
```
GET /health
```

#### AI Copilots
```
POST /api/copilots/code       # Code Copilot
POST /api/copilots/meeting    # Meeting Copilot
POST /api/copilots/tutor      # Tutor Copilot
POST /api/copilots/design     # Design Copilot
POST /api/copilots/workflow   # Workflow Copilot
POST /api/agent/gemini        # General AI Agent
```

### Example Request

```bash
curl -X POST http://localhost:3001/api/copilots/code \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How do I create a React component?",
    "language": "javascript"
  }'
```

### Example Response

```json
{
  "success": true,
  "response": "To create a React component...",
  "copilot": "Code Copilot"
}
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production (test build)
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Clerk](https://clerk.com/) - Authentication
- [Supabase](https://supabase.com/) - Database and real-time features
- [OpenAI](https://openai.com/) - AI capabilities
- [Vercel](https://vercel.com/) - Deployment platform
- [Render](https://render.com/) - Backend hosting

## 📞 Support

For support, please open an issue on [GitHub](https://github.com/jharajiv16/VibeXCraft/issues) or contact the maintainers.

## 🌟 Star History

If you find this project helpful, please consider giving it a star ⭐ on GitHub!

---

<div align="center">

**Made with ❤️ by the VibeXCraft Team**

[Website](https://vibexcraft.vercel.app) • [Documentation](./docs) • [GitHub](https://github.com/jharajiv16/VibeXCraft)

</div>
