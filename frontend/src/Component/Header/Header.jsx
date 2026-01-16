import React, { useState, useEffect } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        relative w-full h-[34vw] my-[30px] mx-auto bg-no-repeat bg-cover 
        transition-opacity duration-1000
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div
        className={`
          absolute flex flex-col items-start gap-[1.5vw]
          bottom-[10%] left-[6vw]
          transition-opacity duration-2000
          max-w-[50%]
          1050:max-w-[45%]
          750:max-w-[5%]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        <h2 className="font-medium text-white text-[max(4.5vw,22px)] leading-tight">
          Order your favourite food here
        </h2>

        <p className="text-white text-[1vw] leading-relaxed 750:hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>

        <button
          className="
            bg-white text-[#747474] font-medium
            px-[2.3vw] py-[1vw] rounded-full
            text-[max(1vw,13px)] 
            shadow-md hover:shadow-lg transition
            750:px-[4vw] 750:py-[2vw]
          "
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

