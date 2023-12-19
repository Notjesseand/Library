import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { data } from "../app/data";

const introCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={3}
      breakpoints={{
        350: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // pagination={{ type: "progressbar" }}
      modules={[Autoplay, Pagination]}
      className="mySwiper font-open gap-0 flex"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="mt-12 sm:mt-6 cursor-pointer text-center backdrop-blur-3xl  h-[200px]  rounded-lg py-6 px-3"
        >
         
          <p className="mt-3 text-base font-custom md:text-xl">
            {item.text}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default introCarousel;
