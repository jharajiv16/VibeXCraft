// Backend server for VibeXCraft AI Copilots
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Gemini
const gemini = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

// AI Copilot Prompts
const COPILOT_PROMPTS = {
  code: `You are a Code Copilot AI assistant. Your role is to:
- Write, debug, and explain code inline
- Provide code suggestions and improvements
- Explain complex code concepts
- Help with debugging errors
- Suggest best practices and optimizations

Always provide clear, concise, and helpful code-related assistance.`,
  
  meeting: `You are a Meeting Copilot AI assistant. Your role is to:
- Record meeting notes and summaries
- Generate action items from discussions
- Extract key decisions and outcomes
- Organize meeting information chronologically
- Create follow-up task lists

Provide structured, actionable meeting summaries.`,
  
  tutor: `You are a Tutor Copilot AI assistant. Your role is to:
- Teach programming concepts clearly
- Generate practice tasks and exercises
- Explain complex topics in simple terms
- Provide step-by-step learning paths
- Answer questions and provide examples

Make learning engaging and accessible.`,
  
  design: `You are a Design Copilot AI assistant. Your role is to:
- Suggest UI/UX improvements
- Provide color harmony recommendations
- Generate CSS snippets and styling suggestions
- Recommend design patterns and best practices
- Help with responsive design and accessibility

Focus on modern, clean, and user-friendly design solutions.`,
  
  workflow: `You are a Workflow Copilot AI assistant. Your role is to:
- Plan sprints and project timelines
- Auto-generate Kanban boards and task lists
- Suggest workflow optimizations
- Help with project management
- Organize tasks by priority and dependencies

Provide actionable workflow and project management guidance.`,
};

// Helper function to call OpenAI
async function callCopilot(copilotType, userMessage, context = {}) {
  try {
    const systemPrompt = COPILOT_PROMPTS[copilotType] || COPILOT_PROMPTS.code;
    
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ];

    // Add context if provided
    if (context.code) {
      messages.push({
        role: 'assistant',
        content: `Context: ${JSON.stringify(context)}`,
      });
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: messages,
      temperature: 0.7,
      max_tokens: 2000,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`AI Copilot error: ${error.message}`);
  }
}

// Helper to call Gemini Agent
async function callGeminiAgent(userMessage, history = []) {
  if (!gemini) throw new Error('GEMINI_API_KEY not configured');
  try {
    const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-pro';
    const model = gemini.getGenerativeModel({ model: modelName });

    const contents = [
      ...history.map(h => ({ role: h.role === 'assistant' ? 'model' : 'user', parts: [{ text: h.content }] })),
      { role: 'user', parts: [{ text: userMessage }] },
    ];

    const result = await model.generateContent({ contents });
    const text = result?.response?.text?.() || '';
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error(`Gemini agent error: ${error.message}`);
  }
}

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'VibeXCraft AI Copilots API is running' });
});

// Code Copilot
app.post('/api/copilots/code', async (req, res) => {
  try {
    const { message, code, language, context } = req.body;
    
    const prompt = code 
      ? `${message}\n\nHere's the code:\n\`\`\`${language}\n${code}\n\`\`\``
      : message;
    
    const response = await callCopilot('code', prompt, { code, language, ...context });
    
    res.json({ 
      success: true,
      response,
      copilot: 'Code Copilot',
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Meeting Copilot
app.post('/api/copilots/meeting', async (req, res) => {
  try {
    const { message, transcript, participants } = req.body;
    
    const prompt = transcript
      ? `Meeting Transcript:\n${transcript}\n\n${message}`
      : message;
    
    const response = await callCopilot('meeting', prompt, { participants });
    
    res.json({ 
      success: true,
      response,
      copilot: 'Meeting Copilot',
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Tutor Copilot
app.post('/api/copilots/tutor', async (req, res) => {
  try {
    const { message, topic, level, context } = req.body;
    
    const prompt = topic
      ? `Topic: ${topic}\nLevel: ${level || 'beginner'}\n\n${message}`
      : message;
    
    const response = await callCopilot('tutor', prompt, context);
    
    res.json({ 
      success: true,
      response,
      copilot: 'Tutor Copilot',
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Design Copilot
app.post('/api/copilots/design', async (req, res) => {
  try {
    const { message, designType, currentDesign, context } = req.body;
    
    const prompt = currentDesign
      ? `Current Design:\n${currentDesign}\n\n${message}`
      : message;
    
    const response = await callCopilot('design', prompt, { designType, ...context });
    
    res.json({ 
      success: true,
      response,
      copilot: 'Design Copilot',
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Workflow Copilot
app.post('/api/copilots/workflow', async (req, res) => {
  try {
    const { message, projectType, tasks, context } = req.body;
    
    const prompt = tasks
      ? `Tasks:\n${JSON.stringify(tasks)}\n\n${message}`
      : message;
    
    const response = await callCopilot('workflow', prompt, { projectType, ...context });
    
    res.json({ 
      success: true,
      response,
      copilot: 'Workflow Copilot',
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Generic copilot endpoint
app.post('/api/copilots/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { message, ...context } = req.body;
    
    if (!COPILOT_PROMPTS[type]) {
      return res.status(400).json({ 
        success: false,
        error: `Unknown copilot type: ${type}`,
      });
    }
    
    const response = await callCopilot(type, message, context);
    
    res.json({ 
      success: true,
      response,
      copilot: `${type.charAt(0).toUpperCase() + type.slice(1)} Copilot`,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message,
    });
  }
});

// Gemini Agent endpoint
app.post('/api/agent/gemini', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'message is required' });
    }
    const response = await callGeminiAgent(message, Array.isArray(history) ? history : []);
    res.json({ success: true, response, agent: 'Gemini' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 VibeXCraft AI Copilots API running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
});

export default app;

