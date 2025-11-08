# VibeXCraft AI Copilots Backend Server

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional):**
   ```bash
   # Create a .env file in the server directory
   # The API key is already hardcoded as fallback, but you can override it:
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-3.5-turbo
   PORT=3001
   ```

3. **Start the server:**
   ```bash
   npm start
   # or for development:
   npm run dev
   ```

## API Endpoints

All endpoints are prefixed with `/api/copilots/`

- `POST /api/copilots/code` - Code Copilot (uses OpenAI GPT API)
- `POST /api/copilots/meeting` - Meeting Copilot (uses OpenAI GPT API)
- `POST /api/copilots/tutor` - Tutor Copilot (uses OpenAI GPT API)
- `POST /api/copilots/design` - Design Copilot (uses OpenAI GPT API)
- `POST /api/copilots/workflow` - Workflow Copilot (uses OpenAI GPT API)
- `POST /api/agent/gemini` - Agent endpoint (uses OpenAI GPT API)
- `GET /health` - Health check

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `OPENAI_MODEL` - OpenAI model to use (default: gpt-3.5-turbo)
- `PORT` - Server port (default: 3001)

## Using OpenAI GPT API

All copilots now use OpenAI GPT API. You need to set your OpenAI API key in the `.env` file. Get your API key from https://platform.openai.com/api-keys

### Example Request

```bash
curl -X POST http://localhost:3001/api/copilots/code \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How do I create a React component?",
    "language": "javascript"
  }'
```

### Example Response

```json
{
  "success": true,
  "response": "To create a React component...",
  "copilot": "Code Copilot"
}
```

