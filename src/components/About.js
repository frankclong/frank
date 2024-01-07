import React from "react";
import LinkedInButton from "./LinkedInButton";
import EmailButton from "./EmailButton";

function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Frank.
              <br className="hidden lg:inline-block" /> Welcome to my site.
            </h1>
            <p className="mb-8 leading-relaxed">
              I hope you enjoy your stay as you explore some of my various hobbies. I might not be the best or most knowledgeable about any of these things but I have tons of fun trying new things! 
            </p>
            <p className="mb-8 leading-relaxed">
              I'm always excited to chat about any of these things and just as excited to try something new. Let's connect! 
            </p>
            <div className="flex justify-center">
              {/* <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#hobbies"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a> */}
              <LinkedInButton/>
              <EmailButton />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="reigen"
              src="./reigen.gif"
            />
          </div>
        </div>
      </section>
      );
}

export default About;