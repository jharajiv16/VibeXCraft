# 🔧 Fix CORS Error - Frontend on Vercel

## The Problem

You're getting this error:
```
Access to fetch at 'http://localhost:3001/api/copilots/code' from origin 'https://vibe-x-craft.vercel.app' has been blocked by CORS policy
```

## Root Cause

1. **Frontend is deployed** on Vercel: `https://vibe-x-craft.vercel.app`
2. **Frontend is trying to call** `http://localhost:3001` (local backend)
3. **Backend is not deployed** OR `VITE_API_URL` is not set in Vercel

## Solution

### Step 1: Deploy Backend to Render (If Not Done)

1. **Go to Render Dashboard**: https://render.com/dashboard
2. **Create New Web Service**
   - Connect GitHub: `jharajiv16/VibeXCraft`
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

3. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-3.5-turbo
   CORS_ORIGIN=https://vibe-x-craft.vercel.app
   FRONTEND_URL=https://vibe-x-craft.vercel.app
   ```

4. **Deploy and Copy Backend URL**
   - Example: `https://vibexcraft-backend.onrender.com`

### Step 2: Update Vercel Environment Variables

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select Your Project**: `VibeXCraft` or `vibe-x-craft`
3. **Go to Settings** → **Environment Variables**
4. **Add/Update**:
   ```
   VITE_API_URL=https://vibexcraft-backend.onrender.com
   ```
   ⚠️ **IMPORTANT**: Replace with your actual Render backend URL!

5. **Redeploy**:
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

### Step 3: Verify Backend CORS

The backend has been updated to automatically allow:
- ✅ All Vercel domains (`.vercel.app`)
- ✅ All Netlify domains (`.netlify.app`)
- ✅ Custom domains from environment variables

### Step 4: Test

1. **Visit your Vercel app**: `https://vibe-x-craft.vercel.app`
2. **Go to AI Copilot**: `/ai/copilot`
3. **Send a test message**
4. **Check browser console** - should see successful API calls

## Quick Fix Checklist

- [ ] Backend deployed to Render
- [ ] Backend URL copied (e.g., `https://vibexcraft-backend.onrender.com`)
- [ ] `VITE_API_URL` set in Vercel environment variables
- [ ] `CORS_ORIGIN` set in Render environment variables
- [ ] Frontend redeployed after updating `VITE_API_URL`
- [ ] Backend redeployed after updating CORS settings

## Troubleshooting

### Still Getting CORS Error?

1. **Check Backend Logs** in Render:
   - Go to Render Dashboard → Your Backend Service → Logs
   - Look for CORS messages
   - Should see: `✅ Allowing Vercel domain: https://vibe-x-craft.vercel.app`

2. **Verify Environment Variables**:
   - Vercel: `VITE_API_URL` should be your Render backend URL
   - Render: `CORS_ORIGIN` should be your Vercel frontend URL

3. **Check Network Tab**:
   - Open browser DevTools → Network tab
   - Look for the API request
   - Check the request URL (should be Render URL, not localhost)
   - Check response headers (should have `Access-Control-Allow-Origin`)

4. **Clear Browser Cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache

### Backend Not Responding?

1. **Check Render Service Status**:
   - Should be "Live" (green)
   - If "Sleeping", click "Manual Deploy" to wake it up

2. **Test Backend Directly**:
   ```bash
   curl https://your-backend-url.onrender.com/health
   ```
   Should return JSON with status "ok"

3. **Check Backend Logs**:
   - Look for errors in Render logs
   - Check if OpenAI API key is set correctly

## What Was Fixed

✅ **Backend CORS** - Now automatically allows all Vercel and Netlify domains
✅ **Better Logging** - Backend logs which origins are allowed/blocked
✅ **Flexible CORS** - Supports multiple deployment platforms

## Next Steps

After fixing:
1. ✅ Test all AI Copilots
2. ✅ Test other API endpoints
3. ✅ Verify production deployment works
4. ✅ Update documentation if needed

---

**The CORS error should be fixed now!** 🎉

Make sure to:
1. Deploy backend to Render
2. Set `VITE_API_URL` in Vercel
3. Set `CORS_ORIGIN` in Render
4. Redeploy both services

