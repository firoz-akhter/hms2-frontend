import React from 'react'
import "../css/DoctorsSection.css";
import Date from '../Date';
import deleteIcon from "../img/icons/delete-iceblue.svg"
import viewIcon from "../img/icons/view-iceblue.svg"

function MySessionsSection() {
  return (
    <div className='container'>
      <div className='searchBar-and-date-div'>
        {/* <SearchBar /> */}
        <h2>My Sessions</h2>
        <Date />
      </div>

      <div>Filter Session search bar is missing yet...</div>

      <div className='doctors-data-div'>
        <table >
          <tr>
            <th className='title'>Session Title</th>
            <th className='title'>Schedule Date & Time</th>
            <th className='title'>Max num that can be booked</th>
            <th className='title'>Events</th>

          </tr>
          <tr>
            <td>Session 101</td>
            <td>2020-01-02 10:00</td>
            <td>100</td>
            <td className='events-btn'>
            <button className='view-btn'>
                <img className='btnIcon' src={viewIcon} />
                View</button>
              <button className='remove-btn'>
                <img className='btnIcon' src={deleteIcon} />
                Cancel Session</button>
            </td>
          </tr>
        </table>
      </div>
      

    </div>
  )
}

export default MySessionsSection