# VibeXCraft AI Copilots Backend Server

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env and add your OpenAI API key
   ```

3. **Start the server:**
   ```bash
   npm start
   # or for development:
   npm run dev
   ```

## API Endpoints

All endpoints are prefixed with `/api/copilots/`

- `POST /api/copilots/code` - Code Copilot
- `POST /api/copilots/meeting` - Meeting Copilot
- `POST /api/copilots/tutor` - Tutor Copilot
- `POST /api/copilots/design` - Design Copilot
- `POST /api/copilots/workflow` - Workflow Copilot
- `GET /health` - Health check

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `OPENAI_MODEL` - Model to use (default: gpt-4-turbo-preview)
- `PORT` - Server port (default: 3001)
- `CORS_ORIGIN` - Frontend URL for CORS (default: http://localhost:5173)

