"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaDribbble, FaBehance } from "react-icons/fa";
import Marquee from "./Marquee";
import HeroAnimation from "./HeroAnimation";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.to(".button  , .text", {
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      });
    },
    { scope: ref }
  );
  return (
    <>
      <section
        ref={ref}
        className="bg-neutral900 h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center  leading-[100%] font-medium text-center text-white">
            Design &
          </div>
        </div>
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center pb-24 lg:pb-12 leading-[100%] font-medium text-center text-white">
            Funcionlity
          </div>
        </div>

        <div className="z-10 flex gap-6 text-3xl lg:text-4xl absolute bottom-[40%] md:bottom-8 md:left-[120px]">
          <Link href={"https://github.com/divyang1507"} passHref>
            <FaGithub className="hover:text-neutral-400" />{" "}
          </Link>
          <Link href={"https://dribbble.com/dev3434"}>
            <FaDribbble className="hover:text-neutral-400" />
          </Link>
          <Link href={"https://www.behance.net/divyangprajapa"}>
            <FaBehance className="hover:text-neutral-400" />
          </Link>
        </div>
        <div className="absolute top-0 w-full h-screen ">
          <HeroAnimation />
        </div>
      </section>
      <div>
        <Marquee />
      </div>
    </>
  );
};

export default HeroSection;
