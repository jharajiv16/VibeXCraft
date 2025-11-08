# 🔧 STEP-BY-STEP FIX - Follow These Steps Exactly

## Current Error

You're seeing: **"Configuration Error: VITE_API_URL is not set in Vercel!"**

This means your frontend doesn't know where your backend is.

## Fix in 4 Steps

### ✅ Step 1: Deploy Backend to Render (5 minutes)

**If you haven't deployed the backend yet:**

1. **Go to Render**: https://render.com/dashboard
2. **Sign up/Login** (free account works)
3. **Click "New +" → "Web Service"**
4. **Connect GitHub**:
   - Click "Connect GitHub"
   - Select: `jharajiv16/VibeXCraft`
   - Click "Connect"
5. **Configure Service**:
   - **Name**: `vibexcraft-backend`
   - **Region**: Oregon (or closest to you)
   - **Branch**: `main`
   - **Root Directory**: `server` ⚠️ IMPORTANT!
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. **Add Environment Variables** (Click "Advanced" → "Add Environment Variable"):
   ```
   NODE_ENV = production
   PORT = 10000
   OPENAI_API_KEY = sk-your-actual-openai-api-key-here
   OPENAI_MODEL = gpt-3.5-turbo
   CORS_ORIGIN = https://vibe-x-craft.vercel.app
   FRONTEND_URL = https://vibe-x-craft.vercel.app
   ```
7. **Click "Create Web Service"**
8. **Wait for deployment** (2-3 minutes)
9. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)
10. **Test it**: Visit `https://your-backend-url.onrender.com/health`
    - Should see JSON with `"status": "ok"`

**If backend is already deployed:**
- Go to Render Dashboard
- Find your backend service
- Copy the URL (e.g., `https://vibexcraft-backend.onrender.com`)

---

### ✅ Step 2: Set VITE_API_URL in Vercel (2 minutes)

1. **Go to Vercel**: https://vercel.com/dashboard
2. **Click on your project**: `vibe-x-craft` (or whatever your project name is)
3. **Click "Settings"** (top menu bar)
4. **Click "Environment Variables"** (left sidebar, under "Configuration")
5. **Click "Add New"** button (top right)
6. **Fill in the form**:
   - **Key**: `VITE_API_URL` (exactly this, case-sensitive)
   - **Value**: `https://your-backend-url.onrender.com` (use YOUR actual Render URL from Step 1)
   - **Environment**: ✅ Check ALL three:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
7. **Click "Save"**
8. **Verify**: You should see `VITE_API_URL` in the list

---

### ✅ Step 3: Redeploy Frontend (2 minutes)

**⚠️ CRITICAL: You MUST redeploy after setting the environment variable!**

1. **Stay in Vercel Dashboard**
2. **Click "Deployments"** tab (top menu bar)
3. **Find the latest deployment** (should be at the top)
4. **Click the "..." (three dots)** on the right side of that deployment
5. **Click "Redeploy"** from the dropdown menu
6. **In the popup**:
   - ✅ **Uncheck** "Use existing Build Cache" (important!)
   - Click "Redeploy"
7. **Wait 2-3 minutes** for deployment to complete
8. **Click on the new deployment** to see build logs
9. **Verify**: In build logs, you should see your Render URL (not localhost)

---

### ✅ Step 4: Test (1 minute)

1. **Visit your app**: `https://vibe-x-craft.vercel.app`
2. **Open Browser DevTools** (Press F12)
3. **Go to "Console" tab**
4. **Look for**: Should see `✅ VITE_API_URL is set: https://your-backend-url.onrender.com`
5. **Go to**: `/ai/copilot`
6. **Send a test message**: "Hello"
7. **Check "Network" tab**:
   - Should see request to: `https://your-backend-url.onrender.com/api/copilots/code`
   - Should NOT see: `localhost:3001`
8. **If it works**: You should get a response from the AI!

---

## Troubleshooting

### Problem: Still seeing "VITE_API_URL is not set"

**Check 1**: Is the variable set in Vercel?
- Go to Vercel → Settings → Environment Variables
- Look for `VITE_API_URL`
- If missing, add it (Step 2)

**Check 2**: Did you redeploy?
- Go to Deployments tab
- Latest deployment should be AFTER you set the variable
- If not, redeploy (Step 3)

**Check 3**: Is the variable name correct?
- Must be exactly: `VITE_API_URL` (case-sensitive)
- Must start with `VITE_`

### Problem: Backend not responding

**Check 1**: Is backend deployed?
- Go to Render Dashboard
- Check if service is "Live" (green)
- If "Sleeping", click "Manual Deploy" to wake it up

**Check 2**: Test backend directly:
```bash
curl https://your-backend-url.onrender.com/health
```
Should return JSON with `"status": "ok"`

**Check 3**: Check backend logs:
- Go to Render Dashboard → Your Backend Service → Logs
- Look for errors
- Should see: `✅ Allowing Vercel domain: https://vibe-x-craft.vercel.app`

### Problem: CORS error

**Solution**: Backend CORS is already configured to allow Vercel domains. Make sure:
1. Backend is deployed to Render
2. `CORS_ORIGIN` is set in Render environment variables
3. Backend is redeployed after setting CORS_ORIGIN

---

## Verification Checklist

Before testing, make sure:

- [ ] Backend deployed to Render
- [ ] Backend URL copied (e.g., `https://vibexcraft-backend.onrender.com`)
- [ ] Backend health check works (`/health` endpoint)
- [ ] `VITE_API_URL` set in Vercel
- [ ] `VITE_API_URL` set for ALL environments (Production, Preview, Development)
- [ ] Frontend redeployed after setting `VITE_API_URL`
- [ ] Build logs show correct `VITE_API_URL` (not localhost)
- [ ] Browser console shows `✅ VITE_API_URL is set`
- [ ] Network tab shows requests to Render URL (not localhost)

---

## Quick Reference

### Backend URL Format
```
https://your-service-name.onrender.com
```

### Environment Variable Format
```
VITE_API_URL=https://your-service-name.onrender.com
```

### Vercel Dashboard Links
- Dashboard: https://vercel.com/dashboard
- Environment Variables: https://vercel.com/dashboard/[project]/settings/environment-variables
- Deployments: https://vercel.com/dashboard/[project]/deployments

### Render Dashboard Links
- Dashboard: https://render.com/dashboard
- Create Service: https://dashboard.render.com/new

---

## Summary

1. ✅ **Deploy backend** to Render → Get backend URL
2. ✅ **Set `VITE_API_URL`** in Vercel → Use backend URL
3. ✅ **Redeploy frontend** in Vercel → Required!
4. ✅ **Test** → Should work now!

---

**Follow these steps exactly and your error will be fixed!** 🚀

If you're still having issues after following these steps, check the troubleshooting section above.

