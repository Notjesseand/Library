"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchBookById } from "./fetchBooks";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


interface ChildProps {
  variable: [];
}

const DynamicCarousel: React.FC<ChildProps> = ({ variable }) => {

  const category = variable;

  // console.log(newVariable)
    // const [category, setCategory] = useState<[]>([]);

    console.log("yoyoyoy" + category) 

   const [bookCategory, setBookCategory] = useState([]);

  // fetching data based on categories
  useEffect(() => {
    const bookCategory = () => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=AIzaSyC6vXLjqb1qYL49z7ZB4Rt4MZcDwTl15uI&maxResults=40`
        )
        .then((res) => setBookCategory(res.data.items))
        .catch((err) => console.log(err));
    };
    bookCategory();
  }, [category]);

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
        {bookCategory?.map((item : any, index) => (
          <SwiperSlide
            key={index}
            className=" mt-12 h-[40px] inline-block cursor-pointer text-center w-full backdrop-blur-sm rounded-sm   relative "
            style={{ backgroundImage: "/drama.jpg" }}
          >
            <Link
              href={`/browse/google/${item?.id}`}
              className="flex h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-600"
              style={{
                backgroundImage: `url(${
                  item?.volumeInfo?.imageLinks?.thumbnail || "imgplace"
                })`,
              }}
            ></Link>
            <Link href={`/browse/google/${item?.id}`}>
              <p className="mt-3 capitalize text-xl">{item.volumeInfo.title}</p>
              <p className="capitalize text-base text-gray-400">
                {item.volumeInfo.authors}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DynamicCarousel;