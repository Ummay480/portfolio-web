"use client";
import React from "react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <div className="relative top-0 left-0 right-0 z-10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg mb-16 bg-yellow-900 bg-opacity-96 ">
      {/* Fixed "About Me" image outside the icons */}

      {/* Static social media icons with consistent size */}
      <div className="relative flex flex-wrap justify-center items-center z-10 opacity-80 rounded-full mt-10 space-x-4 md:space-x-8">
        {/* Education Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-2">
          <Image
            src="/images/education.png"
            alt="Education Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32"
          />
        </div>

        {/* Skills Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-4">
          <Image
            src="/images/skill.png"
            alt="Skills Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 ml-8"
          />
        </div>

        {/* Another Skill Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110 -mt-2">
          <Image
            src="/images/code.png"
            alt="code-Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 ml-16"
          />
        </div>

        {/* Certificate Icon */}
        <div className="sparkle transition-transform duration-300 hover:scale-110">
          <Image
            src="/images/certificate.png"
            alt="Certificate Icon"
            width={100}
            height={100}
            className="w-20 md:w-28 lg:w-32 ml-8"
          />
        </div>
      </div>

      {/* Glassmorphism container with adjusted margin-top */}
      <div className="relative z-30 container mx-auto p-6 max-w-md w-full backdrop-blur-lg bg-white bg-opacity-20 shadow-md border border-white/10 rounded-lg mt-6 mb-12">
        <div className="flex justify-center px-6 py-1">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white">
            About Me
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
