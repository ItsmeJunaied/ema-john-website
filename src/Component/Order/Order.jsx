import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewgoods from '../ReviewIteams/Reviewgoods';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Order = () => {
    const savedCart= useLoaderData();
    const[cart,setCart]=useState(savedCart);

    const handleRemoveCart=(id)=>{
        const remaining=cart.filter(product=>product.id!=id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handledltCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(product=><Reviewgoods
                    key={product.id}
                    product={product}
                    handleRemoveCart={handleRemoveCart}
                    ></Reviewgoods>)
                    }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handledltCart={handledltCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;