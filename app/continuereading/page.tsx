"use client";
import React from "react";
import { FaBell } from "react-icons/fa6";
import { PiMagnifyingGlass } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "@material-tailwind/react";

export default function Page() {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check if localStorage is available (for server-side rendering)
    setLoading(true);
    if (typeof window !== "undefined") {
      // Access localStorage
      const storedUsername = localStorage.getItem("username");

      // Update state with the username
      setUsername(storedUsername);

      if (!storedUsername) {
        router.push("/signup");
      }
    }
    setLoading(false)
  }, [router]);

  const [read, setRead] = useState(false);

  const toggle = () => {
    setRead(!read);
  };

  const pdfUrl = "/neck.pdf";
  if (loading) {
    return (
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <Spinner className="spinner text-5xl h-12 w-12" />
      </div>
    );
  }
  return (
    <>
      {username ? (
        <div className="">
          {/* navbar */}{" "}
          <div className="flex justify-between px-7 sm:px-16 pt-8">
            <FaBell className="text-3xl hover:text-orange-600 cursor-pointer" />{" "}
            <div className="flex space-x-6">
              {" "}
              <PiMagnifyingGlass className="text-3xl hover:text-orange-600 cursor-pointer" />{" "}
              <AiOutlineBars className="text-3xl hover:text-orange-600 cursor-pointer" />{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <p className="font-custom px-14 mt-9 text-lg">Hi, {username}</p>{" "}
            <p className="font-custom px-14 gont-bold text-4xl">
              Continue reading
            </p>{" "}
          </div>
          <button
            className="px-8 py-3 font-custom rounded-md bg-[#153a1d] text-white mx-14 mt-6"
            onClick={toggle}
          >
            click me
          </button>{" "}
          {/* {read ? (
//         <p>jajajja</p>
//       ) : (
//         <iframe
//           src={`https://docs.google.com/gview?url=${encodeURIComponent(
//             window.location.origin + pdfUrl
//           )}&embedded=true`}
//           width="100%"
//           height="500px"
//           title="Google Docs Viewer"
//         />
//       )} */}{" "}
        </div>
      ) : (
        // router.push("/signup")
        ""
      )}
    </>
  );
}
