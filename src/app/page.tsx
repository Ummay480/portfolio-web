import React from "react";
import HeroSection from "../components/HeroSection"; 
import AboutMe from "../components/AboutSection"; 
import ProjectSection from "../components/ProjectSection";
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Contacts from "../components/Contacts";
import ProfessionalSkillsChart from "../components/ProfessionalSkillsChart";
import ProjectCards from "../components/ProjectCards"; // Correct relative path

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full px-20 sm:px-8 lg:px-12 py-4 mt-1">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="w-full flex items-center justify-center bg-[#121212] px-4 sm:px-8 lg:px-12">
        <AboutMe />
      </div>             

      {/* Project Section */}
      <div className="w-full flex flex-col items-center py-5 my-10 bg-[#121212]">
        <h1 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mb-14">
          My Projects
        </h1>
        <ProjectSection />
      </div>

      <div>
        <ProjectCards />
      </div>

      {/* Skills Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-2">
        <Skills />
      </div>

      {/* Professional Skills Chart */}
      <div className="w-full flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12 mt-2">
        <ProfessionalSkillsChart />
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-60 md:mt-20 lg:-mt-60 lg:mb-60">
        <ContactForm />
      </div>
      <div className="extraspace sm:h-80 mt-60 md:-mt-10 lg:-mt-72"></div>
  
      {/* Contacts */}
      <div className="w-full px-4 sm:px-8 lg:px-12 lg:mt-60">
        <Contacts />
      </div>
    </main>
  );
};

export default HomePage;
