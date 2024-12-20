'use client';
import Image from "next/image";
import React, { useRef } from "react";
import { FaRegStar, FaStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "../../app/show.css";
const Reviews = () => {
  const cardRefs = useRef();
  const glowRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRefs.current;
    if (!card) return; // Safety check

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get mouse X position relative to card
    const y = e.clientY - rect.top; // Get mouse Y position relative to card

    // Immediately move the glow element to the cursor position
    if (glowRef.current) {
      const glow = glowRef.current;
      gsap.set(glow, {
        opacity: 1, // Make sure glow is visible
        x: x, // Position glow directly at the cursor tip
        y: y, // Position glow directly at the cursor tip
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRefs.current;
    if (!card) return; // Safety check

    // Fade out the glow and reset position on mouse leave
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.3,
      });
    }
  };

  const reviews = [
    {
      stars: 4,
      review:
        "Thanks to this project we discovered and realised our brand was so much more than what we thought. We're extremely happy about the results",
      name: "Sumit Yadav",
      post: "CMO",
      image: "",
    },
    {
      stars: 4,
      review:
        "It seems like a trivial thing for us now, but thanks to the project we have realised that all design choices must have a strategic basis",
      name: "Manan Desai",
      post: "CMO",
      image: "",
    },
    {
      stars: 4,
      review:
        "Not only the project inspired us about our brand, but the actual results we were able to accomplish were amazing.",
      name: "HeyTech.co",
      post: "company",
      image: "",
    },
  ];
  return (
    <>
      <div className=" mt-36 mb-8 text-4xl md:text-6xl text-center ">
        Reviews {/* Some nice words from my past Clients */}
      </div>
      <section
        id="cards"
        className=" mx-4  md:mx-16 lg:mx-[120px] items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {reviews.map((e, id) => {
          return (
            <div
              ref={glowRef}
              key={id}
              className="card p-8 flex justify-between flex-col border-neutral200 border-2 rounded-xl bg-gradient-to-b  from-neutral600 to-neutral800">
              <div>
                <div className="flex text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="pt-4">{e.review}</div>
              </div>
              <div className="pt-6 flex items-center gap-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center text-4xl">
                  {e.image ? <Image scr={""} /> : <FaUser />}
                </div>
                <div>
                  <p className="">{e.name}</p>
                  <p className="text-sm">{e.post}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
