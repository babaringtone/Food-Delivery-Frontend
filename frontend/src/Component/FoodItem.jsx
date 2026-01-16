import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const [visible, setVisible] = useState(false);
  const {cartItems,addCart,removeCart} = useContext(StoreContext);

  useEffect(() => {
    setVisible(true); // fade-in on mount
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="w-full mx-auto rounded-[15px] shadow-md transition-transform duration-300 hover:scale-[1.02] relative">
        
        {/* Image */}
        <div className="relative">
          <img
            className="w-full rounded-t-[15px] object-cover"
            src={image}
            alt={name}
          />

          {/* Add Button / Counter */}
          {!cartItems[id] ? (
            <img
              className="w-[35px] h-[35px] absolute bottom-[15px] right-[15px] rounded-full cursor-pointer"
              onClick={() => addCart(id)}
              src={assets.add_icon_white}
              alt="add"
            />
          ) : (
            <div className="absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-full bg-white shadow">
              <img
                className="w-[30px] cursor-pointer"
                src={assets.remove_icon_red}
                alt="remove"
                onClick={() => removeCart(id)}
              />
              <p className="text-sm font-medium">{cartItems[id]}</p>
              <img
                className="w-[30px] cursor-pointer"
                src={assets.add_icon_green}
                alt="add"
                onClick={() => addCart(id)}
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[20px] font-medium">{name}</p>
            <img className="w-[70px]" src={assets.rating_starts} alt="rating" />
          </div>

          <p className="text-[#676767] text-[12px]">{description}</p>

          <p className="text-[22px] font-medium text-[tomato] mt-3">
            ₹{price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
