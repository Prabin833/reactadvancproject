import React from "react";

const ProjectCard = ({ image, title }) => {
  return (
    <div className="w-full h-full group hover:rounded-4xl transition-all relative overflow-hidden cursor-pointer bg-[#1a1a1a]">
      
      {/* 1. Image: Slow zoom and slight darkening on hover */}
      <img
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:opacity-70"
        src={image}
        alt={title}
      />

      {/* 2. K72 Style Overlay: Bottom-aligned text with a reveal animation */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        
        {/* The Title: Slides up and fades in */}
        <div className="overflow-hidden">
          <h2 className="text-white uppercase text-2xl md:text-4xl font-bold leading-tight tracking-tighter translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
            {title}
          </h2>
        </div>

        {/* The "View" Text: Fades in after the title */}
        <div className="mt-2 overflow-hidden">
          <p className="text-white/60 uppercase text-[10px] tracking-[0.2em] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-[cubic-bezier(0.25,1,0.5,1)]">
            PRABIN KUMAR..
          </p>
        </div>

        {/* Optional: Thin divider line that expands from left to right */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-1000 ease-out" />
      </div>

    </div>
  );
};

export default ProjectCard;