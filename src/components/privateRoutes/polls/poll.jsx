import React, { useEffect, useState } from 'react';
import './polls.css';
import { getRestaurants, createNewPoll } from '../../../services/API';
import Clock from 'react-clock';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import RestaurantCard from './restaurantCard'
import { useHistory } from 'react-router-dom';
import { useAlert} from 'react-alert'


const Poll = ({ selectedRestaurants, setSelectedRestaurants }) => {
    const history = useHistory()
    const alert = useAlert()
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date())
    const [unselectedRestaurants, setUnselectedRestaurants] = useState([])


    useEffect(() => {
        setInterval(
            () => setTime(new Date()),
            1000
        );
        getRestaurants().then(res => {

            setUnselectedRestaurants(res.data.data);
        })
    }, []);


    const handleChange = date => {
        setDate(date)
    };

    const handlePollRequest = (e) => {
        const temporaryTime = time.toLocaleDateString()
        const label = `Meal Deal ${temporaryTime}`
        const copySelectedRestaurants=[...selectedRestaurants]
        const restaurants=copySelectedRestaurants.map(el=>el.id)
      
        const poll = {
            label,
            restaurants,
            votes:[]
        }

        createNewPoll(poll).then(res => 
            
            history.push({
                pathname: '/pollresults',
                search: `${res.data.id}`
            })
        )
       
    }

    const handleSelect = (e) => {
        
        if (e && e.length <= 4) {
            setSelectedRestaurants(e)
        } else if(!e) {
            setSelectedRestaurants([])
        }else{
            return
        }

    }

    return (
        <div className='compWrapper pollWrapper' >
            <div className='pollHeadings'>
                <div className='dateWrapper'>
                    <DatePicker
                        selected={date}
                        onChange={handleChange}
                    />
                </div>
                <div >
                    <div className='headingWrapper'>
                        <div>
                            <h1 className='pollHeading'>Meal <span className='pollHeadingSpan'>D</span>eal</h1>
                        </div>
                        <div className='handShake'>
                            <img className='cardIcon' src='./handshake.png' alt='restaurant' />
                        </div>
                    </div>

                    <Select options={unselectedRestaurants.map(el => { return { ...el, value: el.name, label: el.name } })} isMulti={true} onChange={(e)=>handleSelect(e)} value={selectedRestaurants} />
                </div>
                <div className='clockWrapper'>
                    <Clock
                        value={time}
                    />
                </div>
            </div>
            <div className='cardList'>{selectedRestaurants ? selectedRestaurants.map(el => <RestaurantCard restaurant={el} key={el.id} setSelectedRestaurants={setSelectedRestaurants} selectedRestaurants={selectedRestaurants} />) : null}</div>
            <div className='createNewPoll'><button className='loginBtn newPollBtn' onClick={(e) => selectedRestaurants.length <2?alert.show("Please select at least two restaurants"):handlePollRequest(e)} >Create new Poll</button></div>
        </div>
    )
}

export default Poll