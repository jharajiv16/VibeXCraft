# Fix Vercel Deployment 404 Error

## Problem
Getting `404: NOT_FOUND` error when deploying to Vercel.

## Solution

### Step 1: Use Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "Add New Project"**
3. **Import your GitHub repository**: `jharajiv16/VibeXCraft`
4. **Configure Project**:
   - **Framework Preset**: Select "Vite" (Vercel will auto-detect)
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: Leave empty (Vercel auto-detects for Vite)
   - **Output Directory**: `dist` (Vercel auto-detects for Vite)
   - **Install Command**: Leave empty (default: `npm install`)

5. **Add Environment Variables**:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   VITE_GITHUB_CLIENT_ID=your_github_client_id
   ```

6. **Click "Deploy"**

### Step 2: Verify Build Settings

In Vercel Dashboard → Your Project → Settings → General:
- **Framework Preset**: Vite
- **Build Command**: (auto-detected)
- **Output Directory**: dist
- **Install Command**: (auto-detected)

### Step 3: Check Build Logs

If deployment fails:
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the failed deployment
3. Check the build logs for errors
4. Common issues:
   - Missing environment variables
   - Build errors
   - TypeScript errors

## Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# For production
vercel --prod
```

## Troubleshooting

### Issue: 404 on all routes
**Solution**: The `vercel.json` has been updated with proper rewrites. Make sure it's committed and pushed.

### Issue: Build fails
**Solution**: 
1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Check Node.js version (should be 18+)

### Issue: Environment variables not working
**Solution**:
1. Add variables in Vercel Dashboard → Settings → Environment Variables
2. Redeploy after adding variables
3. Variables starting with `VITE_` are exposed to frontend

### Issue: API calls fail
**Solution**:
1. Make sure `VITE_API_URL` is set correctly
2. Check backend is deployed and accessible
3. Verify CORS is configured in backend

## Updated Files

✅ `vercel.json` - Simplified for Vite auto-detection
✅ `.vercelignore` - Added to exclude unnecessary files

## Next Steps

1. **Delete old deployment** in Vercel (if exists)
2. **Create new project** in Vercel dashboard
3. **Import from GitHub**
4. **Configure** as Vite project
5. **Add environment variables**
6. **Deploy**

---

**The deployment should work now!** 🚀

