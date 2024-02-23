// src/components/Projects.js

import React from "react";
import { hobbies } from "../data";

function ProjectWrapper({project}) {
  if (project.link === "") {
    return (<div
      key={project.image}
      className="sm:w-1/4 w-100 p-4">
        <ProjectContent project={project}/>
      </div>);
  }
  else {
    return (<a
      href={project.link}
      key={project.image}
      className="sm:w-1/4 w-100 p-4"
      target={project.target}>
        <ProjectContent project={project}/>
      </a>);
  }
}

function ProjectContent({project}) {
  return (
    <div className="flex relative h-full">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={project.image}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
          {project.subtitle}
        </h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {project.title}
        </h1>
        <p className="leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Hobbies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Stuff I like
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {hobbies.map((project) => (
            <ProjectWrapper project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
}