# 🚨 FIX THIS NOW - Step by Step

## Your Error

```
Access to fetch at 'http://localhost:3001/api/copilots/code' from origin 'https://vibe-x-craft.vercel.app'
```

**This means: `VITE_API_URL` is NOT set in Vercel!**

## Fix in 3 Steps

### Step 1: Get Your Backend URL

**If backend is NOT deployed yet:**

1. Go to: https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Connect: `jharajiv16/VibeXCraft`
4. Root Directory: `server`
5. Build: `npm install`
6. Start: `npm start`
7. Add env:
   ```
   OPENAI_API_KEY=your_key
   CORS_ORIGIN=https://vibe-x-craft.vercel.app
   ```
8. Deploy
9. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)

**If backend IS deployed:**
- Go to Render Dashboard
- Copy your backend URL
- Test it: Visit `https://your-backend-url.onrender.com/health`

### Step 2: Set VITE_API_URL in Vercel

1. **Go to**: https://vercel.com/dashboard
2. **Click**: Your project (`vibe-x-craft`)
3. **Click**: "Settings" (top menu)
4. **Click**: "Environment Variables" (left sidebar)
5. **Click**: "Add New"
6. **Fill in**:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (USE YOUR ACTUAL URL!)
   - **Environment**: ✅ Check ALL (Production, Preview, Development)
7. **Click**: "Save"

### Step 3: Redeploy (MUST DO THIS!)

1. **Go to**: "Deployments" tab
2. **Find**: Latest deployment
3. **Click**: "..." (three dots)
4. **Click**: "Redeploy"
5. **Wait**: 2-3 minutes

## Verify It's Fixed

1. **Visit**: `https://vibe-x-craft.vercel.app`
2. **Open**: Browser console (F12)
3. **Go to**: `/ai/copilot`
4. **Send**: Test message
5. **Check**: Network tab → Should see request to YOUR Render URL (not localhost)

## Still Not Working?

### Check 1: Is VITE_API_URL set?
- Go to Vercel → Settings → Environment Variables
- Look for `VITE_API_URL`
- Value should be your Render URL (NOT localhost)

### Check 2: Did you redeploy?
- Go to Deployments tab
- Latest deployment should be AFTER you set the variable
- If not, redeploy now!

### Check 3: Check build logs
- Go to Deployments → Latest → Build Logs
- Search for: `VITE_API_URL`
- Should see your Render URL

### Check 4: Check browser
- View page source (Ctrl+U)
- Search for: `localhost:3001`
- Should NOT find it (if found, variable not set or not redeployed)

## Quick Test

After redeploying, check:
```bash
# In browser console (F12)
console.log(import.meta.env.VITE_API_URL)
# Should show: https://your-backend-url.onrender.com
# NOT: undefined or localhost:3001
```

---

## Summary

1. ✅ Deploy backend to Render (if not done)
2. ✅ Set `VITE_API_URL` in Vercel
3. ✅ Redeploy frontend
4. ✅ Test

**The key: Set variable → Redeploy → Test**

---

**Do these 3 steps and your error will be fixed!** 🚀

