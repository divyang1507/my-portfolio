import React from "react";
import Marquee from "./Marquee";
import Image from "next/image";
import uiux from "../../../public/uiux.jpg";
import coding from "../../../public/coding.jpg";
import figmaframer from "../../../public/figmaframer.png";
import project from "../../../public/project.jpg";
import Button from "./Button";
const Services = () => {
  return (
    <>
    <div className="mt-36 overflow-hidden">
    <Marquee marqueeName={"Services"} />
    </div>
      <section className="mx-4 md:mx-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 overflow-hidden ">
          <div className="serviceCard col-span-auto md:col-span-2 border-[1px] border-zinc-500  bg-zinc-800 p-8  gap-4 rounded-3xl ">
            <div className="text-3xl pb-8">
              UI/UX & Website Design + Prototyping
            </div>
            <div className="flex gap-6 flex-col md:flex-row w-full">
              <div className="max-w-[450px]">
                <Image className="rounded-2xl" src={uiux} alt='image'/>
              </div>
              <div className="flex-[1] text-zinc-200">
                <div>
                  We craft visually stunning and user-friendly designs with
                  scalability and flexibility at the core. From intuitive
                  layouts to engaging interfaces, I focus on delivering seamless
                  experiences tailored to your brand.
                </div>
                <div className="pt-4">
                  Let’s create a beautiful, functional, and user-centered
                  digital experience that elevates your business.
                </div>
              </div>
            </div>
          </div>
          <div className="serviceCard col-span-1 border-[1px] border-zinc-500 bg-zinc-800 p-8 flex flex-col gap-4 rounded-3xl">
            <div className="text-3xl pb-2">Full website Devlopment</div>
            <div className="text-zinc-200">
              Let's translate your design to reality Developing . Fast,
              scalable, and pixel perfect.
            </div>
            <div className="">
              <Image className="rounded-2xl" src={coding} alt='image'/>
            </div>
          </div>
          <div className="serviceCard col-span-1 border-[1px] border-zinc-500 bg-zinc-800 p-8 flex flex-col gap-4 rounded-3xl">
            <div className="text-3xl pb-2">Figma-to-Webflow & Framer</div>
            <div className="text-zinc-200">
              Convert your design to reality using Framer and Webflow like
              no-code tool . Fast, scalable, and pixel perfect.
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image className="rounded-2xl" src={figmaframer} alt='image'/>
            </div>
          </div>
          <div className="serviceCard justify-between col-span-1 border-[1px] border-zinc-500 bg-zinc-800 p-8 flex flex-col gap-4 rounded-3xl">
            <div className="text-3xl pb-2 ">On-going support</div>
            <div className="text-zinc-200">
              Unlimited Design &/or Webflow requests, delivered one at a time.
            </div>
            <div className=" text-zinc-200 ">
              <p>Unlimited requests</p>
              <p> Average 24-48 h delivery </p>
              <p> Unlimited revisions</p>
              <p> Custom design </p>
              <p> Fixed monthly rate</p>
            </div>
            <div className=" z-10 flex items-center justify-center mt-18 ">
              <Button button='Contact us' className='w-full'/>
            </div>
          </div>
          <div className="serviceCard col-span-1 border-[1px] border-zinc-500 bg-zinc-800 p-8 flex flex-col gap-4 rounded-3xl">
            <div className="text-3xl pb-2">Custom project</div>
            <div className="text-zinc-200">
              We have extensive branding capabilities within my collaborators.
              If your project is more custom, let's chat about it.
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image className="rounded-2xl" src={project} alt='image'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
