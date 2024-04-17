"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import firebase from "firebase/app";

interface Author {
  books: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  followers: string;
}

const AuthorsCarousel = () => {
  const [fetchedAuthors, setFetchedAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsCollection = collection(db, "Authors");
        const querySnapshot = await getDocs(authorsCollection);
        const fetchedAuthorsData: Author[] = [];
        querySnapshot.forEach((doc) => {
          const authorData = doc.data() as Author;
          fetchedAuthorsData.push(authorData);
        });
        setFetchedAuthors(fetchedAuthorsData);
      } catch (error) {
        console.error("Error fetching authors data:", error);
      }
    };

    fetchData();
  }, []);

  const selectedAuthors = fetchedAuthors.map((item, index) => ({
    ...item,
    id: item.category,
  }));

  return (
    <Swiper
      spaceBetween={22}
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
      {fetchedAuthors.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex mt-12 cursor-pointer text-center backdrop-blur-sm rounded-full"
        >
          <Link
            href={`/author/${String(item.author)
              .toLowerCase()
              .replace(/\s+/g, "_")}`}
            className="aspect-square flex sm:h-56 bg-gray-500 bg-cover w-11/12 sm:w-56 bg-center mx-auto rounded-full"
            style={{ backgroundImage: `url(${item.image})` }}
          ></Link>
          <Link
            href={`/author/${String(item.author)
              .toLowerCase()
              .replace(/\s+/g, "_")}`}
            className="mt-3 capitalize text-base font-custom md:text-xl"
          >
            {item.author}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AuthorsCarousel;
