"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PDFViewer from "@/components/viewPdf";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { favourites } from "@/app/data";

const FeaturedBooksCarousel = () => {
  const [open, setOpen] = useState(true);
//   const [url, setUrl] = useState(null);

//  const toggle = (newUrl: string) => {
//    setOpen(!open);
//    console.log(open);
//    console.log(newUrl);
//  };
  // const toggle =()=>{
  //   setOpen(!open)
  //   console.log(open)
  // }

  const pdf = ["/neck.pdf"]


  return (
    <div>
      <Swiper
        spaceBetween={30}
        // slidesPerView={3}
        breakpoints={{
          350: {
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
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{ type: "progressbar" }}
        modules={[Autoplay, Pagination]}
        className="mySwiper flex font-open gap-0"
      >
        {favourites.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" mt-12 h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm   relative "
            style={{ backgroundImage: "/drama.jpg" }}
          >
            <div
              // onClick={() => toggle(item.url)}
              className="h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-600"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p className="mt-3 capitalize text-xl">{item.title}</p>
            <p className="capitalize text-base text-gray-400">{item.author}</p>
            {/* <p className="text-base text-gray-400">{item.url}</p> */}

          </SwiperSlide>
        ))}
           
      </Swiper>

     

    
    </div>
  );
};

export default FeaturedBooksCarousel;
