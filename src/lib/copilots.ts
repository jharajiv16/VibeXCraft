// Client-side API functions for AI Copilots

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: 'Code Copilot',
      error: error instanceof Error ? error.message : 'Failed to call Code Copilot',
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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: 'Meeting Copilot',
      error: error instanceof Error ? error.message : 'Failed to call Meeting Copilot',
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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: 'Tutor Copilot',
      error: error instanceof Error ? error.message : 'Failed to call Tutor Copilot',
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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: 'Design Copilot',
      error: error instanceof Error ? error.message : 'Failed to call Design Copilot',
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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: 'Workflow Copilot',
      error: error instanceof Error ? error.message : 'Failed to call Workflow Copilot',
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

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      response: '',
      copilot: `${type.charAt(0).toUpperCase() + type.slice(1)} Copilot`,
      error: error instanceof Error ? error.message : `Failed to call ${type} Copilot`,
    };
  }
}

