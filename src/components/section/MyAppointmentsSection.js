import React from 'react'
import Date from '../Date'
import deleteIcon from "../img/icons/delete-iceblue.svg"
import "../css/DoctorsSection.css";

function MyAppointmentsSection() {
  return (
    <div className='container'>
      <div className='searchBar-and-date-div'>
        {/* <SearchBar /> */}
        <h2>Appointment Manager</h2>
        <Date />
      </div>

      <div>Filter Appointment search bar is missing yet...</div>

      <div className='doctors-data-div'>
        <table >
          <tr>
            <th className='title'>Patient Name</th>
            <th className='title'>Appointment Number</th>
            {/* <th className='title'>Doctor</th> */}
            <th className='title'>Session Title</th>
            <th className='title'>Schedule Date & Time</th>
            <th className='title'>Appointment Date</th>
            <th className='title'>Events</th>

          </tr>
          <tr>
            <td>Test Patient</td>
            <td>1</td>
            {/* <td>Test Doctor</td> */}
            <td>Test Session</td>
            <td>2020-01-02 10:00</td>
            <td>2022-06-03</td>
            <td className='events-btn'>
              <button className='remove-btn'>
                <img className='btnIcon' src={deleteIcon} />
                Cancel</button>
            </td>
          </tr>
        </table>
      </div>
      

    </div>
  )
}

export default MyAppointmentsSection