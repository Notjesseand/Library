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

import {data} from '../app/data'

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={3}
       breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },}}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // pagination={{ type: "progressbar" }}
      modules={[Autoplay, Pagination]}
      className="mySwiper hidden md:block "
    >
      {data.map((item, index)=>(

      <SwiperSlide key={index} className="cursor-pointer flex bg-inherit text-white text-center w-full backdrop-blur-sm rounded-sm    ">
        <p className="py-6">{item.text}</p>
      </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Carousel;
