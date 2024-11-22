"use client";
import React from "react";

const projects = [
  {
    id: 1,
    title: "ATM Simulation",
    description: "A functional ATM simulation project using TypeScript.",
    videoSrc: "/assets/ATM.mp4",
    link: "https://github.com/your-repo/ATM",
  },
  {
    id: 2,
    title: "To-Do List App",
    description: "A simple task management app built with React and TypeScript.",
    videoSrc: "/assets/to-do-list.mp4",
    link: "https://github.com/your-repo/ToDo",
  },
  {
    id: 3,
    title: "Word-Counter",
    description: "A Word Counter tool built with TypeScript to analyze and count words in a text.",
    videoSrc: "/assets/word-counter.mp4",
    link: "https://github.com/your-repo/WeatherApp",
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description: "A simple number guessing game built with TypeScript.",
    videoSrc: "/assets/number-guessing.mp4",
    link: "https://github.com/your-repo/NumberGuessingGame",
  },
  {
    id: 5,
    title: "Calculator",
    description: "A personal portfolio showcasing my skills and projects.",
    videoSrc: "/assets/Calculator.mp4",
    link: "https://github.com/your-repo/Portfolio",
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "A real-time currency converter built with TypeScript.",
    videoSrc: "/assets/currency-converter.mp4",
    link: "https://github.com/your-repo/CurrencyConverter",
  },
];

const ProjectCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
        Projects
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black text-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            {/* Video Container */}
            <div className="video-container border border-gray-500 rounded-md p-5 flex items-center justify-center w-full h-72 sm:h-96">
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                className="w-full h-full object-contain rounded-md"
              ></video>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-br from-red-600 to-yellow-600 text-white text-sm font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
