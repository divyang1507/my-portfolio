"use client";
import React, { useEffect, useRef } from "react";
import Project from "./Project";
import Marquee from "./Marquee";
import { gsap } from "gsap";
import lofomockup from "../../../public/lofomockup.png";
import thinknextinnovation from "../../../public/thinknextinnovation.png";
import portfolio from "../../../public/portfolio.png";
import llmwaremockup from "../../../public/llmwaremockup.png";
import pixasocial from "../../../public/pixasocial.png";
import frostydelight from "../../../public/frostydelight.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const deg = (index) => {
      if (cardsRef.current.length - 1 === index || cardsRef.current.length - 2 === index) {
        return 0;
      } else {
        const randomNumber = Math.floor(Math.random() * 7) - 3;
        return randomNumber;
      }
    };
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotateZ: 0 },
        {
          rotateZ: `${deg(index)}deg`,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Trigger animation when the card enters 80% of the viewport
            end: "top 20%", // Animation ends when the card reaches 20% of the viewport
            scrub: true,
            // markers: true,
          },
        }
      );
    });
  });
  const projects = [
    {
      name: "Clothing Brand E-commerce Platform",
      tool: "Figma",
      type: "UI/UX Design",
      link: "",
      image: lofomockup,
    },
    {
      name: "LLMWare.ai",
      tool: "Framer Figma",
      type: "UI/UX & Website | No-code Website",
      link: "",
      image: llmwaremockup,
    },
    {
      name: "Think Next Innovation",
      tool: "Next.JS Tailwindcss GSAP",
      type: "Website",
      link: "",
      image: thinknextinnovation,
    },
    {
      name: "Pixa Social Redesign",
      tool: "Figma",
      type: "UI/UX Design",
      link: "",
      image: pixasocial,
    },
    {
      name: "Frosty Delight",
      tool: "Figma Photoshop",
      type: "Brand Identity Design",
      link: "",
      image: frostydelight,
    },
    {
      name: "Portfolio Mockup",
      tool: "Figma Photoshop",
      type: "UI/UX Design",
      link: "",
      image: portfolio,
    },
  ];

  return (
    <>
      <div className="mt-40 workpage relative">
        {/* <Marquee marqueeName={"Works"} /> */}
        <div className="text-4xl mb-8  md:text-5xl lg:text-6xl text-center font-family-nunito">
          {" "}
          Works
        </div>

        <section className="mx-4 md:mx-[60px] lg:mx-[120px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between flex-wrap items-center gap-8">
            {projects.map((e, id) => {
              return (
                <div
                  key={id}
                  ref={(el) => (cardsRef.current[id] = el)}
                  className="rounded-xl sticky top-[100px] shadow-xl">
                  <Project
                    name={e.name}
                    type={e.type}
                    tool={e.tool}
                    link={e.link}
                    image={e.image}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Works;
