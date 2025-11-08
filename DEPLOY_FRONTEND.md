# Deploy Frontend to Vercel

## Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

## Step 2: Login to Vercel
```bash
vercel login
```

## Step 3: Deploy
```bash
vercel --prod
```

## Step 4: Set Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these variables:
```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

## Step 5: Redeploy

After adding environment variables, redeploy:
```bash
vercel --prod
```

Or trigger redeploy from Vercel dashboard.

