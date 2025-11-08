# 🚀 Step-by-Step Vercel Deployment Guide

## The Problem
You're getting `404: NOT_FOUND` error. This is because Vercel needs to auto-detect your Vite project correctly.

## The Solution

### Option 1: Deploy via Vercel Dashboard (Easiest) ⭐

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Sign up or log in (free account works)

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select: `jharajiv16/VibeXCraft`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vercel will auto-detect "Vite" ✅
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave EMPTY (Vercel auto-detects for Vite)
   - **Output Directory**: Leave EMPTY (Vercel auto-detects `dist` for Vite)
   - **Install Command**: Leave EMPTY (default: `npm install`)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL = https://your-backend-url.onrender.com
   VITE_CLERK_PUBLISHABLE_KEY = pk_test_...
   VITE_SUPABASE_URL = https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   VITE_GITHUB_CLIENT_ID = your_github_client_id
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live at: `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Navigate to project directory
cd /Users/rajivranjanjha/Desktop/VibeXCarft

# 4. Deploy (follow prompts)
vercel

# 5. For production deployment
vercel --prod
```

## Important: Delete Old Failed Deployment

If you have an old failed deployment:
1. Go to Vercel Dashboard
2. Find the failed deployment/project
3. Go to Settings → Delete Project
4. Start fresh with Option 1 above

## What Was Fixed

✅ **vercel.json** - Simplified to only include rewrites (Vercel auto-detects Vite)
✅ **.vercelignore** - Added to exclude server and unnecessary files
✅ **.nvmrc** - Added to specify Node.js version 18

## Verify Your Deployment

After deployment:
1. Visit your Vercel URL
2. Check browser console for errors
3. Test navigation (should work with rewrites)
4. Test API calls (make sure `VITE_API_URL` is set)

## Common Issues & Solutions

### Issue: Still getting 404
**Solution**: 
- Delete the old project in Vercel
- Create a new project and import again
- Make sure Framework Preset is set to "Vite" (auto-detected)

### Issue: Build fails
**Solution**:
- Check build logs in Vercel dashboard
- Verify Node.js version (should be 18+)
- Check all dependencies are in `package.json`

### Issue: Environment variables not working
**Solution**:
- Add variables in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables
- Variables must start with `VITE_` to be exposed to frontend

### Issue: Routes not working
**Solution**:
- The `vercel.json` rewrites are now correct
- Make sure `vercel.json` is committed and pushed
- Redeploy after updating `vercel.json`

## Next Steps

1. ✅ **Delete old deployment** (if exists)
2. ✅ **Create new project** in Vercel
3. ✅ **Import from GitHub**
4. ✅ **Let Vercel auto-detect Vite**
5. ✅ **Add environment variables**
6. ✅ **Deploy**

---

**Your deployment should work now!** 🎉

Follow Option 1 (Dashboard) for the easiest deployment experience.

