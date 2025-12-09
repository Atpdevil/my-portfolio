import React from "react";
import { Link } from "react-router-dom";

const HomeInfo = () => {
    return (
        <div className="
        bg-green-200/70
        backdrop-blur-md
        text-[#3d3d3d]
        rounded-2xl
        p-5
        w-[330px]
        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        border border-[#e0d6c8]
        ">
      <p className="text-[15px] leading-tight font-semibold mb-4 text-center">
        Student at AMC Engineering College,<br/>
        strengthening core technical skills.
      </p>
      <button
        className="
          w-full py-2 
          bg-green-600
          hover:bg-green-700 
          rounded-xl 
          font-semibold
          flex items-center justify-center gap-2 
          text-[#3d3d3d]
          shadow-md 
          transition
        "
      >
      <Link
        to="/about"
        className="block bg-green-600 hover:bg-green-700 text-white text-center py-1 rounded-lg transition font-medium"
      >
        Learn more <span className="text-lg">↠</span>
        </Link>
      </button>
    </div>
  );
};

export default HomeInfo;
