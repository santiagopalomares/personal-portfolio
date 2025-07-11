import React, { useState } from "react";
import LegacyLogo from "../assets/LegacyRover.png";
import LegacyNavImg from "../assets/LegacyUI-Navigation.png";
import LegacyCamsImg from "../assets/LegacyUI-Cams.png";
import BeatsLogo from "../assets/BeatsByDreLogo.svg";
import NRGLogo from "../assets/National Research Group.svg";
import UCILogo from "../assets/UCI Donald Bren.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Legacy Robotics",
    logo: [LegacyLogo, LegacyNavImg, LegacyCamsImg],
    title: "Software Engineer",
    date: "Nov 2024 - Jun 2025",
    description: [
      "Led development of comprehensive Base Station UI system using React and Tailwind CSS, designing interfaces in Figma to visualize real-time camera streams, GNSS positioning, sensor telemetry, and critical system metrics for rover operations.",
      "Achieved 96% object detection accuracy by curating and balancing 2,000+ image datasets with Roboflow, performing data quality analysis and class distribution optimization using YOLOv10 for autonomous navigation.",
      "Engineered real-time data processing pipeline with Python and ROS2, transforming JSON sensor streams and performing spatial coordinate analysis to enable autonomous movement goals for competition tasks.",
      "Created interactive mission control dashboard with Node.js backend featuring statistical summaries, time-series filtering, and comprehensive NPK sensor data visualizations while developing teleoperation software for robotic arm control."
    ],
    skills: ["Gazebo", "Docker", "React", "Tailwind CSS", "Python", "ROS2", "Node.js", "Figma", "YOLOv10", "Roboflow"]
  },
  {
    company: "Beats by Dre",
    logo: [BeatsLogo],
    title: "Data Analyst",
    date: "Jul 2024 - Sep 2024",
    description: [
      "Analyzed a dataset of 6,000 consumer reviews, refining it to 1,300 targeted entries through exploratory data analysis techniques using Python, Pandas, and NumPy.",
      "Conducted comprehensive sentiment analysis on customer feedback with TextBlob and NLTK to uncover insights that enhance marketing strategies and customer engagement.",
      "Identified 3 distinct customer segments for targeted marketing through systematic analysis of feedback themes and consumer behavior patterns.",
      "Created data visualizations using Seaborn and Matplotlib to present findings to stakeholders, producing statistical summaries that informed strategic brand positioning and decision-making processes."
    ],
    skills: ["Python", "Data Analysis", "TextBlob", "NLTK", "Pandas", "NumPy", "Seaborn", "Matplotlib"]
  },
  {
    company: "National Research Group",
    logo: [NRGLogo],
    title: "AI Risk Market Researcher",
    date: "Jun 2024 - Jul 2024",
    description: [
      "Conducted extensive research to uncover recent headline-making AI risks and categorized them based on strategic themes.",
      "Developed detailed case studies to illustrate the potential impacts of these risks on businesses.",
      "Analyzed emerging AI-related incidents and created strategic categorization frameworks for risk assessment and business planning."
    ],
    skills: ["Data Analysis", "Critical Thinking", "Research", "AI Risk"]
  },
  {
    company: "UC Irvine Donald Bren School of Information and Computer Sciences",
    logo: [UCILogo],
    title: "Undergraduate Student Researcher",
    date: "Apr 2024 - Jun 2024",
    description: [
      "Documented research steps and findings to support fellow student researchers in reproducing results.",
      "Collaborated with a research team to test and explore specific use cases for EdgeLake, a decentralized database system.",
      "Worked with 3D printer data utilizing a Raspberry Pi as a node to monitor and manage data effectively.",
      "Gained hands-on experience with hardware and software integration, developing understanding of real-time data monitoring and decentralized systems."
    ],
    skills: ["Docker", "Distributed Databases", "Raspberry Pi", "EdgeLake"]
  }
];

const ExperienceImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  const isSVG = (src) => src.endsWith('.svg');
  const next = (e) => {
    e && e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    e && e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full flex justify-center items-center mb-8 min-h-[400px]">
      <img
        src={images[current]}
        alt="Experience visual"
        className={`w-full max-w-3xl max-h-[400px] ${isSVG(images[current]) ? 'object-contain' : 'object-cover'} rounded-lg border bg-white shadow-sm`}
        style={{ display: 'block' }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Professional <span className="text-primary">Experience</span>
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-card rounded-2xl p-10 shadow-lg mx-auto w-full max-w-4xl flex flex-col">
            {/* Banner Logo/Carousel */}
            <ExperienceImageCarousel images={exp.logo} />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
              <div className="text-muted-foreground text-base mb-3">
                {exp.company} &middot; {exp.date}
              </div>
            </div>
            <ul className="list-disc ml-8 mb-4 text-left">
              {exp.description.map((line, i) => (
                <li key={i} className="text-muted-foreground text-base mb-2">{line}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 text-left">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
); 