# 🔧 Fix: Set VITE_API_URL in Vercel (STEP BY STEP)

## The Problem

Your frontend is still calling `http://localhost:3001` because `VITE_API_URL` is **NOT SET** in Vercel environment variables.

## ⚠️ IMPORTANT: Vite Environment Variables

**Vite builds environment variables at BUILD TIME, not runtime!**

This means:
- ❌ Setting the variable AFTER deployment won't work
- ✅ You MUST set it BEFORE building
- ✅ You MUST redeploy after setting it

## Step-by-Step Fix

### Step 1: Deploy Backend to Render (If Not Done)

1. **Go to Render**: https://render.com/dashboard
2. **Click "New +" → "Web Service"**
3. **Connect GitHub**: `jharajiv16/VibeXCraft`
4. **Configure**:
   - **Name**: `vibexcraft-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-3.5-turbo
   CORS_ORIGIN=https://vibe-x-craft.vercel.app
   FRONTEND_URL=https://vibe-x-craft.vercel.app
   ```
6. **Click "Create Web Service"**
7. **Wait for deployment** (2-3 minutes)
8. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)
9. **Test backend**: Visit `https://your-backend-url.onrender.com/health`

### Step 2: Set Environment Variable in Vercel (CRITICAL!)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click on your project**: `vibe-x-craft` (or whatever your project name is)
3. **Click "Settings"** (top menu)
4. **Click "Environment Variables"** (left sidebar)
5. **Click "Add New"** button
6. **Fill in**:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (use YOUR actual Render URL!)
   - **Environment**: Select **ALL** (Production, Preview, Development)
   - **Click "Save"**

### Step 3: Redeploy Frontend (REQUIRED!)

**You MUST redeploy after adding environment variables!**

#### Option A: Redeploy via Dashboard (Easiest)

1. **Go to "Deployments" tab** (top menu)
2. **Find the latest deployment**
3. **Click the "..." (three dots)** on the right
4. **Click "Redeploy"**
5. **Select "Use existing Build Cache"** = OFF (unchecked)
6. **Click "Redeploy"**
7. **Wait 2-3 minutes** for deployment to complete

#### Option B: Redeploy via Git (Alternative)

1. **Make a small change** to any file (or just add a space)
2. **Commit and push**:
   ```bash
   git commit --allow-empty -m "trigger redeploy"
   git push origin main
   ```
3. **Vercel will automatically rebuild** with new environment variables

### Step 4: Verify Environment Variable

1. **Go to "Deployments" tab**
2. **Click on the latest deployment**
3. **Click "Build Logs"**
4. **Look for**: `VITE_API_URL` in the build output
5. **Should see**: Your Render backend URL (not localhost)

### Step 5: Test

1. **Visit your Vercel app**: `https://vibe-x-craft.vercel.app`
2. **Open browser DevTools** (F12)
3. **Go to "Console" tab**
4. **Go to "Network" tab**
5. **Navigate to**: `/ai/copilot`
6. **Send a test message**
7. **Check Network tab**: Should see request to your Render backend URL (not localhost)

## Common Mistakes

### ❌ Mistake 1: Setting variable but not redeploying
**Fix**: You MUST redeploy after setting environment variables!

### ❌ Mistake 2: Setting variable only for "Production"
**Fix**: Set for ALL environments (Production, Preview, Development)

### ❌ Mistake 3: Using localhost in production
**Fix**: Use your Render backend URL (e.g., `https://vibexcraft-backend.onrender.com`)

### ❌ Mistake 4: Backend not deployed
**Fix**: Deploy backend to Render first, then set `VITE_API_URL` to that URL

### ❌ Mistake 5: Wrong environment variable name
**Fix**: Must be exactly `VITE_API_URL` (case-sensitive)

## Verification Checklist

- [ ] Backend deployed to Render
- [ ] Backend URL copied (e.g., `https://vibexcraft-backend.onrender.com`)
- [ ] Backend health check works: `/health` endpoint returns JSON
- [ ] `VITE_API_URL` set in Vercel environment variables
- [ ] `VITE_API_URL` set for ALL environments (Production, Preview, Development)
- [ ] Frontend redeployed after setting environment variable
- [ ] Build logs show correct `VITE_API_URL` (not localhost)
- [ ] Browser Network tab shows requests to Render URL (not localhost)
- [ ] CORS error is gone
- [ ] AI Copilot works

## Still Not Working?

### Check 1: Environment Variable Format
```
✅ Correct: VITE_API_URL=https://vibexcraft-backend.onrender.com
❌ Wrong: VITE_API_URL = https://vibexcraft-backend.onrender.com (spaces)
❌ Wrong: vite_api_url=https://vibexcraft-backend.onrender.com (lowercase)
```

### Check 2: Backend is Running
```bash
curl https://your-backend-url.onrender.com/health
```
Should return JSON with `"status": "ok"`

### Check 3: Backend CORS is Configured
- Check Render logs for CORS messages
- Should see: `✅ Allowing Vercel domain: https://vibe-x-craft.vercel.app`

### Check 4: Browser Cache
- Clear browser cache
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or use Incognito/Private window

## Quick Test

After redeploying, check the built JavaScript:

1. **Visit your Vercel app**
2. **View page source** (Ctrl+U or Cmd+U)
3. **Search for**: `localhost:3001`
4. **Should NOT find it** - should find your Render URL instead

---

## Summary

1. ✅ Deploy backend to Render
2. ✅ Set `VITE_API_URL` in Vercel (for ALL environments)
3. ✅ Redeploy frontend (REQUIRED!)
4. ✅ Test and verify

**The key is: Set environment variable → Redeploy → Test**

---

**Follow these steps exactly and your CORS error will be fixed!** 🚀

