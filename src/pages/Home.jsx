import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Background } from "@/components/Background"; // Changed from StarBackground
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle onThemeChange={handleThemeChange} />

      {/* Background Effects - Now switches between stars and clouds */}
      <Background isDarkMode={isDarkMode} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
