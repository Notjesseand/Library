"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import FeaturedBooksCarousel from "@/components/featuredBooksCarousel";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import Footer from "../../footer";
import { favourites } from "@/app/data";
import { useToast } from "@/components/ui/use-toast";
import { fetchBookById } from "@/components/fetchBooks";
import { Spinner } from "@material-tailwind/react";
import BrowseCarousel2 from "@/components/browseCarousel2";

const PageById = ({ params }: { params: any }) => {
  console.log(params);
  // const favouritesWithId = favourites.map((item, index) => ({
  //   ...item,
  //   id: item.title.toLowerCase().replace(/\s+/g, "_"),
  // }));
  // const filteredFavourites = favouritesWithId.filter(
  //   (item) => item.id === params.id
  // );

  // API data
  const [bookData, setBookData] = useState<any>(null);

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

  console.log(bookData);

  const imageurl = bookData && bookData[0].thumbnail;
  const author = bookData && bookData[0].authors;
  const tags = "";
  const description = bookData && bookData[0].description

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
      <div className="h-full flex justify-center items-center">
        <Spinner className="mx-auto mt-[22%]" />
      </div>
    );
  }
  return (
    <div className="pb-20">
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
            {bookData[0].title}
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
        <div className="pt-4 flex justify-center gap-3 ;sm:gap-10">
          {/* read button */}
          <button
            className="text-white  md:text-lg px-12 sm:px-20 py-3 rounded bg-[#527853] hover:bg-transparent border-2 border-[#527853]"
            onClick={toggleBook}
          >
            Read{" "}
          </button>

          <button
            className="text-base hover:text-white md:text-lg px-12 sm:px-20 py-3 rounded hover:bg-[#527853] border-2 border-[#527853]"
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
            <img src={imageurl} className="h-24 w-24 rounded-full bg-contain" alt="" />

            {/* name and followers */}
            <div className="flex flex-col justify-center pl-3 font-montserrat">
              {/* author name */}
              <p className=" text-lg md:text-2xl">{author}</p>
              <p>70k followers</p>
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
          <p className="text-base">
            {description}
          </p>
          {/* tags */}
          <div className="flex gap-2 sm:gap-4 pt-5">
            {/* {tags.map((item, index) => (
              <button
                className="bg-[#183D3D] rounded-full px-6 py-1 md:py-1.5 text-white border-2 border-[#183d3d] hover:bg-transparent hover:border-deep-orange-600"
                key={index}
              >
                {item}
              </button>
            ))} */}
          </div>

          {/* featuredbooks */}
          <p className="text-center text-lg mt-10">More Books</p>

          <BrowseCarousel2/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageById;
