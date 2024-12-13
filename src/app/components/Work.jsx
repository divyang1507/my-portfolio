import React from "react";
import Project from "./Project";
import Marquee from "./Marquee";

const Works = () => {
  return (
    <>
      <Marquee marqueeName={"Works"}/>
      <section className="w-[90%] mx-auto">
        <div className="grid grid-cols-2 justify-between flex-wrap items-center gap-16 px-16 ">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </section>
    </>
  );
};

export default Works;
