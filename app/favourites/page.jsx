import React from 'react'
import Header from '@/components/header'
import {IoIosHeartEmpty} from 'react-icons/io'
import {IoIosHeart} from 'react-icons/io'

export default function Page() {
  return (
    <>
      <div className="w-full pt-8">
        <Header />
      </div>
      <p className="px-12 font-bold text-2xl md:text-3xl mt-7"> Favourites</p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 pt-6 gap-x-5 gap-y-6">
        {[
          { title: "The Queens Gambit", image: "drama.jpg", author: "Thugger" },
          { title: "The Queens Gambit", image: "drama.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="h-[9rem] sm:h-48 border-[2.5px] border-[#527853] rounded-lg flex p-1 backdrop-blur-2xl cursor-pointer hover:border-deep-orange-500  transition-colors duration-400   "
          >
            {/* book image */}
            <img
              className="h-full w-24 sm:w-32 object-cover rounded"
              src={item.image}
              alt="Image"
            />
            {/* book name and author */}
            <div className="flex flex-grow justify-between items-center px-2">
              <div className="text-lg pl-2">
                <p className="">{item.title}</p>
                <p className="text-[15px]">{item.author}</p>
              </div>
              <div className="flex pl-1">
                {/* {likeStates[index] ? (
                  <IoIosHeart
                    onClick={() => toggleLike(index)}
                    className="text-3xl cursor-pointer mr-2 text-red-600"
                  />
                ) : (
                  <IoIosHeartEmpty
                    onClick={() => toggleLike(index)}
                    className="text-3xl cursor-pointer mr-2"
                  />
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
