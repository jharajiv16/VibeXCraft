# 🚨 URGENT: Fix CORS Error Now

## Quick Fix (5 minutes)

### Problem
Your frontend on Vercel (`https://vibe-x-craft.vercel.app`) is trying to call `localhost:3001` which doesn't work.

### Solution

#### 1. Deploy Backend to Render (2 minutes)

1. Go to: https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Connect GitHub: `jharajiv16/VibeXCraft`
4. Configure:
   - **Name**: `vibexcraft-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_key
   OPENAI_MODEL=gpt-3.5-turbo
   PORT=10000
   CORS_ORIGIN=https://vibe-x-craft.vercel.app
   ```
6. Click "Create Web Service"
7. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)

#### 2. Update Vercel Environment Variable (1 minute)

1. Go to: https://vercel.com/dashboard
2. Select your project: `vibe-x-craft`
3. Go to **Settings** → **Environment Variables**
4. **Add/Update**:
   ```
   VITE_API_URL=https://vibexcraft-backend.onrender.com
   ```
   ⚠️ Replace with YOUR actual Render backend URL!

#### 3. Redeploy Frontend (1 minute)

1. In Vercel Dashboard → **Deployments**
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes

#### 4. Test (1 minute)

1. Visit: `https://vibe-x-craft.vercel.app`
2. Go to: `/ai/copilot`
3. Send a test message
4. Should work now! ✅

## Why This Happens

- Frontend on Vercel tries to call `localhost:3001` (default fallback)
- `localhost` doesn't work from production
- Need to set `VITE_API_URL` to your deployed backend URL

## What Changed

✅ Backend now auto-allows all Vercel domains
✅ Better CORS logging
✅ More flexible CORS configuration

---

**Do these 4 steps and your CORS error will be fixed!** 🚀

