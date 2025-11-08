# 🚀 VibeXCraft Deployment Guide

## Overview

VibeXCraft is a full-stack application with:
- **Frontend**: React + Vite (port 8080/8081)
- **Backend**: Express.js API (port 3001)
- **Database**: Supabase
- **Authentication**: Clerk
- **AI**: OpenAI GPT API

## Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) ⭐ Recommended

#### Frontend on Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy Frontend**:
   ```bash
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**:
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
     VITE_GITHUB_CLIENT_ID=your_github_client_id
     ```

#### Backend on Render

1. **Create Render Account**: https://render.com

2. **Create New Web Service**:
   - Connect your GitHub repository
   - Select `server` as root directory
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`

3. **Set Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-3.5-turbo
   CORS_ORIGIN=https://your-vercel-app.vercel.app
   ```

4. **Update CORS in server/index.js**:
   Add your Vercel URL to the CORS origins list

### Option 2: Netlify (Frontend) + Railway (Backend)

#### Frontend on Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Create `netlify.toml`**:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variables** in Netlify Dashboard

#### Backend on Railway

1. **Create Railway Account**: https://railway.app

2. **Deploy from GitHub**:
   - Connect GitHub repository
   - Select `server` directory
   - Railway will auto-detect Node.js

3. **Set Environment Variables** in Railway dashboard

### Option 3: Full Stack on Render

Deploy both frontend and backend on Render using `render.yaml`:

1. **Create Render Account**: https://render.com

2. **Connect GitHub Repository**

3. **Create Blueprint**:
   - Render will detect `render.yaml`
   - Deploy both services automatically

4. **Set Environment Variables** for both services

## Environment Variables

### Frontend (.env)

```env
VITE_API_URL=https://your-backend-url.onrender.com
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

### Backend (server/.env)

```env
NODE_ENV=production
PORT=10000
OPENAI_API_KEY=sk-proj-...
OPENAI_MODEL=gpt-3.5-turbo
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

## Quick Deploy Scripts

### Deploy to Vercel (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Render (Backend)

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Select `server` as root directory
5. Set build/start commands
6. Add environment variables
7. Deploy

## Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend API deployed and accessible
- [ ] Environment variables set correctly
- [ ] CORS configured for production URLs
- [ ] OpenAI API key set in backend
- [ ] Supabase credentials set in frontend
- [ ] Clerk credentials set in frontend
- [ ] GitHub OAuth configured (if using)
- [ ] Test all copilot endpoints
- [ ] Test authentication flow
- [ ] Test workspace functionality

## Troubleshooting

### CORS Errors
- Make sure backend CORS includes your frontend URL
- Check `CORS_ORIGIN` environment variable

### API Not Found
- Verify `VITE_API_URL` points to your backend
- Check backend is running and accessible

### Environment Variables Not Loading
- Restart deployment after adding variables
- Check variable names match exactly (case-sensitive)

### Build Errors
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Render: https://render.com/docs
- Railway: https://railway.app/docs
- Netlify: https://docs.netlify.com

---

**Recommended**: Vercel (Frontend) + Render (Backend) for easiest deployment and best performance.

