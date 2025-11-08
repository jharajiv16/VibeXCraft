# VibeXCraft AI Copilots API Setup Guide

## Which API to Use

**OpenAI API** - This is the recommended API for all AI Copilots.

### Why OpenAI API?
- **GPT-4 Turbo**: Most advanced language model
- **Reliable**: Industry-standard API
- **Versatile**: Works for all copilot types (Code, Meeting, Tutor, Design, Workflow)
- **Well-documented**: Extensive documentation and examples

### Alternative APIs (if needed):
- **Anthropic Claude API**: Good alternative for code and reasoning
- **Google Gemini API**: Alternative option
- **Open Source Models**: Ollama, Hugging Face (for self-hosting)

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **"Create new secret key"**
5. Copy your API key (you'll only see it once!)

### 2. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to `.env`:
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   OPENAI_MODEL=gpt-4-turbo-preview
   PORT=3001
   CORS_ORIGIN=http://localhost:5173
   ```

5. Start the backend server:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

### 3. Frontend Setup

1. Add API URL to your `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

2. The frontend will automatically connect to the backend API.

## API Endpoints

### Code Copilot
```
POST /api/copilots/code
Body: {
  "message": "Explain this React component",
  "code": "const Component = () => {...}",
  "language": "javascript",
  "context": {}
}
```

### Meeting Copilot
```
POST /api/copilots/meeting
Body: {
  "message": "Summarize this meeting",
  "transcript": "Meeting transcript...",
  "participants": ["Alice", "Bob"]
}
```

### Tutor Copilot
```
POST /api/copilots/tutor
Body: {
  "message": "Explain React hooks",
  "topic": "React",
  "level": "beginner",
  "context": {}
}
```

### Design Copilot
```
POST /api/copilots/design
Body: {
  "message": "Suggest color palette for dark theme",
  "designType": "color-palette",
  "currentDesign": "...",
  "context": {}
}
```

### Workflow Copilot
```
POST /api/copilots/workflow
Body: {
  "message": "Create sprint plan for next week",
  "projectType": "web-app",
  "tasks": [...],
  "context": {}
}
```

## Testing the API

### Test with curl:
```bash
curl -X POST http://localhost:3001/api/copilots/code \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How do I create a React component?",
    "language": "javascript"
  }'
```

### Test Health Endpoint:
```bash
curl http://localhost:3001/health
```

## Cost Considerations

### OpenAI API Pricing (as of 2024):
- **GPT-4 Turbo**: ~$0.01 per 1K input tokens, ~$0.03 per 1K output tokens
- **GPT-3.5 Turbo**: ~$0.0005 per 1K input tokens, ~$0.0015 per 1K output tokens

### Cost Optimization Tips:
1. Use GPT-3.5 Turbo for simpler tasks
2. Set `max_tokens` limits
3. Cache common responses
4. Use streaming for better UX

## Environment Variables

### Backend (.env in server/):
```env
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4-turbo-preview
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env in root/):
```env
VITE_API_URL=http://localhost:3001
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

## Troubleshooting

### Error: "API key not found"
- Make sure `.env` file exists in `server/` directory
- Check that `OPENAI_API_KEY` is set correctly
- Restart the server after changing `.env`

### Error: "CORS error"
- Check `CORS_ORIGIN` in backend `.env`
- Make sure frontend URL matches

### Error: "Rate limit exceeded"
- You've hit OpenAI's rate limit
- Wait a few minutes or upgrade your OpenAI plan

## Production Deployment

1. Set environment variables on your hosting platform
2. Update `CORS_ORIGIN` to your production domain
3. Use environment-specific API keys
4. Enable rate limiting
5. Add authentication middleware

## Next Steps

1. ✅ Get OpenAI API key
2. ✅ Set up backend server
3. ✅ Configure frontend
4. ✅ Test copilots
5. ✅ Deploy to production

For more information, visit: https://platform.openai.com/docs

