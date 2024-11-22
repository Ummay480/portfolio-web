"use client";

import React from "react";
import Image from "next/image";

const polygonData = [
  { id: 1, title: "Calculator", imageSrc: "/images/calculator.png" },
  { id: 2, title: "ATM", imageSrc: "/images/Atm.png" },
  { id: 3, title: "Number Guessing Game", imageSrc: "/images/number-guessing-game.jpg" },
  { id: 4, title: "Currency Converter", imageSrc: "/images/currency_converter.png" },
  { id: 5, title: "To-Do List", imageSrc: "/images/to-do-list.png" },
  { id: 6, title: "Student Management", imageSrc: "/images/student-management.png" },
];

const gradientPolygonColors = [
  "linear-gradient(45deg, red, yellow)",
  "linear-gradient(45deg, yellow, orange)",
  "linear-gradient(45deg, red, gold)",
  "linear-gradient(45deg, yellow, lightblue)",
  "linear-gradient(45deg, purple, magenta)",
  "linear-gradient(45deg, green, lime)",
];

const CustomPolygonCards: React.FC = () => {
  const polygonCount = polygonData.length;
  const radius = 150; // Radius of the rotation circle

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center bg-[#121212] py-20 rotating-container">
      <style jsx>{`
        @keyframes fairySwingVertical {
          0% {
            transform: translateY(-20px) rotateY(0deg) rotateX(0deg) translateZ(0px);
          }
          25% {
            transform: translateY(0px) rotateY(90deg) rotateX(5deg) translateZ(10px);
          }
          50% {
            transform: translateY(20px) rotateY(180deg) rotateX(0deg) translateZ(0px);
          }
          75% {
            transform: translateY(0px) rotateY(270deg) rotateX(-5deg) translateZ(-10px);
          }
          100% {
            transform: translateY(-20px) rotateY(360deg) rotateX(0deg) translateZ(0px);
          }
        }

        .rotating-container {
          perspective: 800px;
        }

        .rotating-polygons {
          animation: fairySwingVertical 10s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .polygon-card {
          position: absolute;
          width: 100px;
          height: 80px;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          transform-origin: center;
          transition: transform 0.3s ease;
          z-index: 5;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .polygon-card:hover {
          transform: scale(1.1);
          z-index: 10;
        }

        .polygon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          border-radius: 6px;
        }

        .card-title {
          position: absolute;
          bottom: -20px;
          text-align: center;
          font-size: 12px;
          color: white;
        }
      `}</style>

      <div className="rotating-polygons relative">
        {polygonData.map((polygon, index) => {
          const angle = (index / polygonCount) * 360; // Calculate angle
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const z = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={polygon.id}
              className="polygon-card"
              style={{
                background: gradientPolygonColors[index % gradientPolygonColors.length],
                transform: `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg)`,
              }}
            >
              <Image
                src={polygon.imageSrc}
                alt={polygon.title}
                width={100}
                height={80}
                className="polygon-image"
                onError={(e) => {
                  e.currentTarget.src = "/images/default-image.png"; // Fallback image
                }}
              />
              <span className="card-title">{polygon.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomPolygonCards;
