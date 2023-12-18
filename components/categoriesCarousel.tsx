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

import { categories } from "../app/data";

const categoriesCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={3}

      breakpoints={{
        // when window width is >= 768px
        308: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      // pagination={{ type: "progressbar" }}
      modules={[Autoplay, Pagination]}
      className="mySwiper  font-open px-14 sm:px-24"
    >
      {categories.map((item, index) => (
        <SwiperSlide
          key={index}
          className=" px-24 mt-6 sm:mt-12 h-[40px] inline-block cursor-pointer  text-white text-center w-full  rounded-sm    "
          style={{ backgroundImage: "/drama.jpg" }}
        >
          <div className="relative group h-44 sm:h-56 bg-gray-500 bg-cover w-44 sm:w-5/6 bg-center mx-auto rounded overflow-hidden transition-opacity duration-300">
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black h-full m-0 p-0 opacity-60"></div> */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-[#363636] to-black hover:opacity-60 opacity-70">
              <p className="mt-3 capitalize text-xl sm:text-2xl font-open">
                {item.category}
              </p>
            </div>
            <div className="absolute inset-0  transition-opacity">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          </div>

          {/* <p className="capitalize text-base text-gray-400">{item.author}</p> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default categoriesCarousel;
