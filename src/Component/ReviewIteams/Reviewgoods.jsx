import React from 'react';
import './Reviewgoods.css';
const Reviewgoods = ({product, handleRemoveCart}) => {
    const {id,img,price,name,quantity}=product;
    return (
        <div className='reviewItems'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>price:<span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveCart(id)} className='button-dlt'>D</button>
        </div>
    );
};

export default Reviewgoods;