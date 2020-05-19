import React, { useState } from 'react';
import { getPollsPerUser } from '../../../services/API'
import './pollFiled.css'
import { useEffect } from 'react';
import PollFiled from './pollFiled'

const AllPolls = () => {
    const user = localStorage.getItem('myUserInLocalStorage')
    const [allPollsPerUser, setAllPollsPerUSer] = useState([])
    useEffect(() => {
        getPollsPerUser(user).then(res => setAllPollsPerUSer(res.data.data)
        )
    }, [])

    return (
        <div className='allPollsWrapper'>
          {allPollsPerUser.map(poll=><PollFiled poll={poll}/>)}  
        </div>
    )
}

export default AllPolls