"use client";
import { useRef } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroModel from "./HeroModel";

const HeroSection = () => {
  const ref = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.set(".button  , .text", {
        y: -150,
      });
      gsap.to(".button  , .text", {
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
      <section className=" relative h-screen mx-4 md:mx-16 lg:mx-[120px] flex justify-start items-center">
        <div className="clipLink  z-20 relative md:w-1/2" ref={ref}>
          <div className="clipLink">
            <div className="text text-5xl  md:text-[4rem] lg:text-7xl text-center md:text-left ">
              Web Design &{" "}
            </div>
          </div>
          <div className="clipLink ">
            <div className="text text-5xl md:text-[4rem] lg:text-7xl text-center md:text-left">
              Development
            </div>
          </div>
          <div className="clipLink">
            <div className="text pt-7  text-[1.5rem] md:text-[2vw] font-extralight text-center md:text-left">
              Web Desinger, UI/UX Desinger, Frontend Developer & Framer Webflow
              Expert
            </div>
          </div>
          <div className="clipLink ">
            <div className=" button lg:w-[35%]">
              <Button button="Contact us" className="" />
            </div>
          </div>
        </div>
        <div className="absolute top-10">
          <HeroModel />
          <div className="absolute w-[150px] h-[50px] bottom-[40px] right-0 z-[100] bg-[#0A0A0F]"></div>
        </div>
      </section>
      <section className="mx-4 md:mx-[60px] lg:mx-[120px] mt-14 pt-6 px-2 flex justify-between items-center ">
        <h4 className="text-center text-2xl mx-auto">
          Welcome to KinDev, Web Designer & Dev Duo doing Web Development and
          expert in Webflow Framer and Figma
        </h4>
      </section>
    </>
  );
};

export default HeroSection;
