import React from "react";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div className="pt-5 text-center">
      <div className="text-[9vw] justify-center flex items-center uppercase font-[550] leading-[8.5vw]">Hi, I’m Prabin </div>
      <div className="text-[9vw] justify-center flex items-start uppercase font-[550] leading-[8.5vw]">Turning
        <div className="h-[8.5vw] rounded-full -mt-2 ml-1 overflow-hidden">
        <Video />
        </div>Ideas</div>
      <div className="text-[9vw] justify-center flex items-center uppercase font-[550] leading-[8.5vw]">Into Reality</div>
    </div>
  );
};

export default HomeHeroText;
