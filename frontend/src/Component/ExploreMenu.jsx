import React from 'react'
import { menu_list } from '../assets/assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 px-6 py-8" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-3xl md:text-4xl">
        Explore our menu
      </h1>

      <p className="
        max-w-[60%] text-gray-500 text-sm md:text-base 
        1050:max-w-full 1050:text-[14px]
      ">
        Choose from diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate dining experience,
        one delicious meal at a time.
      </p>

      <div className="flex gap-7 overflow-x-auto scrollbar-none mt-5 py-2">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className="flex flex-col items-center min-w-[80px] cursor-pointer"
          >
            <img
              className={`
                w-[7.5vw] min-w-[80px] rounded-full 
                transition-transform duration-200 hover:scale-105
                ${category === item.menu_name ? "ring-4 ring-orange-500 scale-110" : ""}
              `}
              src={item.menu_image}
              alt=""
            />

            <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] text-center">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="m-2 h-0 bg-gray-200" />
    </div>
  );
};

export default ExploreMenu;

