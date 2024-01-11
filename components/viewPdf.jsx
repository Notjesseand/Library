"use client";
import React, { useState, useEffect } from "react";
// import { storage } from "../../config/firebase";
import FeaturedBooksCarousel from "../components/featuredBooksCarousel"

const PDFViewer = () => {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen justify-center">
     


      
        <iframe
          title="PDF Viewer"
          src={"/neck.pdf"}
          className="h-screen w-screen bg-pink-700"
        />
    </div>
  );
};

export default PDFViewer;

