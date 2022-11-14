import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {

    const { products, initialCart } = useLoaderData(); //{ products, initialCart };

    const [cart, setCart] = useState(initialCart);
    // delete button er jonno ei handler.jehetu ekhane state declare kora,cart er state chnage hoy tai handler fn o ekhane likhte hobe 

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (

        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }

                {
                    cart.length === 0 && <h2>No items for review. Please <Link to="/"> Shop more.</Link></h2>

                }
            </div>
            <div className='cart-container'>

                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Orders;