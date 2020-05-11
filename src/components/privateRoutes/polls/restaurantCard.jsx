import React from 'react';
import './restaurantCard.css'

const RestaurantCard = ({restaurant, setSelectedRestaurants, selectedRestaurants}) => {
    const removeRestaurant = ()=>{
        let restaurants = [...selectedRestaurants]
        let updatedRestaurants = restaurants.filter(res=>res !== restaurant)
        setSelectedRestaurants(updatedRestaurants)

    }
    return (
        <div className='card'>
            <div className='cardIconDiv'>
                <div>
                    <img className='cardIcon' src='./restIcon.png' alt='restaurant' />
                </div>
                <div className='deleteDiv'>
                <img className='cardIconDelete' src='./delete.png' alt='delete' onClick={removeRestaurant} />
                </div>
            </div>
            <div className='photoDiv'></div>
            <div className='cardLblDiv'><label className='cardLbl'>Restaurant</label></div>
            <div className='restHeadingDiv'>
                <h5 className='restHeading'>{restaurant.name}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard