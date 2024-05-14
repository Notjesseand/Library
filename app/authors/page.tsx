"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GoCircle, GoCheckCircle } from "react-icons/go";
import { favourites } from "@/app/data";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import Link from "next/link";
import Footer from "./footer";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import Header from "@/components/header";
import { fetchBookById } from "@/components/fetchBooks";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import imgplace from "@/public/booklogo.png";

export default function Page() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [interests, setInterests] = useState<any>();
  const [open, setOpen] = useState(false);
  const user = auth.currentUser;
  const [searchData, setDataSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const toggle = () => {
    setOpen(!open);
  };

  // handle auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          // Get the user document from the "users" collection
          const userDoc = await getDoc(doc(db, "interests", userAuth.uid));

          if (userDoc.exists()) {
            // Access the "name" field from the document data
            const fetchedUserName = userDoc.data().name;
            setUserName(fetchedUserName);
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User not authenticated");
        // router.push("/login");
      }

      setLoading(false);
      // fetchInterests();
    });

    // Cleanup function to unsubscribe from the auth state listener
    return () => unsubscribe();
  }, [db]);

  // fetching user interests from firebase
  useEffect(() => {
    async function fetchInterests() {
      try {
        // @ts-ignore
        const docSnap = await getDoc(doc(db, "interests", user.uid));
        if (docSnap.exists()) {
          const interestsData = docSnap.data();
          // @ts-ignore
          setInterests(interestsData);
        } else {
          console.log("No interests document found for the user");
        }
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    }

    if (user && user.uid) {
      fetchInterests();
    }
  }, [user]);

  console.log(interests);
  // fetching books based on interests
  // const interestsString =
  //   interests && interests.interests && interests.interests.join(",");

  const interestsString = interests?.interests.join(",");

  console.log(interestsString);

  useEffect(() => {
    const searchBook = () => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${interestsString}&relevance=true&key=AIzaSyC6vXLjqb1qYL49z7ZB4Rt4MZcDwTl15uI&maxResults=40`
        )
        .then((res) => setDataSearch(res.data.items))
        .catch((err) => console.log(err));
    };
    searchBook();
  }, [searchQuery, interestsString]);

  console.log(searchData);

  if (loading) {
    return (
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <Spinner className="spinner text-5xl h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="pb-14 pt-7">
      <div className="grid grid-cols-3 pt-6 px-4 sm:px-16 relative">
        <div>
          <div className="md:block">
            <Sidebar />
          </div>
        </div>
        <div className="w-full">
          <p className="font-montserrat font-semibold text-2xl gradient-text sm:text-3xl text-center ">
            Browse
          </p>
          {/* <img src="nacos.png" alt="" className="h-20 flex mx-auto" /> */}
        </div>
        <div className="flex justify-end">
          {open ? (
            <RxCross2
              onClick={toggle}
              className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500 "
            />
          ) : (
            <IoSearchOutline
              onClick={toggle}
              className="text-3xl cursor-pointer hover:text-orange-600 hover:text-4xl transition-all duration-500  "
            />
          )}
        </div>
      </div>
      {/* searchbar */}
      {open && (
        <div className="absolute w-full mt-5 justify-center z-50 h-full backdrop-blur-lg mx-auto">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-[5/6] mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800 justify-center "
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                // onClick={toggle}
              />
            </div>
          </div>
          {searchQuery !== "" &&
            //@ts-ignore
            (searchBook && searchBook.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-10">
                {searchData?.map((item: any, index) => (
                  // grid
                  <div key={index}>
                    <Link
                      href={`/browse/google/${item.id}`}
                      className="flex h-44 sm:h-56 bg-gray- bg-cover w-36 sm:w-44 bg-center mx-auto rounded bg-purple-100"
                      style={{
                        backgroundImage: `url(${
                          item?.volumeInfo?.imageLinks?.thumbnail || imgplace
                        })`,
                      }}
                    ></Link>
                    <Link href={`/browse/google/${item.id}`}>
                      <p className="mt-3 capitalize text-xl text-center">
                        {item?.volumeInfo?.title}
                      </p>
                      <p className="capitalize text-base text-gray-400 text-center">
                        {item?.volumeInfo?.authors}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="inline justify-center">
                <Spinner className="flex mx-auto justify-center my-4 text-4xl" />
                <p className="flex text-center justify-center text-lg ">
                  no books with{" "}
                  <span className="px-1.5      "> {searchQuery} </span> found
                </p>
              </div>
            ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center pt-20">
        {searchData?.map((item: any, index: number) => (
          <div
            className="inline justify-center items-center text-center"
            key={index}
          >
            <Link
              href={`/browse/google/${item.id}`}
              className="text-2xl gradient-text py-1 mb-2 justify-center inline-flex text-center"
            >
              {item.volumeInfo.authors}
            </Link>
            <img
              src={item?.volumeInfo?.imageLinks?.thumbnail || imgplace}
              className="w-1/2 aspect-[2/3] object-cover rounded mx-auto"
              alt=""
            />
            <Link href={`/browse/google/${item.id}`} className="py-2">
              {item.volumeInfo.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
