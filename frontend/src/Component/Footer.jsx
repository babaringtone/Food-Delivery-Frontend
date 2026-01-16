import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      className="
        bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5
        px-[8vw] pt-20 pb-10 mt-24
      "
      id="footer"
    >
      {/* Content Section */}
      <div
        className="
          w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10
          750:flex 750:flex-col 750:gap-[35px]
        "
      >
        {/* Left Section */}
        <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 text-center md:text-left items-center md:items-start">
          <img src={assets.logo} alt="logo" className="w-[150px]" />
          <p className="leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ut
            architecto, illum neque voluptatum sequi adipisci id cum voluptate
            consequatur recusandae?
          </p>

          <div className="flex gap-4 mt-2">
            <img src={assets.facebook_icon} alt="fb" className="w-10 cursor-pointer" />
            <img src={assets.twitter_icon} alt="twitter" className="w-10 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="linkedin" className="w-10 cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-white text-lg font-semibold">COMPANY</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About us</li>
            <li className="cursor-pointer hover:text-white">Delivery</li>
            <li className="cursor-pointer hover:text-white">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-white text-lg font-semibold">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white">+1-213-672-8905</li>
            <li className="cursor-pointer hover:text-white">babaringtone7@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-500 my-5" />

      {/* Copyright */}
      <p className="text-sm 750:text-center">
        © 2025 Tomato.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
