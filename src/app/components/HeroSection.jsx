"use client";
import { useRef } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";

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
      <section className=" relative h-screen lg:h-screen mx-4 md:mx-16 lg:mx-[120px] flex items-end md:justify-start md:items-center">
        <div className="z-20 relative md:w-1/2 " ref={ref}>
          <div className="clipLink">
            <div className="text text-5xl md:text-[4rem] lg:text-7xl text-center md:text-left ">
              Web Design &{" "}
            </div>
          </div>
          <div className="clipLink ">
            <div className="text text-5xl md:text-[4rem] lg:text-7xl text-center md:text-left">
              Development
            </div>
          </div>
          <div className="clipLink">
            <div className="text pt-2 lg:pt-5 text-[1.5rem] md:text-[2vw] font-extralight text-center md:text-left">
              Web Desinger, UI/UX Desinger, Frontend Developer & Framer Webflow
              Expert
            </div>
          </div>
          <div className="clipLink ">
            <div className="mt-6 lg:mt-12 button flex items-center justify-center md:justify-start md:items-start">
              <Button button="Contact us" className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-4 md:mx-[60px] lg:mx-[120px] mt-14 pt-6 px-2 flex justify-center items-center ">
        <div className="text-center text-2xl mx-auto w-auto md:w-1/3">
          Welcome to KinDev, Web Designer & Dev Duo doing Web Development and
          expert in Webflow Framer and Figma
        </div>
      </section>
      <div className=" absolute top-0 w-full h-screen flex items-center justify-center">
      <Spline scene="https://prod.spline.design/cL2ltYduglTx-ZKB/scene.splinecode" />
      </div>
    </>
  );
};

export default HeroSection;
