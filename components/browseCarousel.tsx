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

import { favourites } from "../app/data";



const BrowseCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={3}
      breakpoints={{
        350:{
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // pagination={{ type: "progressbar" }}
      modules={[Autoplay, Pagination]}
      className="mySwiper flex font-open gap-0"
    >
      {favourites.map((item, index) => (
        <SwiperSlide
          key={index}
          className=" mt-12 h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm    "
          style={{ backgroundImage: "/drama.jpg" }}
        >
          <div
            className="h-44 sm:h-56 bg-gray-500 bg-cover w-36 sm:w-44 bg-center mx-auto rounded"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <p className="mt-3 capitalize text-xl">{item.title}</p>
          <p className="capitalize text-base text-gray-400">{item.author}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrowseCarousel;
