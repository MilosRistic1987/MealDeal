import React, { useState, useEffect } from 'react';
import './orders.css'
import OrderFiled from './orderField'
import TotalOrderedMeal from './totalOrderedMeal'
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

const Orders = ({ selectedMeals, restaurantName }) => {
    const [time, setTime] = useState(new Date());
    const temporaryTime = time.toLocaleDateString()
    const [orderedMeals, setOrderedMelas] = useState([])
    const [totalOrderedMeals, setTotalOrderedMeals] = useState([])
    const [excelTotalOrderedMeals, setExcelTotalOrderedMeals] = useState([])
    const [total, setTotal] = useState('')

    useEffect(() => {
        const orders = selectedMeals.map(el => { return { ...el, quantity: 1, total: el.price } })
        setOrderedMelas(orders)
    }, [])
    const handleOrder = () => {
        const copyOrderedMeals = [...orderedMeals]
        let counter = 0;
        let title= 'Total Price'
      
        setTotalOrderedMeals(copyOrderedMeals)
        copyOrderedMeals.forEach(el =>{
            counter += el.total;
        }             
        )
        setExcelTotalOrderedMeals([...copyOrderedMeals, {title,total:counter}])
        setTotal(counter)
    }

    return (
        <div className='orderWrapper'>
            <div className='ordersCardsDiv'>
                <div className='totalOrderWrapper'>
                    <div className='totalOrderCard'>
                        <div className='colorOrderDiv'>
                        </div>
                        <div className='orderInfoDiv'>{totalOrderedMeals.map(order => <TotalOrderedMeal order={order} />)}
                            <div className='totalOrderedField'><label className='fullPriceLbl'>Total</label><label className='fullPriceTotalLbl' >{total} RSD</label></div>
                            <div className='totalOrderedField'><button className='orderBtns'>Order</button><ExcelFile element={<button className='orderBtns'>Download</button>}>
                                <ExcelSheet data={excelTotalOrderedMeals} name="Meals">
                                    <ExcelColumn label="Title" value="title" />
                                    <ExcelColumn label="Price" value="price" />
                                    <ExcelColumn label="Quantity" value="quantity" />
                                    <ExcelColumn label="Total" value="total" />
                                </ExcelSheet>
                            </ExcelFile></div>
                        </div>

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
                                <img className='foodBagIcon' src='./ShopCart.png' alt='shopCart' onClick={() => handleOrder()} />
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