import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem.jsx";


const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-5" id="food-display">
      {/* Title */}
      <h2 className="text-[#262626] font-semibold text-[max(2vw,24px)]">
        Top dishes near you
      </h2>

      {/* Grid container */}
      <div
        className="
          grid
          grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
          gap-[30px]
          mt-[30px]
          row-gap-[50px]
        "
      >
        {food_list.map((item) => {
          
          if (category === "All" || category === item.category) {
             return <FoodItem

              key={item._id} //use _id in food_list array storage
              id={item._id}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          }
        })}

      </div>
    </div>
  );
};

export default FoodDisplay;

