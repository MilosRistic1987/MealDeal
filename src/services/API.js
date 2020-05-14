import axios from 'axios'

const baseUrl = 'http://itbootcamp.westeurope.cloudapp.azure.com/'

const getRestaurants = () => {
    return axios.get(`${baseUrl}Restaurant`)
}

const getMeals = () => {
    return axios.get(`${baseUrl}Meal`)
}

const getVotes = () => {
    return axios.get(`${baseUrl}Vote`)
}


const createVotes = (vote) => {
    return axios.post(`${baseUrl}Vote`, vote)
}

const updateVotes = (id, vote) => {
    return axios.put(`${baseUrl}Vote/${id}`, vote)
}

const getRestaurant = (id) => {
    return axios.get(`${baseUrl}Restaurant/${id}`)
}


const getPolls = () => {
    return axios.get(`${baseUrl}Poll`)
}


const updatePolls = (id, pollDetail) => {
    console.log(pollDetail, id)
    return axios.patch(`${baseUrl}Poll/${id}`, pollDetail)
}

const getPoll = (id) => {
    return axios.get(`${baseUrl}Poll/${id}`)
}

const createNewPoll = (poll) => {
    return axios.post(`${baseUrl}Poll`, poll)
}

export { getRestaurants, getMeals, getVotes, getPolls, createNewPoll, getPoll, createVotes, updateVotes, updatePolls, getRestaurant }