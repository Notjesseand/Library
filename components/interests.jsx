// "use client";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { TiTick } from "react-icons/ti";
// import { categories } from "@/app/data";

// import React, { useState } from "react";

// const Interests = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
  

//   const handleToggle = (value) => {
//     // Check if the item is already selected
//     if (selectedItems.includes(value)) {
//       // If selected, remove it
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter((item) => item !== value)
//       );
//     } else {
//       // If not selected, add it
//       setSelectedItems((prevSelected) => [...prevSelected, value]);
//     }
//   };
//   console.log(selectedItems);

//   return (
//     <div>
//       <ToggleGroup
//         type="multiple"
//         className="mt-10 grid sm:grid-cols-4 justify-between gap-y-14 text-xl"
//       >
//         {categories.map((category, index) => (
//           <div key={index} className=" mx-auto justify-center">
//             <ToggleGroupItem
//               value={category}
//               className={`relative h-72 - mx-auto w-72 rounded-full  bg-cover hover:opacity-80 `}
//               onClick={() => handleToggle(category.category)}
//               style={{ backgroundImage: `url(${category.image})` }}
//             >
//               {/* overlay */}
//               {selectedItems.includes(category.category) && (
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black m-0 p-0 rounded-full opacity-50 flex items-center justify-center">
//                   <TiTick className="text-5xl text-[#5fdf9a] opacity-70 absolute" />
//                 </div>
//               )}
//             </ToggleGroupItem>
//             <div className=" capitalize text-center">{category.category}</div>
//           </div>
//         ))}
//         {/* Add more items as needed */}
//       </ToggleGroup>
//     </div>
//   );
// };

// export default Interests;
"use client"
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TiTick } from "react-icons/ti";
import { categories } from "@/app/data";

const Interests = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);

  const handleToggle = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, value]);
    }
  };

  return (
    <div>
      <ToggleGroup
        type="multiple"
        className="mt-10 grid sm:grid-cols-4 grid-cols-2 justify-between gap-y-14 text-xl px-2"
      >
        {categories.slice(0, itemsToShow).map((category, index) => (
          <div key={index} className=" mx-auto justify-center w-full items-center text-center">
            <ToggleGroupItem
              value={category}
              className={`relative sm:h-72  h-44 w-44 mx-auto sm:w-72 rounded-full  bg-cover hover:opacity-80 `}
              onClick={() => handleToggle(category.category)}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              {selectedItems.includes(category.category) && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#131414] to-black m-0 p-0 rounded-full opacity-50 flex items-center justify-center">
                  <TiTick className="text-5xl text-[#5fdf9a] opacity-70 absolute" />
                </div>
              )}
            </ToggleGroupItem>
            <div className=" capitalize text-center">{category.category}</div>
          </div>
        ))}
      </ToggleGroup>

      {itemsToShow < categories.length && (
        <button
          onClick={() => setItemsToShow((prev) => prev + 8)}
          className="text-black bg-white mt-14 cursor-pointer px-10 mx-auto flex text-lg border-gray-500 border py-3 rounded-lg"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Interests;
