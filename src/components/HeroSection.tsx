"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-12 lg:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center justify-center lg:px-60">
        {/* Text Section */}
        <div className="col-span-12 sm:col-span-7 text-center sm:text-left flex justify-center sm:justify-start">
          <div>
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
                Hello, I am{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Ummay",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block", lineHeight: "1" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              I create modern, responsive websites that combine creativity and technical skill. With a focus on web development and UI/UX design, I bring ideas to life with seamless digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-red-500 via-yellow-600 to-pink-800 hover:bg-slate-200 text-black text-center"
              >
                Hire Me
              </a>
              <a
                href="/images/umme-resume.png"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-red-600 to-yellow-800 hover:bg-slate-800 text-white border border-white text-center"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-12 sm:col-span-5 flex justify-center mt-8 lg:mt-10 ">
          <div className="neon-border w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full relative flex items-center justify-center px-0 py-5">
            <Image
              src="/images/ummay1.jpeg"
              alt="profile picture"
              className="rounded-full"
              width={300}
              height={300}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
