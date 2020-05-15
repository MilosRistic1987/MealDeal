import React from 'react';
import './orders.css'

const TotalOrderedMeal = ({ order }) => {
    console.log(order)
    const { price, quantity, total, title } = order
    return (
        <div className='totalOrderedField'>
            <div className="totalOrderedFieldLabel"><label>{title}</label></div>
            <div className="totalOrderedFieldPrice"><label>{price}</label>
                <label>X</label>
                <label>{quantity}</label>
                <label>=</label>
                <label>{total}</label></div>
        </div>
    )
}

export default TotalOrderedMeal