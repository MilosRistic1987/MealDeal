import './orders.css'
import React from 'react';


const OrderFiled = ({ filed }) => {
    let { title, price } = filed
    return (

        <div className='backCardFileds'>
            <div className='backCardIconDiv'>
                <img className='mealICon' src='./mealIcon.png' alt='mealIcon' />
            </div>
            <div className='backCardLblDiv'>
                <label className='mealLbl'>{title}</label>
            </div>
            <div className='priceDiv'>
                <label className='priceLbl'>{price} RSD</label>
            </div>
            <div className='backCardBtnDiv'>
                <input className='inputQunatiny' type='number' defaultValue='1' min='1'></input>
                <small className='smallLbl'>quanity</small>
            </div>
            <div className='addDiv'>
                <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag' /></button>
                <small className='addSmall'>Add</small>
            </div>
        </div>
    )
}

export default OrderFiled


