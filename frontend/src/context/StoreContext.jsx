import { createContext,  } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets.js";
import { useState ,useEffect } from "react";


export const StoreContext = createContext(null);//create context object,allow to share data across components without prop drilling

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({}); //state to hold items in cart

    const addCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1})); //add item with quantity 1 if not in cart
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})); //increment quantity if already in cart
        }
    }

    const removeCart = (itemId) => {
        setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]-1})); //decrement quantity of item in cart
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addCart,
        removeCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>  {/*value passed to all children components,available through useContext hook*/}
            {props.children} {/*renders all child components wrapped by this provider*/}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;