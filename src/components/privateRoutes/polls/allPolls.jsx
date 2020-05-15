import React, { useState } from 'react';
import { getPollsPerUser } from '../../../services/API'
import { useEffect } from 'react';

const AllPolls = () => {
    const user = localStorage.getItem('myUserInLocalStorage')
    const [allPollsPerUser, setAllPollsPerUSer] = useState([])
    useEffect(() => {
        getPollsPerUser(user).then(res => setAllPollsPerUSer(res.data.data)
        )
    }, [])

    return (
        <div>
          {allPollsPerUser.map(poll=><h1>{poll.label}</h1>)}  
        </div>
    )
}

export default AllPolls