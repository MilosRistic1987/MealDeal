import React, { useState } from 'react';
import './mealCard.css'

const MealCard = ({ meal, setSelectedMeals, selectedMeals }) => {
    const [selectedMeal, setSelectedMeal] = useState(false)


    const handeChecked = () => {
        setSelectedMeal(!selectedMeal)
        const orderedMeals = !selectedMeal ? [...selectedMeals, meal] : [...selectedMeals].filter(el => el.id !== meal.id)
        setSelectedMeals(orderedMeals)
    }


    return (

        <div className="mealCard">
            <div className="face face1">
                <div className="content">
                    <img src="./mealCardIcon.png" alt='mealCardIcon' />
                    <h3>{meal.title}</h3 >
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <label className='lablInfo'>description: {meal.description}</label>
                    <label className='lablInfo'>price: {meal.price} RSD</label>
                    <label className='lablInfo'>available: {meal.available ? 'available' : 'not available'} </label>
                    <div className='inputSmallDiv'>
                        <div><small className='smallInpt'>order</small></div>
                        <div><input type='checkbox' disabled={!meal.available} onClick={() => handeChecked()} /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MealCard