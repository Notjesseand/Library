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

import { authors } from "../data";

const authorsCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={3}
      breakpoints={{
        350: {
          slidesPerView: 3,
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
      {authors.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex mt-12   cursor-pointer text-center backdrop-blur-sm rounded-full    "
        >
          <div
            className=" aspect-square flex sm:h-56 bg-gray-500 bg-cover w-11/12 sm:w-56 bg-center mx-auto rounded-full"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <p className="mt-3 capitalize text-base font-custom md:text-xl">
            {item.author}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default authorsCarousel;
