// Client-side API functions for Gemini Agent

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface AgentMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AgentResponse {
  success: boolean;
  response: string;
  agent: string;
  error?: string;
}

export async function callGeminiAgent(
  message: string,
  history: AgentMessage[] = []
): Promise<AgentResponse> {
  const res = await fetch(`${API_BASE_URL}/api/agent/gemini`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });
  return res.json();
}
