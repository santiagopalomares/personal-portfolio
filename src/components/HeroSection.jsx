import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 md:pt-32"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Santiago
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Palomares
            </span>
          </h1>

          {/* Desktop version - full content */}
          <div className="hidden md:block text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
            <p className="mb-4">
              Hello, I'm Santiago Palomares, a Software Engineering graduate of{" "}
              <a
                href="https://www.ics.uci.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                UC Irvine
              </a>{" "}
              and a passionate Software Engineer fascinated by full-stack
              development, and robotics systems. Growing up in the Santa Ana
              area, I learned that persistence and innovation can turn any
              technical challenge into an opportunity – values that have driven
              my journey in technology.
            </p>

            <p className="mb-4">
              As a developer and engineer, I've had the privilege of working on
              diverse projects ranging from bioengineering research tools to
              autonomous rovers competing on the international stage. Most
              recently, I've been building software systems for{" "}
              <a
                href="https://legacyrobotics.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Legacy Robotics
              </a>
              , where our interdisciplinary team of 25 (Mechanical, Electrical,
              Computer, Software) engineers developed a competition rover for
              the{" "}
              <a
                href="https://urc.marssociety.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                University Rover Challenge
              </a>
              . I've also contributed to research by helping test{" "}
              <a
                href="https://lf-edge.atlassian.net/wiki/spaces/LE/pages/15865138/EdgeLake+project+proposal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EdgeLake
              </a>{" "}
              in distributed databases and collaborated with{" "}
              <a
                href="https://idtechproducts.com/educating-through-innovation-id-techs-capstone-journey-with-students-at-uci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ID Tech Products
              </a>{" "}
              to create production-ready Android applications that generated 15+
              sales leads at industry trade shows.
            </p>

            <p className="mb-4">
              What excites me most about software engineering is the ability to
              create meaningful solutions that bridge complex technical
              challenges with real-world impact. Whether I'm developing{" "}
              <a
                href="https://github.com/santiagopalomares/CellScope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                cell segmentation tools
              </a>{" "}
              for UCI/UCSD researchers with 92% accuracy, building automated
              waste management systems that improve sorting efficiency by 50%,
              or designing intuitive user interfaces for robotic control
              systems, I'm driven by technology's potential to make a
              difference.
            </p>

            <p>
              Beyond coding, I'm deeply committed to community and collaboration
              through Google Developer Student Club, and Peterworks Drones. When
              I'm not debugging code or fine-tuning algorithms, you'll find me
              Rock Climbing at Hanger 18, Fishing at Newport Pier, or playing
              Magic the gathering with friends.
            </p>
          </div>

          {/* Mobile version - condensed content */}
          <div className="md:hidden text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <p className="mb-4">
              Software Engineering graduate from{" "}
              <a
                href="https://www.ics.uci.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                UC Irvine
              </a>{" "}
              passionate about full-stack development and systems engineering. I
              build production ready applications that solve real world
              problems.
            </p>

            <p className="mb-4">
              From developing{" "}
              <a
                href="https://github.com/santiagopalomares/CellScope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                research tools
              </a>{" "}
              with 92% accuracy to creating Android apps for{" "}
              <a
                href="https://idtechproducts.com/educating-through-innovation-id-techs-capstone-journey-with-students-at-uci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ID Tech Products
              </a>{" "}
              that generated 15+ sales leads, I'm driven by technology's
              potential to make a meaningful impact.
            </p>

            <p>
              When I'm not debugging code or fine-tuning algorithms, you'll find
              me Rock Climbing at Hanger 18, Fishing at Newport Pier, or playing
              Magic the gathering with friends.
            </p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
