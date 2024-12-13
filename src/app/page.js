import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Work from "./components/Work";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
   
<>
<Navbar/>

 <HeroSection/>
 <div className="w-[800px] h-[800px] rounded-full blur-3xl bg-pink-600 opacity-20 absolute left-[-350px] -z-50"></div>
 <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#e3ff31] opacity-20 absolute right-[-150px] top-[1650px] -z-50"></div>
<Work/>
<Services/>
<Reviews/>
<Faqs/>
</>
  );
}
