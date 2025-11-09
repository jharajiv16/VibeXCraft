# 🚀 Setup for vibe-x-craft-sdcsdc.vercel.app

## Your Vercel URL
**Frontend**: `https://vibe-x-craft-sdcsdc.vercel.app`

## What You Need To Do

### Step 1: Deploy Backend to Render (5 minutes)

1. **Go to**: https://render.com/dashboard
2. **Sign up/Login** (free account)
3. **Click "New +" → "Web Service"**
4. **Connect GitHub**: Select `jharajiv16/VibeXCraft`
5. **Configure**:
   - **Name**: `vibexcraft-backend` (or any name you like)
   - **Root Directory**: `server` ⚠️ **IMPORTANT!**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. **Click "Advanced"** → **"Add Environment Variable"**
7. **Add these variables**:
   ```
   NODE_ENV = production
   PORT = 10000
   OPENAI_API_KEY = sk-your-actual-openai-api-key-here
   OPENAI_MODEL = gpt-3.5-turbo
   CORS_ORIGIN = https://vibe-x-craft-sdcsdc.vercel.app
   FRONTEND_URL = https://vibe-x-craft-sdcsdc.vercel.app
   ```
8. **Click "Create Web Service"**
9. **Wait 2-3 minutes** for deployment
10. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)
11. **Test it**: Visit `https://your-backend-url.onrender.com/health`
    - Should see: `{"status":"ok",...}`

### Step 2: Set VITE_API_URL in Vercel (2 minutes)

1. **Go to**: https://vercel.com/dashboard
2. **Find your project**: Look for `vibe-x-craft` or similar
3. **Click on it**
4. **Click "Settings"** (top menu)
5. **Click "Environment Variables"** (left sidebar)
6. **Click "Add New"** button
7. **Fill in**:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (use YOUR Render URL from Step 1)
   - **Environment**: ✅ Check **ALL** three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
8. **Click "Save"**

### Step 3: Redeploy Frontend (2 minutes)

1. **Stay in Vercel Dashboard**
2. **Click "Deployments"** tab (top menu)
3. **Find the latest deployment** (top of the list)
4. **Click the "..." (three dots)** on the right
5. **Click "Redeploy"**
6. **In the popup**:
   - ✅ **Uncheck** "Use existing Build Cache"
   - Click "Redeploy"
7. **Wait 2-3 minutes** for deployment to complete

### Step 4: Test (1 minute)

1. **Visit**: `https://vibe-x-craft-sdcsdc.vercel.app`
2. **Open browser console** (Press F12)
3. **Go to "Console" tab**
4. **Look for**: Should see `✅ VITE_API_URL is set: https://your-backend-url.onrender.com`
5. **Navigate to**: `/ai/copilot`
6. **Send a test message**: "Hello"
7. **Should work!** ✅

## Get Your OpenAI API Key

If you don't have an OpenAI API key:

1. **Go to**: https://platform.openai.com/api-keys
2. **Sign up/Login**
3. **Click "Create new secret key"**
4. **Copy the key** (starts with `sk-`)
5. **Use it in Step 1** as `OPENAI_API_KEY`

## Troubleshooting

### Still seeing "VITE_API_URL is not set"?

**Check**:
1. Go to Vercel → Settings → Environment Variables
2. Look for `VITE_API_URL`
3. If missing, add it (Step 2)
4. If exists, make sure you **redeployed** after adding it (Step 3)

### Backend not working?

**Check**:
1. Go to Render Dashboard
2. Find your backend service
3. Check if it's "Live" (green)
4. If "Sleeping", click "Manual Deploy" to wake it up
5. Check logs for errors

### CORS error?

**Already fixed!** The backend now automatically allows all `*.vercel.app` domains, including `vibe-x-craft-sdcsdc.vercel.app`.

## Quick Checklist

- [ ] Backend deployed to Render
- [ ] Backend URL copied (e.g., `https://vibexcraft-backend.onrender.com`)
- [ ] `OPENAI_API_KEY` set in Render
- [ ] `CORS_ORIGIN` set in Render to `https://vibe-x-craft-sdcsdc.vercel.app`
- [ ] `VITE_API_URL` set in Vercel to your Render backend URL
- [ ] Frontend redeployed in Vercel
- [ ] Tested - AI Copilot works! ✅

## Summary

1. ✅ **Deploy backend** to Render → Get backend URL
2. ✅ **Set `VITE_API_URL`** in Vercel → Use backend URL
3. ✅ **Set `OPENAI_API_KEY`** in Render → Use your OpenAI key
4. ✅ **Redeploy frontend** → Required!
5. ✅ **Test** → Should work!

---

**Follow these steps and your app will work!** 🚀

Need help? Check the other guides:
- `STEP_BY_STEP_FIX.md` - Detailed instructions
- `QUICK_SETUP_VERCEL.md` - Quick reference

