import React from "react";

const Footer = () => {
  const navMenu = ["Home", "Contact", "About", "Work"];

  return (
    <footer className="mx-4 md:mx-16 lg:mx-[120px] mt-32 py-16 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl">
          <div>Progrowth</div>
          <div className="pt-8 text-3xl md:text-5xl">
            Do you want to start <br /> a project together?
          </div>
        </div>
        <div>
          {navMenu.map((item, index) => (
            <div className="md:text-3xl text-lg text-center py-6 clipLink" key={index}>
              <div className="link">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8">all rights reserved @ Progrowth</div>
    </footer>
  );
};

export default Footer;
