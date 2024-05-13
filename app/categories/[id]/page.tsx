import React from "react";
import { categories } from "@/app/data";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { favourites } from "@/app/data";
import { useToast } from "@/components/ui/use-toast";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Header from "@/components/header";
import { Spinner } from "@material-tailwind/react";

async function getData(category: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&orderBy=relevance&key=AIzaSyC6vXLjqb1qYL49z7ZB4Rt4MZcDwTl15uI&maxResults=40`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Failed to fetch data");
    return <div>Error</div>;
  }

  return res.json();
}

export default async function Page({ params }: any) {
  const data = await getData(params.id);
  console.log(params);

  return (
    <div className="pt-9 md:pt-12">
      <Header />
      <p className="text-2xl text-center capitalize pt-4 md:pt-5 gradient-text font-semibold font-custom">
        {params.id}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-8 md:gap-y-12  pt-12 md:pt-20 px-3">
        {data &&
          data?.items.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="text-white justify-center w-4/5 inline mx-auto"
              >
                <Link
                  href={`/browse/google/${item.id}`}
                  className="aspect-[3/4] justify-center w-full rounded bg-purple-300 flex mx-auto  bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url(${item.volumeInfo.imageLinks?.thumbnail})`,
                  }}
                ></Link>
                <Link
                  href={`/browse/google/${item.id}`}
                  className="text-center flex justify-center text-lg"
                >
                  {item.volumeInfo.title}
                </Link>
                <Link
                  href={`/browse/google/${item.id}`}
                  className="text-center flex justify-center gradient-text font-custom text-lg font-medium   "
                >
                  {item.volumeInfo.authors}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
