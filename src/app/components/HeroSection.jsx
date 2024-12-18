"use client";
import  { useRef } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroModel from "./HeroModel";

const HeroSection = () => {
  const ref = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.set("h1, h3, .button  , p", {
        y: -150,
      });
      gsap.to("h1, h3, .button  , p", {
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        opacity: 1,
        clipLinkPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });
    },
    { scope: ref }
  );
  return (
    <>
      <section
        className=" mx-4 md:mx-[120px] relative h-screen flex md:flex-row flex-col justify-between items-center gap-8"
        ref={ref}>
        <div className="clipLink flex-1">
          <div className="clipLink">
            <h1 className="text-6xl md:text-8xl">Web Design & </h1>
          </div>
          <div className="clipLink">
            <h1 className="text-6xl md:text-8xl">Development</h1>
          </div>
          <div className="clipLink">
            <h3 className="pt-7  text-2xl md:text-3xl font-extralight">
              Web Desinger, UI/UX Desinger, Frontend Developer & Framer Webflow
              Expert
            </h3>
          </div>
          <div className="clipLink ">
            <div className=" button">
              <Button button="Contact us" className="" />
            </div>
          </div>
        </div>

        <div className="flex-1 blur-vignette">
          <HeroModel />
        </div>
      </section>
      <section className="mx-4 md:mx-[120px] pt-6 px-2 flex justify-between items-center ">
        <h4 className="text-center text-2xl w-full md:w-1/3 mx-auto">
          Welcome to KinDev, Web Designer & Dev Duo doing Web Development and
          expert in Webflow Framer and Figma
        </h4>
      </section>

    
    </>
  );
};

export default HeroSection;
