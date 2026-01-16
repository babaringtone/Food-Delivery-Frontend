import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-12 mt-24 flex-wrap">
      {/* LEFT SIDE — INPUT FORM */}
      <div className="w-full max-w-[500px] flex-1">
        <h2 className="text-2xl font-semibold mb-10">Delivery Information</h2>

        {/* First + Last Name */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347] mt-3"
        />

        {/* Street */}
        <input
          type="text"
          placeholder="Street"
          className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347] mt-3"
        />

        {/* City + State */}
        <div className="flex gap-3 mt-3">
          <input
            type="text"
            placeholder="City"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
        </div>

        {/* Zip + Country */}
        <div className="flex gap-3 mt-3">
          <input
            type="text"
            placeholder="Zip code"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347]"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2.5 border border-gray-300 rounded outline-[#FF6347] mt-3"
        />
      </div>

      {/* RIGHT SIDE — CART TOTALS */}
      <div className="w-full max-w-[500px] flex-1">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Cart Totals</h2>

          <div className="space-y-3">
            {/* Subtotal */}
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr className="border-gray-400" />

            {/* Delivery */}
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>

            <hr className="border-gray-400" />

            {/* Total */}
            <div className="flex justify-between text-gray-800 font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
          </div>

          <button className="bg-[#FF6347] text-white w-[200px] py-3 rounded-md mt-6">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

