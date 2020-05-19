import React from 'react';
import './orders.css'

const TotalOrderedMeal = ({ order }) => {
    const { price, quantity, total, title } = order
    return (
        <div className='totalOrderedField'>
            <div className="totalOrderedFieldLabel"><label className='titleMealLbl'>{title}</label></div>
            <div className="totalOrderedFieldPrice">
                <label className='orderSignLblX'>X</label>
                <label className='orderSignLbl'>{quantity}</label>
                <label className='orderSignLbl'>=</label>
                <label>{total}RSD</label></div>
        </div>
    )
}

export default TotalOrderedMeal