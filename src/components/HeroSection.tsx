import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./TechCube.css";
import react from "../../public/React.png";
import mongodb from "../../public/mongodb.png";
import express from "../../public/express.png";
import node from "../../public/Node.js.png";
import tailwind from "../../public/Tailwind CSS.png";
import github from "../../public/github.png";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-visible">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 px-6">
        {/* Cube */}
        <div>
          <div className="cube-scene">
            <div className="cube">
              <img className="face front" src={react} />
              <img className="face back" src={mongodb} />
              <img className="face left" src={express} />
              <img className="face right" src={node} />
              <img className="face top" src={tailwind} />
              <img className="face bottom" src={github} />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div
          className={`transition-all  text-center duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-bold leading-[1.2] bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
            style={{ paddingBottom: "0.3em" }}
          >
            Hi, I'm Biswajit!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-3 max-w-2xl mx-auto">A MERN Stack Developer</p>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building modern web experiences with interactive and scalable technologies
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Full-Stack Web Developer Portfolio
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
