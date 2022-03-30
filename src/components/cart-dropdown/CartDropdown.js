import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import CustomButton from "../custombutton/CustomButton";
import CartItem from '../cart-item/CartItem';
import "./cartdropdown.scss";


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
      navigate('/checkout')
    }

    return(
    <div className=' cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
            </div>
            <CustomButton onClick={goToCheckoutHandler}  >GO TO CHECKOUT</CustomButton>
    </div>
);
        }

export default CartDropdown