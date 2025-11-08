# Deploy Backend to Render

## Step 1: Create Render Account
Go to https://render.com and sign up (free account works)

## Step 2: Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select the repository: `jharajiv16/VibeXCraft`

## Step 3: Configure Service
- **Name**: `vibexcraft-backend`
- **Region**: Oregon (or closest to you)
- **Branch**: `main`
- **Root Directory**: `server`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free

## Step 4: Set Environment Variables

Add these in Render dashboard:
```
NODE_ENV=production
PORT=10000
OPENAI_API_KEY=sk-your-actual-openai-api-key
OPENAI_MODEL=gpt-3.5-turbo
CORS_ORIGIN=https://your-frontend-url.vercel.app
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## Step 5: Deploy
Click "Create Web Service" and wait for deployment (2-3 minutes)

## Step 6: Get Your Backend URL
Copy your backend URL (e.g., `https://vibexcraft-backend.onrender.com`)

## Step 7: Update Frontend
Update `VITE_API_URL` in Vercel to point to your Render backend URL

