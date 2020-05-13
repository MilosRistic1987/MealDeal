import React, { useState, useEffect } from 'react';
import './pollresults.css'
import ChosenCard from '../publicRoutes/chosenCard'
import { useLocation, useHistory } from "react-router-dom";
import { getPoll, updateVotes, createVotes, updatePolls } from '../../services/API';


const PollResults = () => {
    const history=useHistory()
    const [selected, setSelected] = useState(null)
    const [restaurants, setRestaurants] = useState([])
    const [allVotes, setAllVotes] = useState([])
    const [votesCount, setVotesCount] = useState(0)
    const [pollName, setPollName] = useState('')
    let location = useLocation()
    const [pollId, setPollId] = useState(location.search.replace("?", ''))
    useEffect(() => {
        getPoll(pollId).then(res => {
            let counter = 0;
            const restaurantsData = res.data.restaurants
            const votes = res.data.votes
            const allRestaurants = restaurantsData.map(el => { return { ...el, votes: votes.find(el2 => el2.restaurantId === el.id) ? votes.find(el2 => el2.restaurantId === el.id).votes : 0 } })
            allRestaurants.forEach(el => {
                counter += el.votes
            });
            setRestaurants(allRestaurants)
            setVotesCount(counter)
            setPollName(res.data.label)
            setAllVotes(votes)
            
        })
        setPollId(location.search.replace("?", ''))

    }, [location, allVotes]);

    useEffect(() => {
        getPoll(pollId).then(res => {
            const votes = res.data.votes
            setAllVotes(votes)

        })
    }, []);



    const handleVote = () => {
        let vote;
        const votesCopy = [...allVotes]
        const restaurantVote = votesCopy.find(el => el.restaurantId === selected)
        const restaurantVotes = votesCopy.map(el => el.id)
        if (!restaurantVote) {
            vote = { restaurantId: selected, votes: 1 }

            createVotes(vote).then(res => {
                const id = res.data.id
                updatePolls(pollId, { votes: [...restaurantVotes, id] }).then(result => setAllVotes([...allVotes, res.data]))
            })

        } else {
            const id = restaurantVote.id
            vote = { restaurantId: selected, votes: restaurantVote.votes + 1 }
            updateVotes(id, vote).then(res => {
                const idPoll = res.data.id
                updatePolls(pollId, { votes: [...restaurantVotes, idPoll] }).then(result => setAllVotes([...allVotes, res.data]))
            })
        }

    }
    const getWinner = (e) =>{
        const winnerRestaurantId = allVotes.reduce((prev, current) => (prev.y > current.y) ? prev.restaurantId : current.restaurantId)
        

        history.push({
            pathname: '/allmeals',
            search: `${winnerRestaurantId}`
        })
    }

    return (
        <div className='pollResultsWrapper'>
            <div className='backgrDiv'></div>
            <div className='resultsWrapper'>
                <div className='pollResultsHeadingDiv'>
                    <h2 className='pollResultsHeading'>{pollName}</h2>
                </div>
                <div className='chosenCardList'>
                    {restaurants.map(el => <ChosenCard restaurant={el} selected={selected} setSelected={setSelected} key={el.id} votesCount={votesCount} />)}
                </div>
                <div className='btnsDivs'>
                    <button className='voteBtn loginBtn ' onClick={() => handleVote()}>Vote</button>
                </div>
                <div className='btnsDivs'>
                    <button className='pollBtn loginBtn' onClick={(e) => getWinner(e)}>End Poll</button>
                </div>
            </div>

        </div>
    )
}

export default PollResults