import axios from 'axios'

const baseUrl='http://itbootcamp.westeurope.cloudapp.azure.com/'

const getRestaurants= () =>{
    return axios.get(`${baseUrl}Restaurant`)
}

const getMeals= () =>{
    return axios.get(`${baseUrl}Meal`)
}

const getVotes= () =>{
    return axios.get(`${baseUrl}Vote`)
}


const getPolls= () =>{
    return axios.get(`${baseUrl}Poll`)
}

const getPoll= (id) =>{
    return axios.get(`${baseUrl}Poll/${id}`)
}

const createNewPoll= (poll)=>{
    return axios.post(`${baseUrl}Poll`, poll)
}

export {getRestaurants,getMeals,getVotes,getPolls,createNewPoll, getPoll}