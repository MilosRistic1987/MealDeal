import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import {getMeals} from '../../../services/API'
import MealCard from './mealCard'

const AllMeals= () =>{
    let location = useLocation()
    const [winnerRestaurantId, setWinnerRestaurantId] = useState(location.search.replace("?", ''))
    const [allMeals, setAllMeals] = useState([])
   
    useEffect(()=>{


        getMeals().then(res=> {
            
            setAllMeals(res.data.data.filter(el=>el.restaurantId==winnerRestaurantId));   
        })
   
     
        
        
        setWinnerRestaurantId(location.search.replace("?", ''))
      
        
    },[location])

    return(
        <div className='allMealWrapper'>
            <div className='mealList'>
                {allMeals.map(el=><MealCard key={el.id} meal={el}  />)}

            </div>
            
        </div>
    )
}

export default AllMeals