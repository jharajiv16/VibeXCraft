# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c2bd5ee5-9809-4592-8189-0a67b233d3af

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c2bd5ee5-9809-4592-8189-0a67b233d3af) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Quick Deployment (Recommended)

**Frontend**: Deploy to Vercel  
**Backend**: Deploy to Render

See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for step-by-step instructions.

### Deployment Options

1. **Vercel (Frontend) + Render (Backend)** - ⭐ Recommended
   - See [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md) and [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md)

2. **Netlify (Frontend) + Railway (Backend)**
   - See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

3. **Full Stack on Render**
   - Uses `render.yaml` for both services
   - See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Environment Variables

**Frontend** (.env):
- `VITE_API_URL` - Backend API URL
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication key
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase anon key
- `VITE_GITHUB_CLIENT_ID` - GitHub OAuth client ID

**Backend** (server/.env):
- `OPENAI_API_KEY` - OpenAI API key (required)
- `OPENAI_MODEL` - OpenAI model (default: gpt-3.5-turbo)
- `PORT` - Server port (default: 3001)
- `CORS_ORIGIN` - Frontend URL for CORS

### Deployment Steps

1. **Deploy Backend** to Render (see [DEPLOY_BACKEND.md](./DEPLOY_BACKEND.md))
2. **Deploy Frontend** to Vercel (see [DEPLOY_FRONTEND.md](./DEPLOY_FRONTEND.md))
3. **Update CORS** in backend with frontend URL
4. **Set Environment Variables** in both platforms
5. **Test** your deployment

For detailed instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) or [QUICK_DEPLOY.md](./QUICK_DEPLOY.md).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

- **Vercel**: Add custom domain in project settings
- **Render**: Add custom domain in service settings
- **Netlify**: Add custom domain in site settings

Read more:
- [Vercel Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Render Custom Domains](https://render.com/docs/custom-domains)
- [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
