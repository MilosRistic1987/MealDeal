import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom'
import Login from '../publicRoutes/login'
import Poll from './polls/poll'
import Orders from './orders/order'
import Settings from './settings'
import { elastic as Menu } from 'react-burger-menu'
import './defaultPage.css';
import PollResults from '../publicRoutes/pollResults'
import AllMeals from '../privateRoutes/orders/allMeal'

const DefaultPage = (props) => {
    const history = useHistory()
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedMeals, setSelectedMeals] = useState([])
    const [restaurantName, setRestaurantName] = useState('')
    var styles = {
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            overflow: 'none'
        },
        bmOverlay: {
            width: '100%',
            backgroundSize: ' cover',
            backgroundPosition: ' center',
        },
        bmItem: {
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            alignItems: 'center',
            justifyItems: 'center',
            marginBottom: '1.3rem',
            outline: 'none'
        }

    }

    const handleOpenMenu = () => {
        setOpenMenu(false)
    }

    const handleLogout = () => {
        handleOpenMenu()
        localStorage.removeItem('myUserInLocalStorage')
        props.setSelectedRestaurants([])
        history.push('/login')
    }

    const handleStateChange = (state) => {
        setOpenMenu(state.isOpen)
    }


    return (
        <Router>
            <div className='header'>
                <div className='headerLogo'>
                    <img className='logo' src='./foodlogo.png' alt='logo' ></img>
                </div>

                <Menu left styles={styles} isOpen={openMenu} onStateChange={(e) => handleStateChange(e)}>
                    <div className='navFiled' >
                        <div>
                            <img className='navIcons' src='./polls.png' alt='icon' />
                        </div>
                        <div>
                            <Link to='/polls' onClick={handleOpenMenu} >Polls</Link>
                        </div>
                    </div>
                    <div className='navFiled'>
                        <div>
                            <img className='navIcons' src='./orders.png' alt='icon' />
                        </div>
                        <div>
                            <Link to='/orders' onClick={handleOpenMenu}>Orders</Link>
                        </div>
                    </div>
                    <div className='navFiled'>
                        <div>
                            <img className='navIcons' src='./settings.png' alt='icon' />
                        </div>
                        <div>
                            <Link to='/settings' onClick={handleOpenMenu}>Settings</Link>
                        </div>
                    </div>
                    <div className='navFiled'>
                        <div>
                            <img className='navIcons' src='./logout.png' alt='icon' />
                        </div>
                        <div>
                            <Link to='/login' onClick={handleLogout}>Logout</Link>
                        </div>
                    </div>
                </Menu>
            </div>
            <Switch>
                <Route path='/polls'>
                    <Poll selectedRestaurants={props.selectedRestaurants} setSelectedRestaurants={props.setSelectedRestaurants} />
                </Route>
                <Route path='/logout'>
                    <Login />
                </Route>
                <Route path='/pollresults'>
                    <PollResults />
                </Route>
                <Route path='/allmeals'>
                    <AllMeals selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} restaurantName={restaurantName} setRestaurantName={setRestaurantName} />
                </Route>
                <Route path='/orders'>
                    <Orders selectedMeals={selectedMeals} restaurantName={restaurantName} />
                </Route>
                <Route path='/settings'>
                    <Settings />
                </Route>
            </Switch>
        </Router>


    )
}

export default DefaultPage