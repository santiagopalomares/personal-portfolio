import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import CellScopeImg from "../assets/CellScope.png";
import TrashBuddyDiagramImg from "../assets/TrashBuddy-Diagram.png";
import TrashBuddyAssemblingImg from "../assets/TrashBuddy-Assembling.jpg";
import ThoughfulBitesImg from "../assets/ThoughfulBites.png";
import CiCeroAIImg from "../assets/CiCeroAI.png";
import ZotSearchImg from "../assets/ZotSearch.png";
import TMGameEngineCandyCrushImg from "../assets/TM Game Engine - Candy Crush.png";
import TMGameEngineTetrisImg from "../assets/TM Game Engine - Tetris.png";

const projects = [
  {
    title: "Cell Scope",
    description: [
      "Achieved 92% accuracy analyzing 130+ bioengineering experiment images with automated cell segmentation.",
      "Built interactive query tool for UC San Diego and UCI BME researchers.",
      "Developed structured dataset capturing cell-level metrics and image-level summaries."
    ],
    images: [CellScopeImg],
    tags: ["Python", "OpenCV", "SQL", "Computer Vision", "Image Processing"],
    // No link
  },
  {
    title: "CiCero AI",
    description: [
      "Collaborated with team of 4 to build conversational web app providing intelligent feedback for interviews and presentations.",
      "Developed during Berkeley hackathon integrating Hume AI API for real-time speech analysis and OpenAI for summaries.",
      "Implemented data processing pipeline in Node.js to filter and display top insights from AI responses."
    ],
    images: [CiCeroAIImg],
    tags: ["Next.js", "Tailwind CSS", "API Integration", "Web Development"],
    // No link
  },
  {
    title: "TM Game Environment",
    description: [
      "Collaborated with team of 5 to design and implement extensible game framework supporting multiple tile-matching games (Tetris, Bejeweled, etc.).",
      "Architected modular system with defined interfaces enabling rapid development of new games on shared platform.",
      "Implemented two-player local multiplayer support with user profiles and game selection menu.",
      "Delivered complete framework with 2 fully functional games, comprehensive documentation, and step-by-step developer guide."
    ],
    images: [TMGameEngineTetrisImg, TMGameEngineCandyCrushImg],
    tags: ["Python", "Software Architecture", "UML Modeling", "Human Interface Design"],
    // link removed
  },
  {
    title: "ThoughtfulBites",
    description: [
      "Developed full-stack restaurant discovery platform reducing meal planning time by 45%.",
      "Built scalable React/TypeScript frontend with Node.js backend serving 500+ restaurants.",
      "Implemented personalized filtering algorithms for users with dietary restrictions."
    ],
    images: [ThoughfulBitesImg],
    tags: ["UI design", "figma", "Amazon ECS", "MySQL", "React.js"],
    // No link
  },
  {
    title: "TrashBuddy",
    description: [
      "Built automated waste management system improving sorting efficiency by 50%.",
      "Integrated ESP32 CAM and servo motors for real-time processing under 3 seconds per item.",
      "Collaborated on hardware-software integration using computer vision and IoT components."
    ],
    images: [TrashBuddyAssemblingImg, TrashBuddyDiagramImg],
    tags: ["Internet of Things (IoT)", "Postman API", "C++", "Computer Hardware", "AWS Lambda"],
    // No link
  },
  {
    title: "ZotSearch",
    description: [
      "Built full-scale search engine processing 56,000+ web pages with custom inverted index.",
      "Achieved sub-300ms query response times using TF-IDF ranking algorithm.",
      "Integrated OpenAI API for intelligent query summarization with Flask web interface."
    ],
    images: [ZotSearchImg],
    tags: ["Python", "DSA", "Flask", "Systems Design"],
    // No link
  },
];

const ProjectCard = ({ project, onProjectClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer flex flex-col" onClick={() => onProjectClick(project)}>
      {images.length > 0 && (
        <div className="h-56 overflow-hidden relative w-full">
          <img
            src={images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <span className="sr-only">Previous image</span>
                &#8592;
              </button>
              <button
                onClick={e => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <span className="sr-only">Next image</span>
                &#8594;
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={e => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          {project.title}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-primary hover:underline"
              onClick={e => e.stopPropagation()}
              title="External Link"
            >
              <ArrowRight size={18} />
            </a>
          )}
        </h3>
        <ul className="mb-4 list-disc ml-5 text-muted-foreground text-sm text-left">
          {project.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!isOpen || !project) return null;
  const images = project.images || [];
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-card rounded-lg w-full h-full max-h-[95vh] sm:h-full sm:max-w-3xl sm:max-h-[90vh] flex flex-col overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b flex-shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold truncate pr-4 flex items-center gap-2">
            {project.title}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:underline"
                title="External Link"
                onClick={e => e.stopPropagation()}
              >
                <ArrowRight size={20} />
              </a>
            )}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>
        {/* Image Section */}
        {images.length > 0 && (
          <div className="relative flex-1 min-h-0">
            <div className="h-full w-full flex items-center justify-center p-2">
              <img
                src={images[currentImageIndex]}
                alt={project.title}
                className="max-w-full max-h-80 object-contain"
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        {/* Content Section */}
        <div className="p-4 sm:p-6 flex-shrink-0 overflow-auto">
          <ul className="mb-4 list-disc ml-5 text-muted-foreground text-sm text-left">
            {project.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
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
          A showcase of my recent work spanning web applications, search engines, computer vision, and full-stack solutions. Each project demonstrates different aspects of my technical expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <ProjectCard key={key} project={project} onProjectClick={handleProjectClick} />
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
