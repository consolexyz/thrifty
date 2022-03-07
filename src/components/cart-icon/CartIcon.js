import React from "react";
import "./cart-icon.scss";
import {ReactComponent as ShoppingICon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";

const CartIcon = ({toggleCartHidden}) => {
    return (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingICon className="shopping-icon" />
        <span className="item-count"> 0</span>
    </div>
    )
}

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchProps
) (CartIcon)