// Backend server for VibeXCraft AI Copilots
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import copilotRoutes from './routes/copilotRoutes.js';

// Import middleware
import { requestLogger } from './middleware/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.CORS_ORIGIN,
  process.env.FRONTEND_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  process.env.NETLIFY_URL ? `https://${process.env.NETLIFY_URL}` : null,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // In development, allow all origins
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    // In production, check against allowed origins
    if (allowedOrigins.some(allowed => origin === allowed || origin?.includes(allowed))) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/copilots', copilotRoutes);

// Health check
app.get('/health', async (req, res) => {
  try {
    const { getApiKeyStatus } = await import('./controllers/copilotController.js');
    const apiKeyStatus = getApiKeyStatus();
    
    res.json({ 
      status: 'ok', 
      message: 'VibeXCraft AI Copilot API is running',
      version: '3.0.0',
      provider: 'OpenAI GPT',
      endpoints: {
        code: 'POST /api/copilots/code',
        meeting: 'POST /api/copilots/meeting',
        tutor: 'POST /api/copilots/tutor',
        design: 'POST /api/copilots/design',
        workflow: 'POST /api/copilots/workflow',
      },
      apiKey: apiKeyStatus.valid ? 'set' : 'not set',
      apiKeyStatus: apiKeyStatus.message,
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
    });
  } catch (error) {
    res.json({
      status: 'ok',
      message: 'VibeXCraft AI Copilot API is running',
      version: '3.0.0',
      provider: 'OpenAI GPT',
      apiKey: 'error checking',
      error: error.message,
    });
  }
});

// 404 handler
app.use(notFoundHandler);

// Error handler (must be last)
app.use(errorHandler);

// Start server
const server = app.listen(PORT, async () => {
  console.log(`🚀 VibeXCraft AI Copilot API running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🔑 Using OpenAI GPT API`);
  console.log(`🤖 AI Copilot: POST /api/copilots/code`);
  
  // Check API key status
  try {
    const { getApiKeyStatus } = await import('./controllers/copilotController.js');
    const apiKeyStatus = getApiKeyStatus();
    
    if (!apiKeyStatus.valid) {
      console.warn(`⚠️  WARNING: ${apiKeyStatus.message}`);
      console.warn(`⚠️  To add your OpenAI API key:`);
      console.warn(`   1. Get API key from: https://platform.openai.com/api-keys`);
      console.warn(`   2. Open server/.env file`);
      console.warn(`   3. Add: OPENAI_API_KEY=your_actual_api_key`);
      console.warn(`   4. Restart the server`);
    } else {
      const apiKey = process.env.OPENAI_API_KEY;
      console.log(`✅ OPENAI_API_KEY is set (${apiKey ? apiKey.substring(0, 15) + '...' : 'OK'})`);
    }
  } catch (error) {
    console.error(`❌ Error checking API key: ${error.message}`);
  }
  
  const model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
  console.log(`📦 Using model: ${model}`);
  console.log(`💡 Available models: gpt-3.5-turbo, gpt-4, gpt-4-turbo-preview`);
});

// Handle server errors gracefully
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error(`💡 To fix this, run: lsof -ti:${PORT} | xargs kill -9`);
    console.error(`💡 Or change the PORT in your .env file`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});

export default app;
