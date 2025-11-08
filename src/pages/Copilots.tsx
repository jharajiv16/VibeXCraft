import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Code2, Video, Brain, Wand2, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { 
  callCodeCopilot, 
  callMeetingCopilot, 
  callTutorCopilot, 
  callDesignCopilot, 
  callWorkflowCopilot 
} from "@/lib/copilots";

export default function Copilots() {
  const { toast } = useToast();
  const [activeCopilot, setActiveCopilot] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    code: true,
    meeting: true,
    tutor: true,
    design: true,
    workflow: true,
  });

  const copilots = [
    {
      id: "code",
      name: "Code Copilot",
      desc: "Writes, debugs, and explains code inline.",
      icon: Code2,
      accent: "bg-gradient-to-br from-[#1F1B6B] to-[#5C33FF]",
    },
    {
      id: "meeting",
      name: "Meeting Copilot",
      desc: "Records, summarizes and generates action items.",
      icon: Video,
      accent: "bg-gradient-to-br from-[#022B3A] to-[#00E0FF]",
    },
    {
      id: "tutor",
      name: "Tutor Copilot",
      desc: "Teaches concepts and generates practice tasks.",
      icon: Brain,
      accent: "bg-gradient-to-br from-[#2E1F4A] to-[#9B5CF5]",
    },
    {
      id: "design",
      name: "Design Copilot",
      desc: "Suggests UI tweaks, color harmony and CSS snippets.",
      icon: Wand2,
      accent: "bg-gradient-to-br from-[#0B3B2E] to-[#22D3EE]",
    },
    {
      id: "workflow",
      name: "Workflow Copilot",
      desc: "Plans sprints and auto-generates Kanban boards.",
      icon: Sparkles,
      accent: "bg-gradient-to-br from-[#2B2A4A] to-[#7C3AED]",
    },
  ];

  const handleCopilotCall = async (copilotId: string) => {
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message to send to the copilot",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      let result;
      switch (copilotId) {
        case "code":
          result = await callCodeCopilot(message);
          break;
        case "meeting":
          result = await callMeetingCopilot(message);
          break;
        case "tutor":
          result = await callTutorCopilot(message);
          break;
        case "design":
          result = await callDesignCopilot(message);
          break;
        case "workflow":
          result = await callWorkflowCopilot(message);
          break;
        default:
          throw new Error("Unknown copilot");
      }

      if (result.success) {
        setResponse(result.response);
        toast({
          title: "Success",
          description: `${copilots.find(c => c.id === copilotId)?.name} responded!`,
        });
      } else {
        throw new Error(result.error || "Failed to get response");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to call copilot",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Meet Your Copilots
        </h1>
        <p className="text-muted-foreground mt-1">AI assistants for every part of your workflow</p>
      </div>

      <div className="flex items-center justify-end">
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            toast({ title: "More Suggestions", description: "Personalized copilot suggestions coming soon." })
          }
        >
          More Suggestions
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {copilots.map((copilot, i) => (
          <GlassCard 
            key={i} 
            hover 
            className={`p-6 space-y-4 transition-all ${
              activeCopilot === copilot.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="cursor-pointer" onClick={() => setActiveCopilot(copilot.id)}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${copilot.accent} flex items-center justify-center shadow-glow-purple`}>
                  <copilot.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{copilot.name}</h3>
                  <p className="text-sm text-muted-foreground">{copilot.desc}</p>
                </div>
              </div>
              <Switch 
                checked={enabled[copilot.id as keyof typeof enabled]}
                onCheckedChange={(checked) => 
                  setEnabled(prev => ({ ...prev, [copilot.id]: checked }))
                }
              />
            </div>

            {copilot.id === 'code' && (
              <div className="inline-flex items-center gap-2 text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">
                ⭐ Best Copilot
              </div>
            )}

            </div>

            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="secondary" 
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCopilot(copilot.id);
                }}
              >
                Use Copilot
              </Button>
              <Button 
                size="sm" 
                className="bg-primary/10 hover:bg-primary/20"
                onClick={(e) => {
                  e.stopPropagation();
                  // Navigate to settings or customize
                }}
              >
                Settings
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Copilot Chat Interface */}
      {activeCopilot && (
        <GlassCard className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {copilots.find(c => c.id === activeCopilot)?.name}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveCopilot(null);
                setMessage("");
                setResponse("");
              }}
            >
              Close
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <Input
                placeholder="Ask your copilot anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleCopilotCall(activeCopilot);
                  }
                }}
                disabled={loading}
              />
            </div>

            <Button
              onClick={() => handleCopilotCall(activeCopilot)}
              disabled={loading || !message.trim()}
              className="w-full bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]"
            >
              {loading ? "Processing..." : "Send Message"}
            </Button>

            {response && (
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Response:</h3>
                <p className="text-sm whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </div>
        </GlassCard>
      )}

      <GlassCard className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">AI Memory</h2>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">Last interaction: Code optimization for React components</p>
            <span className="text-xs text-muted-foreground">2 hours ago</span>
          </div>
          <div className="p-3 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">Task prioritization updated based on deadlines</p>
            <span className="text-xs text-muted-foreground">1 day ago</span>
          </div>
        </div>
      </GlassCard>
      <Footer />
    </div>
  );
}
