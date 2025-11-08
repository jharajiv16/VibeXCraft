import { useEffect, useMemo, useRef, useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { callGeminiAgent, type AgentMessage } from "@/lib/agent";
import { Bot, Send, User, Loader2 } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

export default function Agent() {
  const { user } = useUser();
  const { toast } = useToast();
  const [history, setHistory] = useState<AgentMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const profileContext = useMemo(() => {
    if (!user) return "";
    const name = user.fullName || user.username || user.primaryEmailAddress?.emailAddress || "User";
    const meta = user.publicMetadata || {};
    return `You are chatting with ${name}. Profile context: ${JSON.stringify(meta).slice(0, 800)}`;
  }, [user]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history, loading]);

  const send = async () => {
    const message = input.trim();
    if (!message) return;
    setInput("");
    const newHistory: AgentMessage[] = [
      ...history,
      { role: "user", content: profileContext ? `${profileContext}\n\n${message}` : message },
    ];
    setHistory(newHistory);
    setLoading(true);
    try {
      const res = await callGeminiAgent(message, newHistory);
      if (res.success) {
        setHistory((h) => [...h, { role: "assistant", content: res.response }]);
      } else {
        toast({ title: "Agent error", description: res.error || "Unknown error", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Agent error", description: e instanceof Error ? e.message : String(e), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 sm:p-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] bg-clip-text text-transparent">
          AI Agent (Gemini)
        </h1>
        <div className="text-xs text-muted-foreground">
          Uses server endpoint /api/agent/gemini
        </div>
      </div>

      <GlassCard hover className="p-4 sm:p-6 h-[70vh] flex flex-col">
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 pr-1">
          {history.length === 0 && (
            <div className="text-sm text-muted-foreground text-center mt-10">
              Ask anything. The agent will answer using Gemini.
            </div>
          )}
          {history.map((m, i) => (
            <div key={i} className={`flex gap-2 ${m.role === 'assistant' ? '' : 'justify-end'}`}>
              {m.role === 'assistant' && (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9B5CF5] to-[#00E0FF]">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed border ${m.role === 'assistant' ? 'bg-background/60 border-border' : 'bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] text-white border-transparent'}`}>
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin" />
              Generating...
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Textarea
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            className="flex-1 bg-background/50 border border-border rounded-xl"
          />
          <Button onClick={send} disabled={loading || !input.trim()} className="h-10 px-4 bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
