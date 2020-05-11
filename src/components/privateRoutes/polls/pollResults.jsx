import React, {useState, useEffect} from 'react';
import './pollresults.css'
import ChosenCard from './chosenCard'
import {useLocation} from "react-router-dom";
import { getPoll } from '../../../services/API';

const PollResults= () =>{
    const [selected, setSelected]=useState(null)
    const[restaurants,setRestaurants]= useState([])
    const[votesCount,setVotesCount]= useState(0)
    const[pollName, setPollName]=useState('')
    let location = useLocation()
    useEffect(() => {
        const pollId = location.search.replace("?",'')
        getPoll(pollId).then(res=>{
        let counter = 0;
        const restaurants = res.data.restaurants
        const votes = res.data.votes
        const allRestaurants = restaurants.map(el=>{return {...el, votes:votes.find(el2=>el2.id=== el.id).votes}})
        allRestaurants.forEach(el => {
            counter+=el.votes
            
        });
        setRestaurants(allRestaurants)
        setVotesCount(counter)
        setPollName(res.data.label)
             
        })
        
        
        
    }, [location]);

    return(
        <div className='pollResultsWrapper'>
            <div className='backgrDiv'></div>
            <div className='resultsWrapper'>
                <div className='pollResultsHeadingDiv'>
                    <h2 className='pollResultsHeading'>{pollName}</h2>
                </div>
                <div className='chosenCardList'>
                    {restaurants.map(el=><ChosenCard restaurant={el} selected={selected} setSelected={setSelected} key={el.id} votesCount={votesCount}/>)}
                </div>
                <div className='btnsDivs'>
                    <button className='voteBtn loginBtn '>Vote</button>
                </div>
                <div className='btnsDivs'>
                    <button className='pollBtn loginBtn '>End Poll</button>
                </div>
            </div>
            
        </div>
    )
}

export default PollResults