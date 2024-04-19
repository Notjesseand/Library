import React from "react";
import Link from "next/link";

export default function desktopFooter() {
  return (
    <div className=" py-11  w-full border-t-[#527853] bg-[#0f1215] border-t-2 mt-28 px-20 text-lg hidden md:block">
      <div className="flex">
        <div className="space-y-1.5 gradient-text font-poppins font-semibold">
          <Link href="/authors" className="flex font-custom">
            Authors
          </Link>
          <Link href="/books" className="flex">
            Books
          </Link>{" "}
          <Link href="/library" className="flex">
            Library
          </Link>
          <Link href="/profile" className="flex">
            Profile
          </Link>
        </div>
        <div className="space-y-1.5  ml-24 font-poppins font-semibold gradient-text">
          <Link href="/categories" className="flex">
            Categories
          </Link>
          <Link href="/favourites" className="flex">
            Favourites
          </Link>{" "}
          <Link href="/interests" className="flex">
            Interests
          </Link>
          <Link href="/settings" className="flex">
            Settings
          </Link>
        </div>
      </div>

      <p className=" flex text-center justify-center pt-1">
        {" "}
        &copy;Jesse&apos;s Digital Library
      </p>
    </div>
  );
}
