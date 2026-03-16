import React, { useEffect } from "react";

import pimage1 from "../assets/projectimg1.avif";

import pimage2 from "../assets/projectimg2.avif";

import pimage3 from "../assets/projectimg3.avif";

import pimage4 from "../assets/projectimg4.avif";

import pimage5 from "../assets/projectimg5.avif";

import pimage6 from "../assets/projectimg6.avif";

import pimage7 from "../assets/projectimg7.avif";

import pimage8 from "../assets/projectimg8.avif";

import pimage9 from "../assets/projectimg9.avif";

import pimage10 from "../assets/projectimg10.jpg";

import pimage11 from "../assets/projectimg11.jpg";

import pimage12 from "../assets/projectimg12.avif";

import ProjectCard from "../components/home/projects/agence/ProjectCard";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const projects = [
    { id: 1, image: pimage1, title: "Projects" },

    { id: 2, image: pimage2, title: "Daily Routine for a Long Life" },

    { id: 3, image: pimage3, title: "Choose Healthy Foods" },

    { id: 4, image: pimage4, title: "Drink Water" },

    { id: 5, image: pimage5, title: "30 Minutes of Exercise Daily" },

    { id: 6, image: pimage6, title: "7+ Hours of Sleep Daily" },

    { id: 7, image: pimage7, title: "Start Your Day Right" },

    { id: 8, image: pimage8, title: "project 8" },

    { id: 9, image: pimage9, title: "project 9" },

    { id: 10, image: pimage10, title: "Project 10" },

    { id: 11, image: pimage11, title: "Project 11" },

    { id: 12, image: pimage12, title: "Project 12" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,

        { y: 100, opacity: 0 },

        {
          y: 0,

          opacity: 1,

          duration: 1,

          ease: "power3.out",

          scrollTrigger: {
            trigger: card,

            start: "top 85%",
          },
        },
      );
    });
  }, []);

  return (
    <div className="text-black bg-white p-4 relative">
      <div className="h-[50vh] w-full">
        <h2 className="absolute top-[50vh] left-4 -translate-y-1/2 z-20 text-[10.4vw] uppercase leading-none pointer-events-none">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard image={project.image} title={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;