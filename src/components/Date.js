import React from 'react'
import calendar from "./img/calendar.svg"
import "./css/Date.css"
import moment from "moment"

// let date = new Date();
// date = date.toDateString();

function Date() {
  // let date = new Date();
  // date = date.toDateString();
  return (
    <div className='date-container'>
        <div className='date-div'>
            <div className='date'>
                <p>Today's date</p>
                <p>{moment().format('MMM Do YYYY')}</p>
            </div>
            <img className='icon' src={calendar} alt='calendar' />
        </div>
    </div>
  )
}

export default Date