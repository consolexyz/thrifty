import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./cart-icon.scss";
import {ReactComponent as ShoppingICon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    const {isCartOpen , setIsCartOpen , cartCount} = useContext(CartContext)

    const toggleIsCartOpen =() => setIsCartOpen(!isCartOpen)
    return (
    <div className="cart-icon" onClick={toggleIsCartOpen}>
        <ShoppingICon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
    )
}


export default CartIcon;