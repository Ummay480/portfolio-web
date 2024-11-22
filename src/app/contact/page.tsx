import React from 'react';
import ContactForm from '../../components/ContactForm';
import Contacts from "../../components/Contacts";
import Header1 from "../../components/Header1";

const Contactpage: React.FC = () => {
  return (
    <>
      {/* Wrapper for Header1 */}
      <div className="w-screen mb-10 border-zinc-100 pt-16">


        <Header1 />
      </div>

      {/* Contact Form with adjusted top margin */}
      <div className="flex justify-center mt-60 sm:pt-10 md:pt-20 lg:pt-0 xl:pt-10 lg:-mb-40 px-6">
        <ContactForm />
      </div>

      {/* Contacts section with adjusted margin */}
      <div className="flex justify-center mb-10 px-10 mr-10">
        <Contacts />
      </div>
    </>
  );
};

export default Contactpage;
