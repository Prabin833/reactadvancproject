import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        className="text-[4vw] hover:border-[#DEFD50] hover:text-[#DEFD50] leading-[6vw] uppercase border-4 rounded-full px-8"
        to="/project"
      >
        Projects
      </Link>
      <Link
        className="text-[4vw] hover:border-[#DEFD50] hover:text-[#DEFD50] leading-[6vw] uppercase border-4 rounded-full px-8"
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
