import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Github, GitBranch, Upload, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface GitHubIntegrationProps {
  sessionCode: string;
  files: Array<{ id: string; filename: string; file_content: string; language: string }>;
}

const GitHubIntegration = ({ sessionCode, files }: GitHubIntegrationProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [repoName, setRepoName] = useState('');
  const [repoDescription, setRepoDescription] = useState('');
  const [isPushing, setIsPushing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleConnectGitHub = async () => {
    // In production, this would use GitHub OAuth
    // For now, we'll simulate the connection
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
    
    if (!clientId) {
      toast({
        title: 'GitHub OAuth not configured',
        description: 'Please set VITE_GITHUB_CLIENT_ID in your .env file',
        variant: 'destructive',
      });
      return;
    }

    // Redirect to GitHub OAuth
    const redirectUri = `${window.location.origin}/auth/github/callback`;
    const scope = 'repo';
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    window.location.href = githubAuthUrl;
  };

  const handlePushToGitHub = async () => {
    if (!repoName.trim()) {
      toast({
        title: 'Repository name required',
        description: 'Please enter a repository name',
        variant: 'destructive',
      });
      return;
    }

    setIsPushing(true);

    try {
      // Get GitHub token from localStorage (set after OAuth)
      const githubToken = localStorage.getItem('github_token');

      if (!githubToken) {
        toast({
          title: 'Not connected to GitHub',
          description: 'Please connect your GitHub account first',
          variant: 'destructive',
        });
        setIsPushing(false);
        return;
      }

      // Create repository
      const createRepoResponse = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: repoName,
          description: repoDescription || `Code from VibeXCraft session ${sessionCode}`,
          private: false,
          auto_init: false,
        }),
      });

      if (!createRepoResponse.ok) {
        const error = await createRepoResponse.json();
        throw new Error(error.message || 'Failed to create repository');
      }

      const repo = await createRepoResponse.json();
      const repoUrl = repo.html_url;

      // Create files and push to repository
      // In a real implementation, you would:
      // 1. Create a commit with all files
      // 2. Push to the repository
      // This is a simplified version

      toast({
        title: 'Repository created!',
        description: `Successfully created ${repoName} on GitHub`,
      });

      // Open the repository in a new tab
      window.open(repoUrl, '_blank');

      setIsDialogOpen(false);
      setRepoName('');
      setRepoDescription('');
    } catch (error) {
      console.error('Error pushing to GitHub:', error);
      toast({
        title: 'Error pushing to GitHub',
        description: error instanceof Error ? error.message : 'Failed to push code',
        variant: 'destructive',
      });
    } finally {
      setIsPushing(false);
    }
  };

  // Check if GitHub is connected on mount
  useEffect(() => {
    const token = localStorage.getItem('github_token');
    setIsConnected(!!token);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {!isConnected ? (
        <Button
          onClick={handleConnectGitHub}
          variant="secondary"
          className="flex items-center gap-2"
        >
          <Github className="h-4 w-4" />
          Connect GitHub
        </Button>
      ) : (
        <>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span>Connected to GitHub</span>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="flex items-center gap-2 bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]"
              >
                <Upload className="h-4 w-4" />
                Push to GitHub
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Push Code to GitHub</DialogTitle>
                <DialogDescription>
                  Create a new repository and push your code from this session
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Repository Name
                  </label>
                  <Input
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                    placeholder="my-awesome-project"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Description (optional)
                  </label>
                  <Input
                    value={repoDescription}
                    onChange={(e) => setRepoDescription(e.target.value)}
                    placeholder="A project created with VibeXCraft"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GitBranch className="h-3 w-3" />
                  <span>{files.length} file{files.length !== 1 ? 's' : ''} will be pushed</span>
                </div>
                <Button
                  onClick={handlePushToGitHub}
                  disabled={isPushing || !repoName.trim()}
                  className="w-full bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]"
                >
                  {isPushing ? 'Pushing...' : 'Create Repository & Push'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default GitHubIntegration;

