"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const navMenu = ["Home", "Contact", "About", "Work"];
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tl = useRef();
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.set(".link", {
        y: 100,
        
      });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu", {
          duration: 1.2,
          ease: "power4.inOut",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        })
        .to(".link", { y: 0, duration: 1, stagger: 0.1, ease: "power4.inOut", delay:-0.75 });
    },
    { scope: ref }
  );

  const handleinput = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <nav className=" py-6 fixed w-screen top-0  z-50 flex items-center justify-between" ref={ref}>
        <div className=" z-10 w-full mx-4 md:mx-[60px] lg:mx-[120px] justify-between flex items-center">
          <div className="z-10 text-3xl font-medium" onClick={()=>{setIsOpen(false)}}>kindev</div>
          <div className="z-10 text-4xl relative cursor-pointer overflow-hidden" onClick={handleinput}>
            <div
              className={`${
                isOpen
                  ? "block  opacity-100 -rotate-180 transition-all  duration-500"
                  : "rotate-180 absolute transition-all duration-500 opacity-0 "
              }`}>
              <MdClose />
            </div>
            <div
              className={`${
                isOpen
                  ? "rotate-180 transition-all duration-500 opacity-0 absolute "
                  : " -rotate-180 transition-all duration-500 block opacity-100"
              }`}>
              <MdMenu />
            </div>
          </div>
        </div>
        <div
          className={`menu flex flex-col justify-center items-center md:items-end w-screen h-screen top-0 clip absolute bg-transparent backdrop-blur-3xl  px-4 md:px-[120px]`}>
         
          {navMenu.map((e, id) => {
            return (
              <div className="text-4xl text-center md:text-7xl py-6 clipLink" key={id}>
                <div className=" link">{e}</div>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
