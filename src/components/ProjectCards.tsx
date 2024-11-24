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
      <h1 className="text-3xl lg:text-4xl font-medium text-center -ml-10 mb-10 bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
      CLI Projects with Nodejs
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
         <div
         key={project.id}
         className="bg-black text-white shadow-md rounded-md overflow-hidden transform transition hover:scale-105"
       >
         {/* Video Container */}
         <div className="video-container border border-gray-500 rounded-md p-3 flex items-center justify-center w-full h-48 sm:h-64">
           <video
             src={project.videoSrc}
             autoPlay
             loop
             muted
             className="w-full h-full object-contain rounded-md"
           ></video>
         </div>

            <div className="p-3">
    <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1 bg-gradient-to-br from-red-600 to-yellow-600 text-white text-xs font-medium rounded-md shadow-md hover:bg-red-700 transition duration-300"
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
