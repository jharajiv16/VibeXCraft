
🚀 VibeXCraft
Demo: 🔗 vibe-x-craft.vercel.app
<div align="center">
🧠 The Ultimate AI-Powered Workspace for Coders & Creators




Merging Google Workspace’s modularity with Replit’s developer energy.
Features • Installation • Deployment • Documentation
</div>
📖 About
VibeXCraft is an all-in-one AI-powered workspace designed for developers, creators, and teams.
It blends real-time collaboration, smart coding assistance, and project management — powered by AI copilots.
⚡ Built by: The Binary Brains 🧠
A passionate team of innovators crafting intelligent tools that empower creators, coders, and thinkers to build the future.
✨ Key Highlights
🤖 5 Specialized AI Copilots — Code, Meeting, Tutor, Design & Workflow
💻 Live Pair Programming — Real-time collaborative coding sessions
📁 Project Management — Import, fork & manage GitHub projects easily
👥 Community Hub — Discover, collaborate & showcase your projects
📊 Analytics Dashboard — Track productivity, focus & coding patterns
🎨 Modern UI — Built with shadcn/ui, Tailwind CSS, and Framer Motion
🎯 Features
🤖 AI Copilots
Copilot	Purpose
🧩 Code Copilot	Write, debug & refactor code instantly
🧠 Tutor Copilot	Learn & understand coding concepts
🎥 Meeting Copilot	Summarize calls & extract key points
🎨 Design Copilot	Get real-time UI/UX feedback
📋 Workflow Copilot	Plan sprints & optimize workflows
💻 Workspace & Projects
Full VS Code-like editor
GitHub Integration for repo import, fork & sync
Multi-file support with tabs
Live Pair Programming mode
Built-in Project Explorer and Task Manager
👥 Community & Collaboration
Customizable Developer Profiles
Nearby Developer Map (like Snapchat Snap Map for devs)
Direct Messaging
Project Showcases and Hackathon Events
📊 Analytics & Insights
Coding Metrics Dashboard
Vibe Score™ – Measure your energy & focus
Focus Rate & Weekly Coding Hours
Beautiful charts & visualizations
🧩 Tech Stack
🖥️ Frontend
React 18 + TypeScript
Vite
Tailwind CSS + shadcn/ui + Radix UI
React Router v6
Framer Motion (animations)
Clerk (authentication)
TanStack Query (data fetching)
⚙️ Backend
Node.js + Express.js
Supabase (Database & Realtime)
OpenAI GPT API (Copilot Intelligence)
WebSockets (Live Collaboration)
🧰 Development Tools
TypeScript
ESLint + Prettier
Git + GitHub
📋 Prerequisites
Make sure you have:
Node.js ≥ 18
npm / yarn / pnpm
Git
🚀 Installation
# 1️⃣ Clone the repository
git clone https://github.com/jharajiv16/VibeXCraft.git
cd VibeXCraft

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the backend
cd server
npm install
npm start

# 4️⃣ Start the frontend
cd ..
npm run dev
⚙️ Environment Setup
Frontend .env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key
VITE_SUPABASE_URL=https://yourproject.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_public_key
VITE_GITHUB_CLIENT_ID=your_github_client_id
Backend .env
NODE_ENV=development
PORT=3001
OPENAI_API_KEY=sk-your_openai_key
OPENAI_MODEL=gpt-3.5-turbo
CORS_ORIGIN=http://localhost:8080
FRONTEND_URL=http://localhost:8080
🏃 Development Commands
# Frontend
npm run dev         # Start development server
npm run build       # Build production
npm run preview     # Preview build
npm run lint        # Run ESLint
npm run deploy      # Deploy to Vercel

# Backend
cd server
npm run dev         # Start backend (watch mode)
npm start           # Start production server
🚀 Deployment
Layer	Recommended Platform
Frontend	Vercel
Backend	Render
Detailed setup guides:
QUICK_DEPLOY.md
DEPLOYMENT_GUIDE.md
🧪 API Overview
Base URL: http://localhost:3001
Endpoint	Method	Description
/health	GET	Health check
/api/copilots/code	POST	Code Copilot
/api/copilots/tutor	POST	Tutor Copilot
/api/copilots/design	POST	Design Copilot
/api/copilots/meeting	POST	Meeting Copilot
/api/copilots/workflow	POST	Workflow Copilot
Example:
curl -X POST http://localhost:3001/api/copilots/code \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain React components", "language": "javascript"}'
🧭 Project Structure
VibeXCraft/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── integrations/
│   └── assets/
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── index.js
├── public/
└── docs/
🤝 Contributing
We ❤️ contributions!
Fork the repository
Create your feature branch
git checkout -b feature/amazing-feature
Commit your work
git commit -m "Add amazing feature"
Push and open a PR 🚀
📝 License
Licensed under the MIT License — see LICENSE.
🙏 Acknowledgments
Special thanks to these amazing tools and platforms:
shadcn/ui
Clerk
Supabase
OpenAI
Vercel
Render
🌟 Star the Repo
If you like what we’re building —
⭐ Star this repo to show your support and follow our journey!
<div align="center">
💡 Crafted with passion by
🧠 The Binary Brains
Creators of VibeXCraft
🌐 Website • 📘 Docs • 🐙 GitHub
“Code. Create. Collaborate. Craft your vibe.”
</div>
