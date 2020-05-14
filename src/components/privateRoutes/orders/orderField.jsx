import './orders.css'
import React from 'react';


const OrderFiled = ({ filed, orderedMeals, setOrderedMelas }) => {
    console.log(filed)
    let { title, price, id } = filed
    const handleQuantity = (e) => {
        const orderedMealsCopy = [...orderedMeals]
        const updatedOrderedMeals = orderedMealsCopy.map(el => el.id === id ? { ...el, quantity: +e.target.value, total: +e.target.value * el.price } : el)
        setOrderedMelas(updatedOrderedMeals)
    }
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
                <input className='inputQunatiny' type='number' defaultValue='1' min='1' onChange={(e) => handleQuantity(e)}></input>
                <small className='smallLbl'>quantity</small>
            </div>
            <div className='addDiv'>
                <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag' /></button>
                <small className='addSmall'>Add</small>
            </div>
        </div>
    )
}

export default OrderFiled


