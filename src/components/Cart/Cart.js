import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2> Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>
        </div>
    );
};

export default Cart;