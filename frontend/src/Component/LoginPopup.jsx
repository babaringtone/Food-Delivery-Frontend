import React, { useState } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div
      className="
        fixed inset-0 bg-black/60 
        grid place-items-center 
        z-50 animate-fadeIn
      "
    >
      <form
        className="
          bg-white rounded-lg p-7 w-[90%] max-w-[330px] md:max-w-[400px]
          flex flex-col gap-6 text-sm text-gray-500 shadow-lg
          animate-pop
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-4 cursor-pointer hover:opacity-70"
            onClick={() => setShowLogin(false)}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currState !== "Login" && (
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2 outline-none"
              required
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            required
          />
        </div>

        {/* Button */}
        <button
          className="
            bg-[tomato] text-white py-2 rounded 
            text-base font-medium cursor-pointer 
            hover:opacity-90
          "
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms */}
        <div className="flex items-start gap-2 text-xs">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {/* Bottom Link */}
        {currState === "Login" ? (
          <p className="text-sm">
            Create a new account?{" "}
            <span
              className="text-[#FF6347] cursor-pointer hover:underline"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-[#FF6347] cursor-pointer hover:underline"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

