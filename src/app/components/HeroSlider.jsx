import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/heroslider.css";
// import required modules
import { Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      <SwiperSlide>
        {" "}
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center  leading-[100%] font-medium text-center text-white">
            Design &
          </div>
        </div>
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center leading-[100%] font-medium text-center text-white">
            Funcionlity
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center  leading-[100%] font-medium text-center text-white">
            Design &
          </div>
        </div>
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center leading-[100%] font-medium text-center text-white">
            Funcionlity
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center leading-[100%] font-medium text-center text-white">
            Design &
          </div>
        </div>
        <div className="heroclip z-10">
          <div className=" z-10 text -translate-y-[150%] text-7xl md:text-8xl lg:text-9xl flex items-center justify-center leading-[100%] font-medium text-center text-white">
            Funcionlity
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
