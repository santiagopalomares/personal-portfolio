import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CellScope",
    description:
      "Achieved 92% accuracy in analyzing 130+ bioengineering experiment images, automating cell segmentation and feature extraction. Designed a structured tabular dataset capturing both cell-level metrics and image-level summaries for advanced analysis. Developed an interactive query tool for UC San Diego and UCI BME researchers.",
    image: "/projects/project-placeholder.png",
    tags: ["Python", "OpenCV", "Scikit-Image", "SQL", "Matplotlib", "Pandas"],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares/CellScope",
    period: "Dec 2024 - Jan 2025",
  },
  {
    id: 2,
    title: "TrashBuddy",
    description:
      "Collaborated in building an automated waste management system, achieving a 50% improvement in sorting efficiency by separating recyclables from non-recyclables. Developed and integrated a real-time processing system using ESP32 CAM and servo motors, classifying waste items in under 3 seconds per item.",
    image: "/projects/project-placeholder.png",
    tags: ["OpenCV", "AWS", "Fusion360", "ESP32", "Computer Vision"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/PurelyBlank/BinBuddy-Waste-Management-System",
    period: "Nov 2024 - Dec 2024",
  },
  {
    id: 3,
    title: "ID Tech Products",
    description:
      "Delivered 3 production-ready Android applications for AP6800 payment terminal demonstrations, generating 15+ sales leads at industry trade shows. Implemented secure payment processing with zSDK integration supporting 4 transaction methods while maintaining 100% transaction reliability.",
    image: "/projects/project-placeholder.png",
    tags: ["Kotlin", "Java", "Android", "Figma", "zSDK"],
    demoUrl:
      "https://idtechproducts.com/educating-through-innovation-id-techs-capstone-journey-with-students-at-uci/",
    githubUrl: "https://github.com/orgs/IDTech-AP6800/repositories",
    period: "Sep 2024 - March 2025",
  },
  {
    id: 4,
    title: "CiCero AI",
    description:
      "Built a conversational web-based application that provides intelligent feedback on speaking for interviews, debates, and presentations. Developed during Berkeley hackathon using Hume AI API for real-time speech analysis and coaching insights.",
    image: "/projects/project-placeholder.png",
    tags: ["Next.js", "Hume AI API", "Tailwind CSS", "JavaScript", "AI/ML"],
    demoUrl: "#",
    githubUrl: "https://github.com/sumtzehern/CiceroAi",
    period: "June 2024",
  },
  {
    id: 5,
    title: "ThoughtfulBites",
    description:
      "Developed full-stack restaurant discovery platform for users with dietary restrictions, cutting meal planning time by 45% through personalized filtering algorithms. Built scalable React/TypeScript frontend and Node.js/Express backend with RESTful APIs, powering real-time search across 500+ restaurants.",
    image: "/projects/project-placeholder.png",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Google APIs", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares",
    period: "Mar 2024 - Present",
  },
  {
    id: 6,
    title: "Legacy Robotics Base Station UI",
    description:
      "Spearheaded development of real-time mission control dashboard with React and Tailwind CSS, reducing system monitoring time by 40% while facilitating simultaneous oversight of 6+ critical rover subsystems for autonomous navigation and robotic arm control.",
    image: "/projects/project-placeholder.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket",
      "UI/UX",
      "Robotics",
    ],
    demoUrl: "https://legacyrobotics.org/",
    githubUrl: "https://github.com/UCI-Legacy-Robotics/Base-Station",
    period: "Sep 2024 - Present",
  },
  {
    id: 7,
    title: "Legacy Robotics Computer Vision & Control",
    description:
      "Developed custom computer vision pipeline using YOLOv10 and Roboflow, securing 96% object detection accuracy by curating 2,000+ image dataset for robotic arm control and autonomous navigation. Pioneered optimization of data streaming pipeline for sensor telemetry, slashing latency by 35%.",
    image: "/projects/project-placeholder.png",
    tags: [
      "Python",
      "YOLOv10",
      "Roboflow",
      "OpenCV",
      "ROS2",
      "Computer Vision",
    ],
    demoUrl: "https://legacyrobotics.org/",
    githubUrl: "https://github.com/UCI-Legacy-Robotics/URC2024",
    period: "Sep 2024 - Present",
  },
  {
    id: 8,
    title: "Information Retrieval Search Engine",
    description:
      "Designed full-scale search engine from scratch processing 56,000+ web pages with custom inverted index and TF-IDF ranking algorithm, delivering sub-300ms query response times under memory constraints. Implemented Flask web interface with OpenAI API integration for intelligent query summarization.",
    image: "/projects/project-placeholder.png",
    tags: [
      "Python",
      "Flask",
      "OpenAI API",
      "NLTK",
      "Porter Stemming",
      "TF-IDF",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares",
    period: "Jan 2024 - Mar 2024",
  },
  {
    id: 9,
    title: "Spotify Clone",
    description:
      "Full-stack music streaming application with 90% feature parity to Spotify, including user authentication, playlist management, and audio playback capabilities built with modern web technologies.",
    image: "/projects/project-placeholder.png",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares",
    period: "Feb 2024 - Mar 2024",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work spanning mobile development, web
          applications, robotics systems, and full-stack solutions. Each project
          demonstrates different aspects of my technical expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/santiagopalomares"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
