import React from 'react';
import './pollFiled.css'

const PollFiled = ({ poll }) => {
    let {active, label}=poll

    return (
        <div className='pollFiledWrapper'>
            <div className='photoPollDiv'>
                <div className='borderRightDiv'></div>
                <div>
                    <h1 className='pollCardHeading'>{label}</h1>
                </div>
            </div>
            <div>
                <label className='pollStatusLbl'>{active ?'active':'completed'}</label>
                <button className='cirlceBtn'></button>
            </div>

        </div>
    )
}

export default PollFiled