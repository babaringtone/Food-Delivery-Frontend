import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart w-full mt-6 px-4">
      {/* TITLE BAR */}
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-sm font-medium">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr className="border-gray-300" />

        {/* ITEMS */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-3 text-black">
                  <img src={item.image} alt="" className="w-12" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer text-[tomato] font-bold"
                    onClick={() => removeCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="border-gray-300" />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10 mb-20 flex justify-between gap-20 max-[750px]:flex-col-reverse">

        {/* TOTALS */}
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Cart Totals</h2>

          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="flex justify-between text-gray-800 font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>

          <button onClick={()=>navigate('/order')} className="bg-[#FF6347] text-white w-[200px] max-w-[15vw] py-3 rounded-md">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* PROMO CODE */}
        <div className="cart-promocode flex-1">
          <p className="text-gray-600">If you have a promo code, Enter it here.</p>

          <div className="mt-3 flex items-center justify-between bg-gray-200 rounded-md p-2">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparent outline-none pl-2 flex-1"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md active:scale-95">
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
