import React, { createContext, useState } from 'react'
import { PRODUCTS } from './Products';

//CONTEXT IS USED FOR STATE MANAGEMENT
export const ShopContext=createContext(null);

//THE FOLLOWING FUNCTION IS USED TO HANDLE MORE PRODUCTS ADDED TO THE SITE
var getDefaultCart = ()=>{
    var cart={};
    for(var i=1; i<PRODUCTS.length+1; i++){
        cart[i]=0;
    }
    return cart;
}
function ShopContextProvider(props) {
    var [cartItems, setCartItems]=useState(getDefaultCart());

    //THE FOLLOWING FUNCTION ITS ROLE IS TO ADD THE PRODUCTS TO THE CART TAB
    var addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    var removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }
    var updateCartItemAmount = (newAmout, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmout}))
    }
    //ADDING THE TOTAL AMOUNT
    var getTotalCartAmount=()=>{
        var totalAmount = 0;
        for(var item in cartItems){
            if(cartItems[item]>0){
                var itemInfo = PRODUCTS.find((product) =>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount;
    }

    //THE FOLLOWING CONTAINER IS USED TO PASS THE FUNCTIONS ABOVE TO THE PROVIDER
    var contextValue={cartItems, addToCart, removeFromCart, getTotalCartAmount, updateCartItemAmount};
  return (
    /* DONT FORGET TO WRAP THIS COMPONENT TO THE MAIN COMPONENT*/
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
