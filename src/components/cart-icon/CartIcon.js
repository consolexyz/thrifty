import React from "react";
import "./cart-icon.scss";
import {ReactComponent as ShoppingICon } from "../../assets/shopping-bag.svg";

const CartIcon = ({toggleCartHidden}) => {
    return (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingICon className="shopping-icon" />
        <span className="item-count"> 0</span>
    </div>
    )
}


export default CartIcon;