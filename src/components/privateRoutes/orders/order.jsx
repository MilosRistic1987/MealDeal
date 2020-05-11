import React from 'react';
import './orders.css'

const Orders = () => {
    return (
        <div className='orderWrapper'>
            <div className='ordersCardsDiv'>
                <div></div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className='orderCards flip-card-front'>
                            <div className='cardHeader '>
                                <div>
                                    <label className='subHeadingLbl'>Restaurant</label>
                                </div>
                                <div>
                                    <label className='headingLbl'>Burito Madre</label>
                                </div>
                            </div>
                            <div className='orderCardPhoto'>
                                <div></div>
                                <div className='cardFooter'>
                                    <div></div>
                                    <div className='dateFooter'>
                                        <label className='dateLbl'>date</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flip-card-back">
                            <div className='backCardHeadingDiv'>
                                <h2 className='backCardHeading'>Order</h2>
                            </div>
                            <div className='backCardFileds'>
                                <div className='backCardIconDiv'>
                                    <img className='mealICon' src='./mealIcon.png' alt='mealIcon'/>
                                </div>
                                <div className='backCardLblDiv'>
                                    <label className='mealLbl'>Meal Name</label>
                                </div>
                                <div className='priceDiv'>
                                <label className='priceLbl'>350</label>
                                </div>
                                <div className='backCardBtnDiv'>
                                    <input className='inputQunatiny' type='number' defaultValue='1' min='0'></input>
                                    <small className='smallLbl'>quanity</small>
                                </div>
                                <div className='addDiv'>
                                        <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag'/></button>
                                        <small className='addSmall'>Add</small>
                                    </div>
                            </div>
                            <div className='backCardFileds'>
                                <div className='backCardIconDiv'>
                                <img className='mealICon' src='./mealIcon.png' alt='mealIcon'/>
                                </div>
                                <div className='backCardLblDiv'>
                                <label className='mealLbl'>Meal Name</label>
                                </div>
                                <div className='priceDiv'>
                                <label className='priceLbl'>350</label>
                                </div>
                                <div className='backCardBtnDiv'>
                                <input className='inputQunatiny' type='number' defaultValue='1'  min='0'></input>
                                    <small className='smallLbl'>quanity</small>
                                </div>
                                <div className='addDiv'>
                                <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag'/></button>
                                        <small className='addSmall'>Add</small>
                                    </div>
                            </div>
                            <div className='backCardFileds'>
                                <div className='backCardIconDiv'>
                                <img className='mealICon' src='./mealIcon.png' alt='mealIcon'/>
                                </div>
                                <div className='backCardLblDiv'>
                                <label className='mealLbl'>Meal Name</label>
                                </div>
                                <div className='priceDiv'>
                                <label className='priceLbl'>350</label>
                                </div>
                                <div className='backCardBtnDiv'>
                                <input className='inputQunatiny' type='number' defaultValue='1'  min='0'></input>
                                    <small className='smallLbl' >quanity</small>
                                </div>
                                <div className='addDiv'>
                                <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag'/></button>
                                        <small className='addSmall'>Add</small>
                                    </div>
                            </div>
                            <div className='backCardFileds'>
                                <div className='backCardIconDiv'>
                                <img className='mealICon' src='./mealIcon.png' alt='mealIcon'/>
                                </div>
                                <div className='backCardLblDiv'>
                                <label className='mealLbl'>Meal Name</label>
                                </div>
                                <div className='priceDiv'>
                                <label className='priceLbl'>350</label>
                                </div>
                                <div className='backCardBtnDiv'>
                                <input className='inputQunatiny' type='number' defaultValue='1'  min='0'></input>
                                    <small className='smallLbl'>quanity</small>
                                </div>
                                <div className='addDiv'>
                                <button className='addFoodBtn'><img className='addBtnIcon' src='./foodbag.png' alt='foodbag'/></button>
                                        <small className='addSmall'>Add</small>
                                    </div>
                            </div>
                            <div className='addBtn'>
                                <img className='foodBagIcon' src='./ShopCart.png'alt='shopCart'/>
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