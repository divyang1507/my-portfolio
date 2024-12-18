import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Button = ({ button }) => {
  return (
    <>
      <button className="py-3 group relative rounded-md px-8 bg-transparent  font-semibold border-zinc-200 border-2 transition-all duration-200">
        <div className="absolute h-0 bg-gradient-to-r bottom-0 group-hover:h-full left-0 right-0 transition-all duration-200 -z-10"></div>
        <div className="flex text-lg items-center justify-center  gap-4 text-zinc-200 group-hover:text-zinc-800 z-10 transition-all duration-200 ">
          {button}{" "}
          <div className="overflow-hidden inline-block relative w-6 h-6">
            <div className="text-zinc-200 absolute group-hover:text-zinc-800 flex items-center justify-center w-full h-full group-hover:translate-x-6 transition-all duration-300">
              <FaArrowRight className="" />
            </div>
            <span className="text-zinc-400 absolute group-hover:text-zinc-800 flex items-center justify-center w-full h-full group-hover:translate-x-0 -translate-x-6 transition-all duration-300">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
