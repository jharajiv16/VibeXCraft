# 🔍 How to Check If VITE_API_URL is Set in Vercel

## Quick Check

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click on your project**: `vibe-x-craft`
3. **Click "Settings"** → **"Environment Variables"**
4. **Look for**: `VITE_API_URL`
5. **Check the value**: Should be your Render backend URL (NOT localhost)

## If VITE_API_URL is Missing

### Step 1: Add It
1. Click **"Add New"**
2. **Key**: `VITE_API_URL`
3. **Value**: `https://your-backend-url.onrender.com`
4. **Environment**: Select **ALL** (Production, Preview, Development)
5. Click **"Save"**

### Step 2: Redeploy (REQUIRED!)
1. Go to **"Deployments"** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

## Verify It's Working

### Method 1: Check Build Logs
1. Go to **"Deployments"** tab
2. Click on latest deployment
3. Click **"Build Logs"**
4. Search for: `VITE_API_URL`
5. Should see your Render URL (not localhost)

### Method 2: Check Browser Network Tab
1. Visit your Vercel app
2. Open DevTools (F12)
3. Go to **"Network"** tab
4. Navigate to `/ai/copilot`
5. Send a test message
6. Look for API request
7. **Request URL should be**: Your Render backend URL (NOT localhost)

### Method 3: Check Source Code
1. Visit your Vercel app
2. View page source (Ctrl+U)
3. Search for: `localhost:3001`
4. **Should NOT find it** (if found, environment variable is not set)

## Common Issues

### Issue: Variable is set but still using localhost
**Solution**: You must redeploy after setting the variable!

### Issue: Variable only set for Production
**Solution**: Set for ALL environments (Production, Preview, Development)

### Issue: Variable name is wrong
**Solution**: Must be exactly `VITE_API_URL` (case-sensitive, with `VITE_` prefix)

---

**If you see `localhost:3001` in the browser, the environment variable is NOT set or the app was NOT redeployed!**

