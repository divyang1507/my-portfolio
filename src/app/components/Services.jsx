import React from "react";
import Marquee from "./Marquee";

const Services = () => {
  return (
    <>
        <Marquee marqueeName={"Services"} />
      <section className="w-[90%] mx-auto">
        <div className="grid grid-cols-3 gap-12 ">
          <div className="col-span-2 bg-blackshade p-8 flex gap-8 rounded-3xl">
            <div className="w-full">
              <div className="text-3xl pb-8">Full website Design</div>
              <div className="w-auto  h-[300px] bg-white ">image</div>
            </div>
            <div>
              <div>
                We craft visually stunning and user-friendly designs with
                scalability and flexibility at the core. From intuitive layouts
                to engaging interfaces, I focus on delivering seamless
                experiences tailored to your brand.
              </div>
              <div className="pt-4">
                Let’s create a beautiful, functional, and user-centered digital
                experience that elevates your business.
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-blackshade p-8 flex flex-col gap-8 rounded-3xl">
            <div className="text-3xl pb-4">Full website Devlopment</div>
            <div>
              Let's translate your design to reality Developing . Fast,
              scalable, and pixel perfect.
            </div>
            <div className="w-auto  h-[200px] bg-white ">image</div>
          </div>
          <div className="col-span-1 bg-blackshade p-8 flex flex-col gap-8 rounded-3xl">
            <div className="text-3xl pb-4">Figma-to-Webflow & Framer</div>
            <div>
              Convert your design to reality using Framer and Webflow like
              no-code tool . Fast, scalable, and pixel perfect.
            </div>
            <div className="w-auto  h-[200px] bg-white ">image</div>
          </div>
          <div className="col-span-1 bg-blackshade p-8 flex flex-col gap-8 rounded-3xl">
            <div className="text-3xl pb-4">On-going support</div>
            <div>
              Unlimited Design &/or Webflow requests, delivered one at a time.
            </div>
            <div className="  ">
              <p>Unlimited requests</p>
              <p> Average 24-48 h delivery </p>
              <p> Unlimited revisions</p>
              <p> Custom design </p>
              <p>  Fixed monthly rate</p>
            </div>
          </div>
          <div className="col-span-1 bg-blackshade p-8 flex flex-col gap-8 rounded-3xl">
            <div className="text-3xl pb-4">Custom project</div>
            <div>
            We have extensive branding capabilities within my collaborators. If your project is more custom, let's chat about it.
            </div>
            <div className="w-auto  h-[200px] bg-white ">image</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
