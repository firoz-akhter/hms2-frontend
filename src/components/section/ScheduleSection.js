import React from 'react'
import Date from '../Date'
import plusIcon from "../img/icons/add.svg"
import viewIcon from "../img/icons/view-iceblue.svg"
import deleteIcon from "../img/icons/delete-iceblue.svg"

import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'

function ScheduleSection(props) {

  const allSessions = props.allSessions;
  const loginUser = props.loginUser;
  console.log(loginUser);

  const baseUrl = "https://hms2-backend.vercel.app";

  let addNewSession = "";
  if(loginUser.role === 'admin') {
    addNewSession = '/addNewSession'
  }
  else if(loginUser.role === 'doctor') {
    addNewSession = '/addDoctorNewSession'
  }

  console.log(allSessions);


  function removeSession(session) {
    console.log("removing doctor")
    console.log(session);
    // make api call to /deleteDoctor and delete by name or email
    // fetchAllDoctors()

    const id = session._id;
    console.log(id);

    


    // axios.post("http://localhost:3001/deleteSession", {id})
    axios.post(`${baseUrl}/deleteSession`, {id})
    .then((res) => {
        console.log(res);
        if (res.success === false) {
          console.log("session deletion failure...")
        }

        if (res.data.success === true) {
          // success toast
          console.log("Scheduled session deleted successfully...")
          // navigate('/login');
        }


    } )
    .catch((error) => {
        console.log(error)
    });


    
  }




  return (
    <div className='doctorSection-container'>
      <div className='searchBar-and-date-div'>
        {/* <SearchBar /> */}
        <h2>Schedule Manager</h2>
        <Date />
      </div>
      <div className='addNewDoctor-div'>
        <h3>Schedule a Session</h3>
        <Link to={addNewSession} className='addNew-btn'>
          <img className='btnIcon' src={plusIcon} alt='plusIcon' />
          Add a Session</Link>
      </div>

      <div>Filter session search bar is missing yet...</div>

      {
        allSessions.map((session) => {
          let time = session.time || "";
          return (
            <div className='doctors-data-div'>

              <table >
                <tr>
                  <th className='title'>Session Title</th>
                  <th className='title'>Doctor</th>
                  <th className='title'>Schedule Date & Time</th>
                  <th className='title'>Max Booking</th>
                  <th className='title'>Events</th>

                </tr>
                <tr>
                  <td>{session.title}</td>
                  <td>{session.doctor}</td>
                  
                  <td>{`${moment(session.date).format('MMM-DD-YYYY')} @${time}h`}</td>
                  <td>{session.maxBooking}</td>
                  <td className='events-btn'>
                    <button className='view-btn'>
                      <img className='btnIcon' src={viewIcon} alt='viewIcon' />
                      View</button>
                    <button onClick={() => removeSession(session)} className='remove-btn'>
                      <img className='btnIcon' src={deleteIcon} alt='deleteIcon' />
                      Remove</button>
                  </td>
                </tr>
              </table>
            </div>
          )
        })
      }

      

    </div>
  )
}

export default ScheduleSection