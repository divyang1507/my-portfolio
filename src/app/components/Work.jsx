"use client";
import React, { useEffect, useRef } from "react";
import Project from "./Project";
import Marquee from "./Marquee";
import { gsap } from "gsap";
import lofomockup from '../../../public/lofomockup.png'
import thinknextinnovation from '../../../public/thinknextinnovation.png'
import portfolio from '../../../public/portfolio.png'
import llmwaremockup from '../../../public/llmwaremockup.png'
import pixasocial from '../../../public/pixasocial.png'
import frostydelight from '../../../public/frostydelight.png'

const Works = () => {


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
      <div className="mt-36 overflow-hidden">
        <Marquee marqueeName={"Works"} />
      </div>
      <section className="mx-4 md:mx-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between flex-wrap items-center gap-8">
          {projects.map((e, id) => {
         
            return (
              <div
                key={id}
                className="rounded-xl"
              
              >
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
    </>
  );
};

export default Works;
