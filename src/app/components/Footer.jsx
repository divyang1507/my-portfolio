import React from "react";

export const Footer = () => {
  const navMenu = ["Home", "Contact", "About", "Work"];
  return (
    <>
      <footer className="mx-4 md:mx-16 lg:mx-[120px] my-32 py-16">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="text-3xl">
            <div>KinDiv</div>
            <div className="pt-8 text-5xl">Do you want to start <br/> a project together?</div>
          </div>
          <div className="">
            {navMenu.map((e, id) => {
              return (
                <div className="text-3xl text-center py-6 clipLink" key={id}>
                  <div className=" link">{e}</div>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};