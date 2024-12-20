import { FaStarOfLife } from "react-icons/fa6";

const Marquee = () => {
  return (
    <div className="marquee flex gap-8 overflow-hidden relative bg-primary py-4 bg-[#6C3AE8] text-white text-3xl font-medium">
      <div className=" flex-shrink-0 flex justify-around min-w-full gap-12 animate-scroll items-center">
        <div className="text-4xl md:text-6xl">App Design</div> <FaStarOfLife />
        <div className="text-4xl md:text-6xl">Web Design</div> <FaStarOfLife />
        <div className="text-4xl md:text-6xl">UI/UX Design</div>
        <FaStarOfLife />
        <div className="text-4xl md:text-6xl">Web Dev</div>
        <FaStarOfLife />
      </div>
      <div className=" flex-shrink-0 flex justify-around min-w-full gap-12 animate-scroll items-center">
        <div className="text-4xl md:text-6xl">App Design</div> <FaStarOfLife />
        <div className="text-4xl md:text-6xl">Web Design</div> <FaStarOfLife />
        <div className="text-4xl md:text-6xl">UI/UX Design</div>
        <FaStarOfLife />
        <div className="text-4xl md:text-6xl">Web Dev</div>
        <FaStarOfLife />
      </div>
    </div>
  );
};

export default Marquee;
//   <>
// <div className="marquee flex gap-4 overflow-hidden relative bg-primary my-8 py-8">
//         <div className=" flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
//           <div className="text-4xl md:text-6xl">{marqueeName}</div>
//           <div className="text-4xl md:text-6xl">{marqueeName}</div>
//           <div className="text-4xl md:text-6xl">{marqueeName}</div>

//         </div>
//         <div className=" flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
//         <div className=" ">{marqueeName}</div>
//           <div className=" ">{marqueeName}</div>
//           <div className=" ">{marqueeName}</div>
//         </div>
//       </div>
//   </>
