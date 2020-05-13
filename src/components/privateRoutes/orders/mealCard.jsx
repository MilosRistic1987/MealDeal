import React from 'react';
import './mealCard.css'

const MealCard = ({ meal }) => {


    return (
        <div className='cardWrapp'>
            <div className='mealcard'>
                <div className='mealTextWrapp'>
                    <div className='checkboxDiv'>
                        <div>
                            <input type="checkbox" id="orderBtn" name="Order" />
                            <small className='chBtnSmall'>Order</small>
                        </div>
                    </div>
                    <div className='mealLblDiv'>
                        <div className='infoDiv'>
                            <label className='mealInfoLbl'>{meal.title}</label>
                        </div>
                        <div className='infoDiv'>
                            <label className='mealInfoLbl'>{meal.price}</label>
                        </div>
                        <div className='infoDiv'>
                            <label className='mealInfoLbl'>{meal.description}</label>
                        </div>
                        <div className='infoDiv'>
                            <label className='mealInfoLbl'>{meal.available = meal.available ? 'available' : 'not available'}</label>
                        </div>

                    </div>
                </div>
                <div className='photoMealDeal'>
                    <img className='pizza' src='./pizza.jpg' alt='pizza' />
                </div>
            </div>
        </div>
    )
}

export default MealCard