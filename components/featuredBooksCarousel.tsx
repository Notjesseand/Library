"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PDFViewer from "./viewPdf";
import Link from "next/link";
import { FeaturedBooks } from "../app/data";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { favourites } from "../app/data";
import { url } from "inspector";

const FeaturedBooksCarousel = () => {
  const [open, setOpen] = useState(true);

  const pdf = ["/neck.pdf"];

  const img =
    "https://res.cloudinary.com/dv62ty87r/image/upload/v1715847628/Pdf_File_Vector_Hd_Images_Pdf_File_Document_Icon_Document_Icons_File_Icons_Pdf_PNG_Image_For_Free_Download_foijxg.jpg";

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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 lg:grid-cols-4 px-16 gap-14 mt-8">
        {FeaturedBooks.map((item, index) => (
          <div
            key={index}
            className="h-full text-center justify-center inline "
          >
            <Link
              className="flex h-56 aspect-[3/4] rounded-lg bg-pink-300 bg-cover mx-auto bg-center"
              href={item.link}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Download File */}
            </Link>
            <p className="mt-2 text-lg md:text-xl gradient-text font-custom font-semibold">
              {item.title}
            </p>
            <p className="text-center text-gray-400">{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooksCarousel;
