# ✅ Setup Checklist - Fix VITE_API_URL Error

## Current Status

❌ **Error**: `VITE_API_URL is not set in Vercel!`

## What You Need To Do

### Step 1: Deploy Backend to Render ⏱️ 5 minutes

- [ ] Go to https://render.com/dashboard
- [ ] Sign up/Login (free account)
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub: `jharajiv16/VibeXCraft`
- [ ] Configure:
  - [ ] Name: `vibexcraft-backend`
  - [ ] Root Directory: `server` ⚠️ IMPORTANT!
  - [ ] Build Command: `npm install`
  - [ ] Start Command: `npm start`
  - [ ] Plan: Free
- [ ] Add Environment Variables:
  - [ ] `OPENAI_API_KEY` = your OpenAI API key
  - [ ] `OPENAI_MODEL` = `gpt-3.5-turbo`
  - [ ] `CORS_ORIGIN` = `https://vibe-x-craft.vercel.app`
  - [ ] `FRONTEND_URL` = `https://vibe-x-craft.vercel.app`
- [ ] Click "Create Web Service"
- [ ] Wait for deployment (2-3 minutes)
- [ ] **Copy your backend URL** (e.g., `https://vibexcraft-backend.onrender.com`)
- [ ] Test: Visit `https://your-backend-url.onrender.com/health`
  - Should see: `{"status":"ok",...}`

### Step 2: Set VITE_API_URL in Vercel ⏱️ 2 minutes

- [ ] Go to https://vercel.com/dashboard
- [ ] Click your project: `vibe-x-craft`
- [ ] Click "Settings" (top menu)
- [ ] Click "Environment Variables" (left sidebar)
- [ ] Click "Add New"
- [ ] Fill in:
  - [ ] Key: `VITE_API_URL`
  - [ ] Value: `https://your-backend-url.onrender.com` (use YOUR Render URL!)
  - [ ] Environment: ✅ Check ALL (Production, Preview, Development)
- [ ] Click "Save"
- [ ] Verify: See `VITE_API_URL` in the list

### Step 3: Redeploy Frontend ⏱️ 2 minutes

- [ ] Stay in Vercel Dashboard
- [ ] Click "Deployments" tab
- [ ] Find latest deployment
- [ ] Click "..." (three dots) → "Redeploy"
- [ ] ✅ Uncheck "Use existing Build Cache"
- [ ] Click "Redeploy"
- [ ] Wait 2-3 minutes
- [ ] Check build logs: Should see your Render URL (not localhost)

### Step 4: Test ⏱️ 1 minute

- [ ] Visit: `https://vibe-x-craft.vercel.app`
- [ ] Open browser console (F12)
- [ ] Look for: `✅ VITE_API_URL is set: https://your-backend-url.onrender.com`
- [ ] Go to: `/ai/copilot`
- [ ] Send test message: "Hello"
- [ ] Should get response from AI! ✅

## Quick Links

- **Render Dashboard**: https://render.com/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Environment Variables**: https://vercel.com/dashboard/[project]/settings/environment-variables
- **OpenAI API Keys**: https://platform.openai.com/api-keys

## Need Help?

See detailed instructions in:
- `STEP_BY_STEP_FIX.md` - Complete step-by-step guide
- `VERCEL_ENV_SETUP.md` - Vercel environment setup
- `QUICK_FIX_VERCEL.md` - Quick reference

---

**After completing all steps, your error should be fixed!** 🚀

