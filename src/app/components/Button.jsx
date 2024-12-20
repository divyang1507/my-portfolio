import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Button = ({ button }) => {
  return (
    <>
      <button className="py-3 group relative rounded-md px-8 bg-transparent  font-semibold neutral200 border-2 transition-all duration-200">
        <div className="absolute h-0 bg-neutral50 bottom-0 group-hover:h-full left-0 right-0 transition-all duration-200 -z-10"></div>
        <div className="flex text-lg items-center justify-center  gap-4 text-neutral50 group-hover:text-neutral800 z-10 transition-all duration-200 ">
          {button}{" "}
          <div className="overflow-hidden inline-block relative w-6 h-6">
            <div className="text-neutral50 absolute group-hover:text-neutral800 flex items-center justify-center w-full h-full group-hover:translate-x-6 transition-all duration-300">
              <FaArrowRight className="" />
            </div>
            <span className="text-neutral200 absolute group-hover:text-neutral800 flex items-center justify-center w-full h-full group-hover:translate-x-0 -translate-x-6 transition-all duration-300">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
