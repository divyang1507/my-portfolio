"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Work from "./components/Work";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import Workwithus from "./components/Workwithus";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Footer } from "./components/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Navbar />

      <HeroSection />
      <div className="w-[800px] hidden h-[800px] rounded-full blur-3xl bg-pink-600 opacity-20 absolute left-[-350px] -z-50"></div>
      <div className="w-[500px] hidden h-[500px] rounded-full blur-3xl bg-[#e3ff31] opacity-20 absolute right-[-150px] top-[1650px] -z-50"></div>
      <Work />
      <Services />
      <Reviews />
      <Workwithus />
      <Faqs />
      <Footer />
    </>
  );
}
