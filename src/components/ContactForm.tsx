"use client";
import React, { useState } from "react";
import Image from "next/image";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    map: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center sm:mt-96 md:mt-80 sm:-mb-32 lg:-mb-40 -ml-10">
   
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-center text-3xl md:5xl lg:6xl mb-16 font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text -mt-96">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Name Input */}
          <div className="flex items-center mb-6 space-x-4">
            <div className="w-16 flex-shrink-0">
              <Image src="/images/person.png" alt="name icon" width={64} height={64} />
            </div>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1  px-0 lg:px-4 py-2 lg:py-3 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow-lg text-sm lg:text-lg"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center mb-6 space-x-4">
            <div className="w-16 flex-shrink-0">
              <Image src="/images/gmail.png" alt="gmail-icon" width={64} height={64} />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1  px-0 lg:px-4 py-2 lg:py-3 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow-lg text-sm lg:text-lg"
            />
          </div>

          {/* Phone Input */}
          <div className="flex items-center mb-6 space-x-4">
            <div className="w-16 flex-shrink-0">
              <Image src="/images/call1.png" alt="phone icon" width={64} height={64} />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1  px-0 lg:px-4 py-2 lg:py-3 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow-lg text-sm lg:text-lg"
            />
          </div>

          {/* Message Input */}
          <div className="flex items-start mb-6 space-x-4">
            <div className="w-16 flex-shrink-0 mt-2">
              <Image src="/images/message.png" alt="message icon" width={64} height={64} />
            </div>
            <textarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="flex-1 px-4 py-2 lg:py-3 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow-lg text-sm lg:text-lg"
            />
          </div>
                    <a href="mailto:kulsoom0324@gmail.com">
            <button
              type="button"
              className="wrap-flex justify-center w-full max-w-xs mx-auto lg:px-6 py-3 ml-16 rounded-lg bg-gradient-to-br from-red-600 to-yellow-600 hover:bg-red-700 text-white text-sm lg:text-lg font-semibold transition duration-300 ease-in-out shadow-lg block text-center -mb-96"
            >
              Send a message
            </button>
          </a>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;

