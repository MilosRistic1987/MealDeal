import React, { useState, useEffect } from 'react';
import './orders.css'
import OrderFiled from './orderField'

const Orders = ({ selectedMeals, restaurantName }) => {
    const [time, setTime] = useState(new Date());
    const temporaryTime = time.toLocaleDateString()
    const [orderedMeals, setOrderedMelas] = useState([])

    useEffect(() => {
        const orders = selectedMeals.map(el => { return { ...el, quantity: 1, total: el.price } })
        setOrderedMelas(orders)
    }, [])

    return (
        <div className='orderWrapper'>
            <div className='ordersCardsDiv'>
                <div className='totalOrderWrapper'>
                    <div className='totalOrderCard'>
                        <div className='colorOrderDiv'></div>
                        <div className='orderInfoDiv'></div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className='orderCards flip-card-front'>
                            <div className='cardHeader '>
                                <div>
                                    <label className='subHeadingLbl'>Restaurant</label>
                                </div>
                                <div>
                                    <label className='headingLbl'>{restaurantName}</label>
                                </div>
                            </div>
                            <div className='orderCardPhoto'>
                                <div></div>
                                <div className='cardFooter'>
                                    <div></div>
                                    <div className='dateFooter'>
                                        <label className='dateLbl'>{temporaryTime}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className='backCardHeadingDiv'>
                                <h2 className='backCardHeading'>Order</h2>
                            </div>
                            {selectedMeals.map(el => <OrderFiled filed={el} orderedMeals={orderedMeals} setOrderedMelas={setOrderedMelas} />)}
                            <div className='addBtn'>
                                <img className='foodBagIcon' src='./ShopCart.png' alt='shopCart' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='photoOrderDiv'></div>
        </div>
    )
}

export default Orders