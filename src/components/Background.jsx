import { useEffect, useState } from "react";

export const Background = ({ isDarkMode }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]);
  const [smallClouds, setSmallClouds] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateClouds();
    generateSmallClouds();

    const handleResize = () => {
      generateStars();
      generateClouds();
      generateSmallClouds();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateClouds = () => {
    const isMobile = window.innerWidth < 768;
    const baseCloudCount = isMobile ? 6 : 8;
    const numberOfClouds =
      Math.floor(
        (window.innerWidth * window.innerHeight) / (isMobile ? 25000 : 35000)
      ) + baseCloudCount;

    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        size: Math.random() * (isMobile ? 80 : 100) + (isMobile ? 60 : 80),
        x: Math.random() * 130 - 30,
        y: Math.random() * 55 + 8,
        opacity: Math.random() * 0.3 + 0.7,
        animationDuration: Math.random() * 25 + 35,
        cloudType: Math.floor(Math.random() * 3) + 1,
      });
    }

    setClouds(newClouds);
  };

  const generateSmallClouds = () => {
    const isMobile = window.innerWidth < 768;
    const baseSmallCloudCount = isMobile ? 5 : 7;
    const numberOfSmallClouds =
      Math.floor(
        (window.innerWidth * window.innerHeight) / (isMobile ? 35000 : 50000)
      ) + baseSmallCloudCount;

    const newSmallClouds = [];

    for (let i = 0; i < numberOfSmallClouds; i++) {
      newSmallClouds.push({
        id: i,
        size: Math.random() * (isMobile ? 50 : 60) + (isMobile ? 30 : 40),
        x: Math.random() * 130 - 30,
        y: Math.random() * 40 + 3,
        opacity: Math.random() * 0.2 + 0.4,
        animationDuration: Math.random() * 35 + 50,
      });
    }

    setSmallClouds(newSmallClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blue Sky Background for Light Mode */}
      {!isDarkMode && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #87CEEB 0%, #98D4EA 50%, #B8E6F0 100%)",
          }}
        />
      )}

      {/* Stars (shown in dark mode) */}
      {isDarkMode &&
        stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        ))}

      {/* Meteors (shown in dark mode) */}
      {isDarkMode &&
        meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        ))}

      {/* Main Clouds (shown in light mode) */}
      {!isDarkMode &&
        clouds.map((cloud) => (
          <div
            key={cloud.id}
            className={`absolute cloud-shape-${cloud.cloudType} animate-cloud-drift`}
            style={{
              left: cloud.x + "%",
              top: cloud.y + "%",
              opacity: cloud.opacity,
              animationDuration: cloud.animationDuration + "s",
              transform: `scale(${cloud.size / 100})`,
            }}
          />
        ))}

      {/* Small Wispy Clouds (shown in light mode) */}
      {!isDarkMode &&
        smallClouds.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute cloud-shape-wispy animate-cloud-drift-slow"
            style={{
              left: cloud.x + "%",
              top: cloud.y + "%",
              opacity: cloud.opacity,
              animationDuration: cloud.animationDuration + "s",
              transform: `scale(${cloud.size / 80})`,
            }}
          />
        ))}

      <style>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle ease-in-out infinite;
        }

        .meteor {
          position: absolute;
          background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%);
          border-radius: 50%;
          transform: rotate(45deg);
          opacity: 0;
        }

        @keyframes meteor {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) translateY(-100px) rotate(45deg); 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            opacity: 0; 
            transform: translateX(200px) translateY(200px) rotate(45deg); 
          }
        }

        .animate-meteor {
          animation: meteor linear infinite;
        }

        @keyframes cloud-drift {
          0% {
            transform: translateX(-150px) scale(var(--scale, 1));
          }
          100% {
            transform: translateX(calc(100vw + 150px)) scale(var(--scale, 1));
          }
        }

        @keyframes cloud-drift-slow {
          0% {
            transform: translateX(-120px) scale(var(--scale, 1));
          }
          100% {
            transform: translateX(calc(100vw + 120px)) scale(var(--scale, 1));
          }
        }

        .animate-cloud-drift {
          animation: cloud-drift linear infinite;
        }

        .animate-cloud-drift-slow {
          animation: cloud-drift-slow linear infinite;
        }

        /* Cloud Shape 1 - Fluffy Cumulus */
        .cloud-shape-1 {
          width: 120px;
          height: 50px;
          background: white;
          border-radius: 50px;
          position: relative;
          filter: blur(0.5px);
          box-shadow: inset 0 -8px 15px rgba(0,0,0,0.08);
        }

        .cloud-shape-1::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 15px;
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -5px 10px rgba(0,0,0,0.06);
        }

        .cloud-shape-1::after {
          content: '';
          position: absolute;
          top: -15px;
          right: 10px;
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -3px 8px rgba(0,0,0,0.05);
        }

        /* Cloud Shape 2 - Stretched Cloud */
        .cloud-shape-2 {
          width: 140px;
          height: 40px;
          background: white;
          border-radius: 40px;
          position: relative;
          filter: blur(0.8px);
          box-shadow: inset 0 -6px 12px rgba(0,0,0,0.07);
        }

        .cloud-shape-2::before {
          content: '';
          position: absolute;
          top: -18px;
          left: 25px;
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -4px 8px rgba(0,0,0,0.05);
        }

        .cloud-shape-2::after {
          content: '';
          position: absolute;
          top: -10px;
          right: 20px;
          width: 30px;
          height: 30px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -2px 6px rgba(0,0,0,0.04);
        }

        /* Cloud Shape 3 - Puffy Cloud */
        .cloud-shape-3 {
          width: 100px;
          height: 45px;
          background: white;
          border-radius: 45px;
          position: relative;
          filter: blur(0.6px);
          box-shadow: inset 0 -7px 14px rgba(0,0,0,0.08);
        }

        .cloud-shape-3::before {
          content: '';
          position: absolute;
          top: -22px;
          left: 20px;
          width: 55px;
          height: 55px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -5px 10px rgba(0,0,0,0.06);
        }

        .cloud-shape-3::after {
          content: '';
          position: absolute;
          top: -12px;
          right: 15px;
          width: 38px;
          height: 38px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 -3px 7px rgba(0,0,0,0.05);
        }

        /* Wispy Cloud */
        .cloud-shape-wispy {
          width: 80px;
          height: 25px;
          background: white;
          border-radius: 25px;
          position: relative;
          filter: blur(1.5px);
          opacity: 0.8;
        }

        .cloud-shape-wispy::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 10px;
          width: 30px;
          height: 30px;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
        }

        .cloud-shape-wispy::after {
          content: '';
          position: absolute;
          top: -5px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          opacity: 0.6;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .cloud-shape-1 {
            width: 90px;
            height: 38px;
          }
          
          .cloud-shape-1::before {
            width: 38px;
            height: 38px;
            top: -15px;
            left: 12px;
          }
          
          .cloud-shape-1::after {
            width: 26px;
            height: 26px;
            top: -12px;
            right: 8px;
          }

          .cloud-shape-2 {
            width: 105px;
            height: 32px;
          }
          
          .cloud-shape-2::before {
            width: 34px;
            height: 34px;
            top: -14px;
            left: 20px;
          }
          
          .cloud-shape-2::after {
            width: 22px;
            height: 22px;
            top: -8px;
            right: 15px;
          }

          .cloud-shape-3 {
            width: 75px;
            height: 34px;
          }
          
          .cloud-shape-3::before {
            width: 42px;
            height: 42px;
            top: -17px;
            left: 15px;
          }
          
          .cloud-shape-3::after {
            width: 28px;
            height: 28px;
            top: -9px;
            right: 12px;
          }

          .cloud-shape-wispy {
            width: 60px;
            height: 20px;
          }
          
          .cloud-shape-wispy::before {
            width: 22px;
            height: 22px;
            top: -6px;
            left: 8px;
          }
          
          .cloud-shape-wispy::after {
            width: 15px;
            height: 15px;
            top: -4px;
            right: 6px;
          }
        }
      `}</style>
    </div>
  );
};
