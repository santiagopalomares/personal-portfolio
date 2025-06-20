import { Code, Cpu, Layers } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const AboutSection = () => {
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
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer & System Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate software engineer with experience in both
              frontend and backend development, focused on building responsive,
              efficient applications. Currently completing my B.S. in Software
              Engineering at UC Irvine with a strong academic record.
            </p>

            <p className="text-muted-foreground">
              My experience ranges from robotics software development to
              creating interactive UI systems and data analysis. I'm driven by
              solving complex technical challenges and continuously expanding my
              technical expertise across multiple domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button onClick={copyEmailToClipboard} className="cosmic-button">
                Get In Touch
              </button>

              <a
                href="#resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive interfaces and robust backends with
                    React, Tailwind CSS, Java, and Python.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Robotics & Systems</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent systems with ROS2, GAZEBO, and
                    implementing computer vision algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground">
                    Creating data pipelines and visualizations using Python,
                    NumPy, Pandas, and visualization libraries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
