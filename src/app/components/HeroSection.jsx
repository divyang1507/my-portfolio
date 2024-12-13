import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="w-[90%] mx-auto flex justify-between items-center">
        <div className="mt-24">
          <h1 className="">Web Design & </h1>
          <h1 className="">Development</h1>
          <h3 className="pt-7 font-extralight">
            Web Desinger, UI/UX Desinger, Frontend <br /> Developer & Framer
            Webflow Expert
          </h3>
          <button className="pt-16  text-xl">Contact</button>
        </div>
        <div></div>
      </section>
      <section className="w-[90%] mt-28 pt-6 px-2 mx-auto flex justify-between items-center ">
        <h4 className="text-center text-2xl w-1/3 mx-auto">
          Welcome to KinDev, Web Designer & Dev Duo doing Web Development and expert in Webflow
          Framer and Figma  
        </h4>
      </section>
    </>
  );
};

export default HeroSection;
