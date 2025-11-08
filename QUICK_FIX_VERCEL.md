# ⚡ QUICK FIX: Set VITE_API_URL in Vercel

## The Problem

Your app is calling `localhost:3001` because `VITE_API_URL` is not set in Vercel.

## The Fix (3 Steps)

### 1. Deploy Backend to Render (If Not Done)

1. Go to: https://render.com/dashboard
2. New + → Web Service
3. Connect: `jharajiv16/VibeXCraft`
4. Root Directory: `server`
5. Add env vars:
   ```
   OPENAI_API_KEY=your_key
   CORS_ORIGIN=https://vibe-x-craft.vercel.app
   ```
6. Deploy and **copy your backend URL**

### 2. Set VITE_API_URL in Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project: `vibe-x-craft`
3. Settings → Environment Variables
4. Add New:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (YOUR Render URL!)
   - **Environment**: ALL (Production, Preview, Development)
5. Save

### 3. Redeploy Frontend (IMPORTANT!)

1. Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait 2-3 minutes

## ✅ Done!

Visit your app and test the AI Copilot. It should work now!

## Still Not Working?

1. **Check if variable is set**: Settings → Environment Variables → Look for `VITE_API_URL`
2. **Check if redeployed**: Deployments → Latest deployment should be after you set the variable
3. **Check build logs**: Deployments → Latest → Build Logs → Search for `VITE_API_URL`
4. **Check browser**: Network tab → API request should go to Render URL (not localhost)

---

**The key: Set variable → Redeploy → Test**

