// Client-side API functions for AI Copilots

// Get API URL from environment variable
// In production, this should be set in Vercel environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3001');

// Validate API URL in production
if (import.meta.env.PROD && !API_BASE_URL) {
  console.error('❌ VITE_API_URL is not set in production!');
  console.error('Please set VITE_API_URL in Vercel environment variables.');
  console.error('Go to: Vercel Dashboard → Settings → Environment Variables');
}

export interface CopilotRequest {
  message: string;
  code?: string;
  language?: string;
  context?: Record<string, any>;
}

export interface CopilotResponse {
  success: boolean;
  response: string;
  copilot: string;
  error?: string;
}

// Code Copilot
export async function callCodeCopilot(
  message: string,
  code?: string,
  language?: string,
  context?: Record<string, any>
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, code, language, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Code Copilot Error:', error);
    let errorMsg = error instanceof Error ? error.message : 'Failed to call Code Copilot.';
    
    // Check if it's a CORS or network error
    if (errorMsg.includes('Failed to fetch') || errorMsg.includes('CORS') || errorMsg.includes('localhost')) {
      if (import.meta.env.PROD) {
        errorMsg = `❌ Configuration Error: VITE_API_URL is not set in Vercel!\n\n` +
          `To fix this:\n` +
          `1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables\n` +
          `2. Add: VITE_API_URL=https://your-backend-url.onrender.com\n` +
          `3. Redeploy your frontend\n\n` +
          `See: QUICK_FIX_VERCEL.md for detailed instructions.`;
      } else {
        errorMsg = `❌ Backend not running or CORS error!\n\n` +
          `Make sure:\n` +
          `1. Backend is running on http://localhost:3001\n` +
          `2. CORS is configured correctly\n` +
          `3. Check browser console for details`;
      }
    }
    
    // Clean up any Gemini references
    errorMsg = errorMsg
      .replace(/Gemini/gi, 'OpenAI')
      .replace(/GEMINI/gi, 'OPENAI')
      .replace(/gemini/gi, 'openai')
      .replace(/makersuite\.google\.com/gi, 'platform.openai.com')
      .replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    
    return {
      success: false,
      response: '',
      copilot: 'Code Copilot',
      error: errorMsg,
    };
  }
}

// Meeting Copilot
export async function callMeetingCopilot(
  message: string,
  transcript?: string,
  participants?: string[]
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/meeting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, transcript, participants }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Meeting Copilot Error:', error);
    let errorMsg = error instanceof Error ? error.message : 'Failed to call Meeting Copilot. Make sure the server is running on port 3001.';
    errorMsg = errorMsg.replace(/Gemini/gi, 'OpenAI').replace(/GEMINI/gi, 'OPENAI').replace(/gemini/gi, 'openai').replace(/makersuite\.google\.com/gi, 'platform.openai.com').replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    return {
      success: false,
      response: '',
      copilot: 'Meeting Copilot',
      error: errorMsg,
    };
  }
}

// Tutor Copilot
export async function callTutorCopilot(
  message: string,
  topic?: string,
  level?: string,
  context?: Record<string, any>
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/tutor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, topic, level, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Tutor Copilot Error:', error);
    let errorMsg = error instanceof Error ? error.message : 'Failed to call Tutor Copilot. Make sure the server is running on port 3001.';
    errorMsg = errorMsg.replace(/Gemini/gi, 'OpenAI').replace(/GEMINI/gi, 'OPENAI').replace(/gemini/gi, 'openai').replace(/makersuite\.google\.com/gi, 'platform.openai.com').replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    return {
      success: false,
      response: '',
      copilot: 'Tutor Copilot',
      error: errorMsg,
    };
  }
}

// Design Copilot
export async function callDesignCopilot(
  message: string,
  designType?: string,
  currentDesign?: string,
  context?: Record<string, any>
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/design`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, designType, currentDesign, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Design Copilot Error:', error);
    let errorMsg = error instanceof Error ? error.message : 'Failed to call Design Copilot. Make sure the server is running on port 3001.';
    errorMsg = errorMsg.replace(/Gemini/gi, 'OpenAI').replace(/GEMINI/gi, 'OPENAI').replace(/gemini/gi, 'openai').replace(/makersuite\.google\.com/gi, 'platform.openai.com').replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    return {
      success: false,
      response: '',
      copilot: 'Design Copilot',
      error: errorMsg,
    };
  }
}

// Workflow Copilot
export async function callWorkflowCopilot(
  message: string,
  projectType?: string,
  tasks?: any[],
  context?: Record<string, any>
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/workflow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, projectType, tasks, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Workflow Copilot Error:', error);
    let errorMsg = error instanceof Error ? error.message : 'Failed to call Workflow Copilot. Make sure the server is running on port 3001.';
    errorMsg = errorMsg.replace(/Gemini/gi, 'OpenAI').replace(/GEMINI/gi, 'OPENAI').replace(/gemini/gi, 'openai').replace(/makersuite\.google\.com/gi, 'platform.openai.com').replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    return {
      success: false,
      response: '',
      copilot: 'Workflow Copilot',
      error: errorMsg,
    };
  }
}

// Generic copilot caller
export async function callCopilot(
  type: 'code' | 'meeting' | 'tutor' | 'design' | 'workflow',
  message: string,
  context?: Record<string, any>
): Promise<CopilotResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/copilots/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, ...context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${type} Copilot Error:`, error);
    let errorMsg = error instanceof Error ? error.message : `Failed to call ${type} Copilot. Make sure the server is running on port 3001.`;
    errorMsg = errorMsg.replace(/Gemini/gi, 'OpenAI').replace(/GEMINI/gi, 'OPENAI').replace(/gemini/gi, 'openai').replace(/makersuite\.google\.com/gi, 'platform.openai.com').replace(/GEMINI_API_KEY/gi, 'OPENAI_API_KEY');
    return {
      success: false,
      response: '',
      copilot: `${type.charAt(0).toUpperCase() + type.slice(1)} Copilot`,
      error: errorMsg,
    };
  }
}

