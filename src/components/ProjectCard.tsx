"use client"
// ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, isVideo, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {isVideo ? (
          <video src={imageSrc} autoPlay loop muted className="w-full h-auto" />
        ) : (
          <img src={imageSrc} alt={title} className="w-full h-auto" />
        )}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
      </a>
    </div>
  );
};

export default ProjectCard;
