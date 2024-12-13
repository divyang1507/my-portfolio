"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const navMenu = ["Home", "Contact", "About", "Work"];
  const [isOpen, setIsOpen] = useState(false);
  const handleinput = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className=" py-6 fixed top-0 w-full bg-background z-50">
        <div className="w-[90%] z-10 mx-auto justify-between  bg-background flex items-center">
          <div className="z-10 text-2xl">kindev</div>
          <div className="z-10 text-4xl" onClick= {handleinput}>
            <MdMenu/>
          </div>
        </div>
        <div className={`${isOpen ? "flex" : "hidden"} absolute bg-background w-screen h-screen -top-6  flex-col justify-center items-end`}>
          {navMenu.map((e, id) => {
            return (
              <div className="text-7xl py-6" key={id}>
                {e}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
