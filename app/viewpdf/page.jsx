"use client"
import React, { useState, useEffect } from "react";
import { storage } from "../../config/firebase";

const PDFViewer = () => {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

 

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen justify-center">

      <input type="file" name="book" id="book" />  
      <button
        className="px-10 py-3 text-lg font-custom rounded-md bg-[#234658] flex mx-auto mt-[50vh] absolute"
        onClick={toggle}
      >
        {open ? "Close" : "Open"}
      </button>

      {open &&(
        <iframe title="PDF Viewer" src={"/neck.pdf"} className="h-screen w-screen" />
      )}
    </div>
  );
};

export default PDFViewer;

// import React, { useState, useEffect } from "react";
// import { storage } from "../../config/firebase";

// const PDFViewer = () => {
//   const [open, setOpen] = useState(false);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const toggle = () => {
//     setOpen(!open);
//   };

//   const uploadPdf = async (file) => {
//     const storageRef = storage.refFromURL(
//       "gs://digital-library-baa5a.appspot.com"
//     );
//     const fileRef = storageRef.child("neck.pdf");
//     await fileRef.put(file);
//   };

//   const getPdfUrl = async () => {
//     const storageRef = storage.refFromURL(
//       "gs://digital-library-baa5a.appspot.com"
//     );
//     const url = await storageRef.child("neck.pdf").getDownloadURL();
//     setPdfUrl(url);
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     await uploadPdf(file);
//     getPdfUrl();
//   };

//   return (
//     <div className="h-screen justify-center">
//       <input type="file" name="book" id="book" onChange={handleFileChange} />
//       <button
//         className="px-10 py-3 text-lg font-custom rounded-md bg-[#234658] flex mx-auto mt-[50vh] absolute"
//         onClick={toggle}
//       >
//         {open ? "Close" : "Open"}
//       </button>

//       {open && (
//         <iframe title="PDF Viewer" src={pdfUrl} className="h-screen w-screen" />
//       )}
//     </div>
//   );
// };

// export default PDFViewer;