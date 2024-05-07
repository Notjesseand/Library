"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchBookById } from "./fetchBooks";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PDFViewer from "./viewPdf";
import Link from "next/link";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { favourites } from "../app/data";

export default function BrowseCarousel2() {
  const [open, setOpen] = useState(true);

  const pdf = ["/neck.pdf"];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const search = "YOUR_SEARCH_QUERY"; // Replace with your search query
    fetchBookById(search)
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

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
        {books.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" mt-12 h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm   relative "
            style={{ backgroundImage: "/drama.jpg" }}
          >
            <div
              // onClick={() => toggle(item.url)}
              className="h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-600"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            ></div>
            <Link href={`/browse/google/${item.id}`}>
              <p className="mt-3 capitalize text-xl">{item.title}</p>
              <p className="capitalize text-base text-gray-400">
                {item.authors}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
