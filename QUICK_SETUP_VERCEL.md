# ⚡ Quick Setup for vibe-x-craft-sdcsdc.vercel.app

## Your Vercel Deployment

**URL**: `https://vibe-x-craft-sdcsdc.vercel.app`

## Setup in 3 Steps

### 1. Deploy Backend (5 min)

```bash
# Go to Render Dashboard
https://render.com/dashboard

# Create new Web Service
- Connect: jharajiv16/VibeXCraft
- Root Directory: server
- Build: npm install
- Start: npm start

# Add Environment Variables:
OPENAI_API_KEY=sk-your-key-here
CORS_ORIGIN=https://vibe-x-craft-sdcsdc.vercel.app
FRONTEND_URL=https://vibe-x-craft-sdcsdc.vercel.app

# Copy your backend URL (e.g., https://vibexcraft-backend.onrender.com)
```

### 2. Set VITE_API_URL in Vercel (2 min)

```bash
# Go to Vercel Dashboard
https://vercel.com/dashboard

# Your Project → Settings → Environment Variables
# Add:
VITE_API_URL=https://your-backend-url.onrender.com
# (Use your actual Render backend URL from Step 1)

# Environment: ALL (Production, Preview, Development)
# Save
```

### 3. Redeploy (2 min)

```bash
# Vercel Dashboard → Deployments
# Click "..." → Redeploy
# Uncheck "Use existing Build Cache"
# Wait 2-3 minutes
```

## Test

1. Visit: `https://vibe-x-craft-sdcsdc.vercel.app`
2. Go to: `/ai/copilot`
3. Send: "Hello"
4. Should work! ✅

## Need Your Backend URL?

After deploying to Render, your backend URL will be:
```
https://your-service-name.onrender.com
```

Replace `your-service-name` with whatever you named your Render service.

---

**That's it! Your app should work now.** 🚀

