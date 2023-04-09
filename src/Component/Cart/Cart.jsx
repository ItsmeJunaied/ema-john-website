import React from 'react';
import './Cart.css';
const Cart = ({cart,handledltCart}) => {
    for (const product of cart ){
        if(product.quantity===0){
            product.quantity=1;
        }
    }
    
    let total=0;
    let totShipping=0;
    let quantity=0;
    for(const product of cart){
        total=total+product.price*product.quantity;
        totShipping=product.shipping;
        quantity=quantity+product.quantity;
    }
    const tax= total*7/100;
    const grandTotal= total+totShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items:{quantity}</p>
                <p>Total Price:{total}</p>
                <p>Total Shipping: {totShipping}</p>
                <p>Tax:{tax} </p>
                <h6>Grand Total:{grandTotal} </h6>
                <button onClick={handledltCart} className='btn_clr'>Clear cart</button>
        </div>
    );
};

export default Cart;