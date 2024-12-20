"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Project = ({ name, type, link, image, tool }) => {
  const cardRefs = useRef();
  const glowRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRefs.current;
    if (!card) return; // Safety check

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get mouse X position relative to card
    const y = e.clientY - rect.top; // Get mouse Y position relative to card

    // Calculate rotation values for card
    const rotateX = (y / rect.height - 0.5) * 10; // Y-axis tilt
    const rotateY = (x / rect.width - 0.5) * -10; // X-axis tilt

    // Apply the rotation using GSAP
    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      transformOrigin: "center",
      ease: "power1.out",
      duration: 0.2,
    });

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

    // Reset rotation on mouse leave
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: "power1.out",
      duration: 0.5,
    });

    // Fade out the glow and reset position on mouse leave
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.3,
      });
    }
  };

  return (
    <div
      className="overflow-hidden group rounded-xl cursor-pointer"
      ref={cardRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <div
        className="absolute w-[200px] h-[200px] blur-xl rounded-full glowlight opacity-0 pointer-events-none"
        ref={glowRef}
        style={{
          top: "0%", // Initially center it on the card
          left: "0%", // Initially center it on the card
          transform: "translate(-50%, -50%)", // Ensure it's centered
        }}></div>
      <div
        className={`bg-gradient-to-b  from-neutral600 to-neutral800  neutral800 hover:bg-[#2b2b34] neutral700 p-8 rounded-xl flex-1 border-neutral200 border-[1px]`}>
        <div className="w-auto h-auto object-fill overflow-hidden rounded-lg ">
          <Image
            src={image}
            alt="portfolioimage "
            className="rounded-lg  grayscale  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.1]"
          />
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between pt-4 ">
            <h4>{name}</h4>
            <div className="border-blackshade4 text-sm font-extrathin bg-blackshade3 border-[1px] px-1 py-[0.5px] rounded-sm">
              {type}
            </div>
          </div>
          <div className="pt-2">
            <div className="text-sm text-blackshade4">Made using</div>
            <div>{tool}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
