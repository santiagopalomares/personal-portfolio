import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("spaloma.v1@gmail.com");
      toast({
        title: "Email copied!",
        description: "spaloma.v1@gmail.com has been copied to your clipboard.",
      });
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
      toast({
        title: "Copy failed",
        description: "Unable to copy email to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Santiago Palomares.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={copyEmailToClipboard}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Copy Email to Clipboard"
              title="Click to copy email address"
            >
              <Mail className="h-4 w-4 text-primary" />
            </button>
            <a
              href="https://www.linkedin.com/in/santiagopalomares/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-primary" />
            </a>
            <a
              href="https://github.com/santiagopalomares"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
