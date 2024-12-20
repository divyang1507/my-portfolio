"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"
import React, { useRef } from "react";


const Workwithus = () => {
  const sectionref = useRef();
  const heading = useRef();
  const data = [
    {
      name: " Unique Designs",
      details:
        "We focus on creating user-centric designs that not only look visually stunning but also provide a seamless and intuitive experience. Every design is tailored to reflect your brand’s essence and values.",
    },
    {
      name: "Functonal Front-end Development",
      details:
        "We specialize in transforming designs into responsive, interactive websites using the latest front-end technologies. From design to code, we ensure your site functions flawlessly, providing an intuitive and engaging experience for your users.",
    },
    {
      name: "Quality and Efficiency",
      details:
        "With a well-structured design process, we deliver high-quality work without compromising on deadlines. Our efficient workflow ensures timely delivery while maintaining attention to detail in every aspect of the design.",
    },
    {
      name: "Time and Pricing",
      details:
        "We value transparency and efficiency. Our clear communication and streamlined processes ensure timely delivery, while our flexible pricing reflects the scope and complexity of your project, delivering great value within your budget.",
    },
  ];
  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //   gsap.to(heading.current, {
  //     scrollTrigger: {
  //       trigger: heading.current,
  //       pin: true,
  //       start: "top center",
  //       end: "center top",
  //       // markers: true,
  //     },
  //   });
  // });

  return (
    <>
      {/* sticky top-[500px] w-[40%] */}
      <div className=" relative mt-36 mb-8 mx-4 md:mx-16 lg:mx-[120px] flex gap-16 flex-col md:flex-row">
        <div className=" sticky top-[10%] md:top-[25%] h-full ">
          <div className="text-4xl w-3/4 md:text-6xl lg:text-7xl">
            Why Work with us
          </div>
        </div>
        <div className=" md:w-[60%] bg-neutral800 rounded-3xl overflow-hidden">
          {data.map((e, id) => {
            return (
              <div
                key={id}
                className="p-8 sticky top-[15%] md:static bg-neutral800">
                <div className="flex flex-col md:flex-row text-4xl pt-10 gap-6 ">
                  <div className="text-6xl">{id + 1}.</div>
                  <div>
                    <div className="border-b border-neutral200 pb-4">
                      {e.name}
                    </div>
                    <div className="text-xl font-light mt-8">{e.details}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Workwithus;
