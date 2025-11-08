# 🚀 Quick Deployment Guide

## Fastest Way to Deploy

### Step 1: Deploy Backend to Render (5 minutes)

1. **Go to Render**: https://render.com
2. **Sign up/Login** (free account works)
3. **Click "New +" → "Web Service"**
4. **Connect GitHub** and select your repository
5. **Configure**:
   - **Name**: `vibexcraft-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   OPENAI_API_KEY=sk-your-actual-openai-key
   OPENAI_MODEL=gpt-3.5-turbo
   ```
7. **Click "Create Web Service"**
8. **Wait for deployment** (2-3 minutes)
9. **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)

### Step 2: Deploy Frontend to Vercel (3 minutes)

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** (free account works)
3. **Click "Add New Project"**
4. **Import GitHub Repository**: Select `VibeXCraft`
5. **Configure**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. **Add Environment Variables**:
   ```
   VITE_API_URL=https://vibexcraft-backend.onrender.com
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   VITE_GITHUB_CLIENT_ID=your_github_client_id
   ```
7. **Click "Deploy"**
8. **Wait for deployment** (2-3 minutes)
9. **Copy your frontend URL** (e.g., `https://vibexcraft.vercel.app`)

### Step 3: Update Backend CORS

1. **Go back to Render dashboard**
2. **Edit your backend service**
3. **Add Environment Variable**:
   ```
   CORS_ORIGIN=https://vibexcraft.vercel.app
   FRONTEND_URL=https://vibexcraft.vercel.app
   ```
4. **Redeploy** the backend service

### Step 4: Update GitHub OAuth (if using)

1. **Go to GitHub** → Settings → Developer settings → OAuth Apps
2. **Edit your OAuth app**
3. **Update Authorization callback URL**:
   ```
   https://vibexcraft.vercel.app/auth/github/callback
   ```
4. **Save changes**

### Step 5: Update Clerk (if using)

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com
2. **Select your application**
3. **Go to Settings** → **Domains**
4. **Add your Vercel domain**: `vibexcraft.vercel.app`
5. **Save changes**

## ✅ Done!

Your app is now live at:
- **Frontend**: `https://vibexcraft.vercel.app`
- **Backend**: `https://vibexcraft-backend.onrender.com`

## Test Your Deployment

1. **Visit your frontend URL**
2. **Test the AI Copilot**: Go to `/ai/copilot`
3. **Send a test message**
4. **Check backend logs** in Render dashboard

## Troubleshooting

### Backend not responding?
- Check Render logs for errors
- Verify `OPENAI_API_KEY` is set correctly
- Check backend URL is accessible

### CORS errors?
- Make sure `CORS_ORIGIN` is set in backend
- Verify frontend URL matches exactly
- Redeploy backend after changing CORS

### Frontend not loading?
- Check Vercel build logs
- Verify all environment variables are set
- Check `VITE_API_URL` points to backend

## Cost

- **Vercel**: Free tier (generous limits)
- **Render**: Free tier (spins down after inactivity, but free)
- **Total**: $0/month for development/testing

---

**That's it! Your app is deployed in ~10 minutes!** 🎉

