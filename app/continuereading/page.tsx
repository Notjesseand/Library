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
    setLoading(false);
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
     
    </>
  );
}
