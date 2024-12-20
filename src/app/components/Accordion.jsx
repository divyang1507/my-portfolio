"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex group  relative transition-all ease-linear duration-300 py-8 border-b-2 border-neutral200 hover:px-16 justify-between w-full text-xl`}>
        <div className="absolute h-0 rounded-md bg-neutral700 bottom-0 group-hover:h-full left-0 right-0 transition-all duration-200 -z-10"></div>
        <span className="text-left">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <div>{!accordionOpen ? <FaPlus /> : <FaMinus />}</div>
      </button>
      <div
        className={`grid  bg-neutral600 overflow-hidden transition-all duration-300 ease-in-out text-neutral50 text-lg  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 py-12 px-16"
            : "grid-rows-[0fr] opacity-0 py-0 px-16"
        }`}>
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
