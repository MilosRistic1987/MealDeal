import React from 'react';
import './chosencards.css'

const ChosenCard = ({ restaurant, selected, setSelected, votesCount }) => {
    const src = (selected || selected === 0) && selected === restaurant.id ? './votegreen.png' : './votered.png';
    const votePercentage = votesCount === 0 ? 0 : (Math.round((restaurant.votes / votesCount) * 100))

    const handleVote = () => {
        setSelected(restaurant.id)
    }
    return (
        <div className='choseCardsWrapper' >
            <div className='chosenRestDiv'>
                <div className='restPhoto'></div>
                <div className='restaurantTextDiv'>
                    <label className='restLabel'>Restaurant</label>
                </div>
                <div className='chosenRestLblDiv'>
                    <label className='chosenrestLbl'>{restaurant.name}</label>
                </div>
            </div>
            <div className='votingDiv'>
                <div >
                    <img className='cardIcon voteIcon' src={src} alt='vote' onClick={handleVote} />
                    <small className='voteSmall'>Vote</small>
                </div>
                <div >
                    <label className='voteLbl'>{`${votePercentage}%`}</label>
                </div>
            </div>
        </div>
    )
}

export default ChosenCard