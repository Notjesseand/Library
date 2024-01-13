import React,{useState} from 'react'
import { RxCross2 } from 'react-icons/rx';
import { IoSearchOutline } from 'react-icons/io5';

export default function Searchbar() {
   const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className='relative w-full'>

      <div className="flex justify-end pr-10">
        {open ? (
          <RxCross2
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 transition-all duration-100 "
          />
        ) : (
          <IoSearchOutline
            onClick={toggle}
            className="text-3xl cursor-pointer hover:text-orange-600 transition-all duration-100  "
          />
        )}
      </div>
      {open && (    
        <div className="absolute w-full mt-5 flex justify-center z-50 h-screen backdrop-blur-lg">
          <div className="bg-white flex bg-transparent w-11/12 sm:w-3/5 mx-auto justify-center sm:mx-16 border-2 h-14 border-blue-900 rounded-full sm:px-1 mt-8">
            <input
              type="search"
              placeholder="Title, Author, or Keywords"
              className="placeholder:normal-case  lowercase outline-none  placeholder-gray-600 placeholder:text-base text-lg py-3 sm:px-4 sm:text-xl font-montserrat mx-auto w-full px-3 sm:w-full flex  border-none rounded-full cursor:black bg-white text-gray-800"
            />
            <div className="flex-col justify-center flex items-center rounded-lg pr-2">
              <IoSearchOutline
                className="text-3xl flex flex-col justify-center text-bold font-bold cursor-pointer hover:text-orange-600 text-black"
                // onClick={toggle}
              />
            </div>
          </div>
        </div>
      )}
      </div>
    
    
  );
}
