import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchRef = useRef(null);
  const { getTotalCartAmount } = useContext(StoreContext);

  
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  
  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="flex items-center justify-between w-full py-5 relative">
      
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[150px] 1050:w-[140px] 900:w-[120px]"
        />
      </Link>

      <ul
        className="
          flex gap-8 font-medium font-outfit
          1050:gap-5 1050:text-[17px]
          900:gap-4 900:text-[16px]
          750:hidden
        "
      >
        {["Home", "Menu", "Mobile-app", "Contact-us"].map((item) => {
          const path = {
            Home: "/",
            Menu: "#explore-menu",
            "Mobile-app": "#app-download",
            "Contact-us": "#footer",
          };

          return (
            <a
              key={item}
              href={path[item]}
              onClick={() => setMenu(item)}
              className={`
                cursor-pointer transition 
                hover:text-[#49957e]
                hover:border-b-2 hover:border-[#49957e] hover:pb-[2px]
                ${menu === item ? "text-[#49957e] border-b-2 border-[#49957e] pb-[2px]" : ""}
              `}
            >
              {item}
            </a>
          );
        })}
      </ul>
      <div
        className="
          flex items-center gap-10
          1050:gap-[30px]
          900:gap-[20px]
        "
      >
        
        <div className="relative" ref={searchRef}>
          <img
            src={assets.search_icon}
            alt="search"
            onClick={() => setShowSearch((prev) => !prev)}
            className="
              w-6 cursor-pointer
              1050:w-[22px]
              900:w-[20px]
              hover:opacity-80 transition
            "
          />

          
          {showSearch && (
            <div
              className="
                absolute top-0 right-0
                bg-white/90 backdrop-blur-lg
                shadow-lg border border-gray-200
                rounded-xl 
                p-2 w-60
                animate-fadeSlide
              "
            >
              <input
                type="text"
                autoFocus
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
                className="
                  w-full px-3 py-2
                  rounded-lg
                  border border-gray-300
                  focus:border-[#FF6347]
                  focus:outline-none
                  text-sm
                "
              />
            </div>
          )}
        </div>

        
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="cart"
              className="w-6 cursor-pointer 1050:w-[22px] 900:w-[20px]"
            />
          </Link>
          <span
            className={
              getTotalCartAmount() > 0
                ? "absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF6347] rounded-full"
                : ""
            }
          ></span>
        </div>

        
        <button
          onClick={() => setShowLogin(true)}
          className="
            px-3 py-1 border border-[tomato] rounded-full text-[#49557e]
            hover:bg-[#fff4f2]
            transition
            1050:px-[25px] 1050:py-[8px]
            900:px-[20px] 900:py-[7px] 900:text-[15px]
          "
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
