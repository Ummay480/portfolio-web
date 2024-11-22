"use client";
import React from "react";
import ContactButtons from "./ContactButtons"


const Contacts = () => {
  return (
    <footer className="bg-[#121212] py-4 mt-5 mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 -mt-20">
            <h2  className="text-3xl lg:5xl ml-10 font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
              Let&apos;s Connect
            </h2>
            <p className="text-[#ADB7BE] ml-0 lg:ml-10 text-sm mt-2">
              Follow me on social media or reach out via email!
            </p>
            {/* Social media icons moved under the <p> */}
            <div className="flex flex-wrap mt-4 justify-center sm:space-x-0 md:space-x-3 lg:space-x-4 -ml-8 ">
              <a
                href="https://www.linkedin.com/in/ummaykulsoom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                </a>
              <div>
              <ContactButtons/>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-[#ADB7BE]">
 </div>
      </div>
    </footer>
    
  );
};

export default Contacts;
