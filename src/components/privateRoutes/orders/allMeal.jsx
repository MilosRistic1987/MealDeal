import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { getMeals, getRestaurant } from '../../../services/API'
import MealCard from './mealCard'
import { useAlert } from 'react-alert'

const AllMeals = ({ selectedMeals, setSelectedMeals, setRestaurantName }) => {
    const alert = useAlert()
    const history = useHistory()
    let location = useLocation()
    const [winnerRestaurantId, setWinnerRestaurantId] = useState(location.search.replace("?", ''))
    const [allMeals, setAllMeals] = useState([])

    useEffect(() => {
        getMeals().then(res => {
            setAllMeals(res.data.data.filter(el => el.restaurantId == winnerRestaurantId));
        })
        getRestaurant(winnerRestaurantId).then(res => setRestaurantName(res.data.name))
        setWinnerRestaurantId(location.search.replace("?", ''))
    }, [location])

    const handleProcced = () => {
        if (selectedMeals.length === 0) {
            alert.show("Please select at least one meal.")
        } else {
            history.push('/orders')
        }
    }

    return (
        <div className='allMealWrapper'>
            <div className='proccedBtnDiv'>
                <button className='procedBtn' onClick={() => { handleProcced() }}>Procced</button>
            </div>
            <div className='container'>
                {allMeals.map(el => <MealCard key={el.id} meal={el} selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} />)}
            </div>
        </div>
    )
}

export default AllMeals