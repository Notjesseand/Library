"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import FeaturedBooksCarousel from "@/components/featuredBooksCarousel";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import DesktopFooter from "@/components/desktopFooter";
import { favourites } from "@/app/data";
import { useToast } from "@/components/ui/use-toast";
import { fetchBookById } from "@/components/fetchBooks";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { google } from "googleapis";
import DynamicCarousel from "@/components/dynamicCarousel";

const PageById = ({ params }: { params: any }) => {
  console.log(params);

  // Fetching data about the selected book by ID
  const [bookData, setBookData] = useState<any>(null);
  const [books, setBooks] = useState([]);
  const [bookCategory, setBookCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const book = await fetchBookById(params.id);
        setBookData(book);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchData();
  }, [params.id]);

  // deconstructing data from the API
  const id = bookData && bookData.length > 0 && bookData[0].id;
  const author = bookData && bookData.length > 0 && bookData[0].authors;
  const description =
    bookData && bookData.length > 0 && bookData[0].description;
  const publishedDate =
    bookData && bookData.length > 0 && bookData[0].publishedDate;
  const category = bookData && bookData.length > 0 && bookData[0].categories;
  const pageCount = bookData && bookData.length > 0 && bookData[0].pageCount;
  const status = bookData && bookData.length > 0 && bookData[0].saleInfo;
  const title = bookData && bookData.length > 0 && bookData[0].title;

  console.log("this is the" + bookData);

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

  console.log(bookCategory);

  const imageurl = bookData && bookData.length > 0 && bookData[0].thumbnail;

  const [following, setFollowing] = useState(false);
  const toggle = () => {
    setFollowing(!following);
  };

  const [addToLibrary, setAddToLibrary] = useState(false);
  const toggleAddToLib = () => {
    setAddToLibrary(!addToLibrary);
    console.log("tezting");
  };

  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const toggleBook = () => {
    setOpen(!open);
  };

  if (!bookData) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner className="mx-auto text-3xl h-20" />
      </div>
    );
  }
  return (
    <div className="">
      {open && (
        <iframe
          title="PDF Viewer"
          // src={filteredFavourites[0].url}
          className="h-screen w-screen absolute z-50 top-0 "
        />
      )}

      <div
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageurl})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* blur */}
        <div className="backdrop-blur-2xl pb-6 relative">
          {/* navigation */}
          <div className="text-center flex justify-between pt-5 md:pt-9 z-50 ">
            <div className="sm:pl-10 pl-3">
              <Link href="/browse">
                <IoIosArrowBack className="text-4xl cursor-pointer" />
              </Link>
            </div>

            <div className="flex justify-end sm:pr-11 pr-4 text-white">
              <Sidebar />
            </div>
          </div>

          {/* title */}
          <div className="text-2xl font-custom pt-10 px-5 text-center z-50">
            {title}
          </div>

          {/* Book Image */}
          <div
            className="cursor-pointer flex mx-auto h-64 w-52 bg-center mt-4 rounded bg-cover"
            style={{ backgroundImage: `url(${imageurl})` }}
          ></div>

          {/* Author */}
          <p className="text-2xl text-center mt-1"> by {author} </p>
        </div>
      </div>

      {/* end of header */}
      <div className="">
        {/* buttons */}
        <div className="pt-4 flex justify-center gap-2 px-3 sm:gap-10">
          {/* read button */}

          {status == true ? (
            <button
              className="text-white  md:text-lg px-12 sm:px-20 py-3 rounded bg-[#527853] hover:bg-transparent border-2 border-[#527853]"
              onClick={toggleBook}
            >
              Read{" "}
            </button>
          ) : (
            <span className="flex items-center text-center">
              Unavailable {`(Not an Ebook)`}
            </span>
          )}

          <button
            className="text-base hover:text-white md:text-lg px-4 sm:px-20 py-3 rounded hover:bg-[#527853] border-2 border-[#527853]"
            onClick={() => {
              toggleAddToLib;
              toast({
                title: "Success",
                description: "Added to Library",
              });
            }}
          >
            {addToLibrary ? "Remove from Library" : "Add to Library"}
          </button>
        </div>
        {/* Metadata */}

        <hr className="mt-5" />
        <div className="flex justify-between pt-3 px-8 md:px-24 items-center">
          <div className="flex ">
            {/* <div className="h-24 w-24 rounded-full bg-[url(/dior-profile.png)] bg-contain"></div> */}
            <img
              src={imageurl}
              className="h-24 w-24 rounded-full bg-contain"
              alt=""
            />

            {/* name and followers */}
            <div className="flex flex-col justify-center pl-3 font-montserrat">
              {/* author name */}
              <p className=" text-lg md:text-2xl">{author}</p>
              {/* <p>70k followers</p> */}
            </div>
          </div>
          <button
            onClick={toggle}
            className="text-white justify-end px-6 py-2 bg-[#527853] md:hover:border-deep-orange-500 border-2 hover:bg-transparent border-transparent  rounded-md"
          >
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>
        <div className="px-6 md:px-24 pt-4">
          <p className="font-bold text-lg">Summary</p>
          <p className="text-base">{description}</p>
          {/* tags */}
          <div className=" gap-2 sm:gap-4 pt-5">
            <p className="text-lg">
              {" "}
              <span className="border-b border-[#527853] mr-2">
                {" "}
                Published on:{" "}
              </span>
              {publishedDate}
            </p>
            <p className="text-lg">
              <span className="border-b border-[#527853] mr-2"> Category:</span>
              {category}
            </p>
            <p className="text-lg">
              <span className="border-b border-[#527853] mr-2"> Pages:</span>
              {pageCount}
            </p>
            <p className="text-lg">
              <span className="border-b border-[#527853] mr-2"> Status:</span>
              {status == true ? (
                <span>Available {`(Ebook)`}</span>
              ) : (
                <span>Unavailable {`(Not an Ebook)`}</span>
              )}
            </p>
          </div>

          {/* featuredbooks */}
          <p className="text-center text-lg mt-10">More {category} Books</p>
          <DynamicCarousel variable={category} />
        </div>
      </div>
      <DesktopFooter />
    </div>
  );
};

export default PageById;
