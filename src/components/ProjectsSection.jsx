import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "CellScope",
    description:
      "Achieved 92% accuracy in analyzing 130+ bioengineering experiment images, automating cell segmentation and feature extraction. Designed a structured tabular dataset capturing both cell-level metrics and image-level summaries for advanced analysis. Developed an interactive query tool for UC San Diego and UCI BME researchers.",
    images: ["/src/assets/CellScope.png"],
    tags: ["Python", "OpenCV", "Scikit-Image", "SQL", "Matplotlib", "Pandas"],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares/CellScope",
  },
  {
    id: 2,
    title: "TrashBuddy",
    description:
      "Collaborated in building an automated waste management system, achieving a 50% improvement in sorting efficiency by separating recyclables from non-recyclables. Developed and integrated a real-time processing system using ESP32 CAM and servo motors, classifying waste items in under 3 seconds per item.",
    images: ["/src/assets/TrashBuddy-Diagram.png", "/src/assets/TrashBuddy-Assembling.jpg"],
    tags: ["OpenCV", "AWS", "Fusion360", "ESP32", "Computer Vision"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/PurelyBlank/BinBuddy-Waste-Management-System",
  },
  {
    id: 3,
    title: "ID Tech Products",
    description:
      "Delivered 3 production-ready Android applications for AP6800 payment terminal demonstrations, generating 15+ sales leads at industry trade shows. Implemented secure payment processing with zSDK integration supporting 4 transaction methods while maintaining 100% transaction reliability.",
    images: ["/src/assets/IDTech.png"],
    tags: ["Kotlin", "Java", "Android", "Figma", "zSDK"],
    demoUrl:
      "https://idtechproducts.com/educating-through-innovation-id-techs-capstone-journey-with-students-at-uci/",
    githubUrl: "https://github.com/orgs/IDTech-AP6800/repositories",
  },
  {
    id: 4,
    title: "CiCero AI",
    description:
      "Built a conversational web-based application that provides intelligent feedback on speaking for interviews, debates, and presentations. Developed during Berkeley hackathon using Hume AI API for real-time speech analysis and coaching insights.",
    images: ["/src/assets/CiCeroAI.png"],
    tags: ["Next.js", "Hume AI API", "Tailwind CSS", "JavaScript", "AI/ML"],
    demoUrl: "#",
    githubUrl: "https://github.com/sumtzehern/CiceroAi",
  },
  {
    id: 5,
    title: "ThoughtfulBites",
    description:
      "Developed full-stack restaurant discovery platform for users with dietary restrictions, cutting meal planning time by 45% through personalized filtering algorithms. Built scalable React/TypeScript frontend and Node.js/Express backend with RESTful APIs, powering real-time search across 500+ restaurants.",
    images: ["/src/assets/ThoughfulBites.png"],
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Google APIs", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/santiagopalomares",
  },
  {
    id: 6,
    title: "Legacy Robotics Base Station UI",
    description:
      "Spearheaded development of real-time mission control dashboard with React and Tailwind CSS, reducing system monitoring time by 40% while facilitating simultaneous oversight of 6+ critical rover subsystems for autonomous navigation and robotic arm control.",
    images: ["/src/assets/LegacyUI-Navigation.png", "/src/assets/LegacyUI-Cams.png"],
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
  },
  {
    id: 7,
    title: "Legacy Robotics Computer Vision & Control",
    description:
      "Developed custom computer vision pipeline using YOLOv10 and Roboflow, securing 96% object detection accuracy by curating 2,000+ image dataset for robotic arm control and autonomous navigation. Pioneered optimization of data streaming pipeline for sensor telemetry, slashing latency by 35%.",
    images: ["/src/assets/LegacyRover.png"],
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
  },
  {
    id: 8,
    title: "Information Retrieval Search Engine",
    description:
      "Designed full-scale search engine from scratch processing 56,000+ web pages with custom inverted index and TF-IDF ranking algorithm, delivering sub-300ms query response times under memory constraints. Implemented Flask web interface with OpenAI API integration for intelligent query summarization.",
    images: ["/src/assets/ZotSearch.png"],
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
  },
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Add null check to prevent error
  if (!isOpen || !project) return null;
  
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-card rounded-lg w-full h-full max-h-[95vh] sm:h-full sm:max-w-4xl sm:max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b flex-shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold truncate pr-4">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 min-h-0">
          <div className="h-full w-full flex items-center justify-center p-2">
            <img
              src={images[currentImageIndex]}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Image carousel controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 flex-shrink-0">
          <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs sm:text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
            >
              <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onProjectClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
      onClick={() => onProjectClick(project)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Image carousel controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={16} />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

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
              onClick={(e) => e.stopPropagation()}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
            <ProjectCard 
              key={key} 
              project={project} 
              onProjectClick={handleProjectClick}
            />
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};
