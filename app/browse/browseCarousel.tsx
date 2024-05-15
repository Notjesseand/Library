"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchBookById } from "@/components/fetchBooks";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Spinner } from "@material-tailwind/react";

export default function BrowseCarousel({ interests }: { interests: any }) {
  const [books, setBooks] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (interests !== undefined) {
      const search = interests?.interests;
      fetchBookById(search)
        .then((data) => {
          setBooks(data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [interests]);

  useEffect(() => {
    if (books) {
      const halfIndex = Math.ceil(books.length / 2);
      const firstHalf = books.slice(0, halfIndex);
      const secondHalf = books.slice(halfIndex);
      setFirstHalf(firstHalf);
      setSecondHalf(secondHalf);
      setLoading(false);
    }
  }, [books]);

  return (
    <div className="">
      {/* {loading && (
        <div className="flex justify-center h-full w-screen absolute bg-white z-50 inset-0">
          <Spinner className="animate-spin text-orange-600 h-14 w-14 inset-0 mt-[40vh]" />
        </div>
      )} */}

      <Swiper
        spaceBetween={30}
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
        {firstHalf?.map((item: any, index) => (
          <SwiperSlide
            key={index}
            className=" mt-12 h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm  relative "
            style={{ backgroundImage: "/drama.jpg" }}
          >
            <Link
              //@ts-ignore
              href={`/browse/google/${item.id}`}
              className="flex h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-600"
              //@ts-ignore
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            ></Link>

            <Link
              //@ts-ignore
              href={`/browse/google/${item.id}`}
            >
              <p
                //@ts-ignore
                className="mt-3 capitalize text-xl"
              >
                {item.title.length > 30
                  ? `${item.title.substring(0, 30)}...`
                  : item.title}
              </p>
              <p
                //@ts-ignore
                className="capitalize text-base text-gray-400"
              >
                {item.authors}
              </p>
              {/* jajaja */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* second array */}
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
        className="mySwiper flex font-open gap-0 mt-7"
      >
        {secondHalf?.map((item: any, index) => (
          <SwiperSlide
            key={index}
            className=" h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm  relative "
            style={{ backgroundImage: "/drama.jpg" }}
          >
            <Link
              //@ts-ignore
              href={`/browse/google/${item.id}`}
              className="flex h-44 sm:h-56 bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-600"
              //@ts-ignore
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            ></Link>

            <Link
              //@ts-ignore
              href={`/browse/google/${item.id}`}
            >
              <p
                //@ts-ignore
                className="mt-3 capitalize text-xl"
              >
                {item.title.length > 30
                  ? `${item.title.substring(0, 30)}...`
                  : item.title}
              </p>
              <p
                //@ts-ignore
                className="capitalize text-base text-gray-400"
              >
                {item.authors}
              </p>
              {/* jajaja */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
