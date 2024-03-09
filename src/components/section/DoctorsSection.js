import React from 'react'
import SearchBar from '../SearchBar'
import Date from '../Date'
import "../css/DoctorsSection.css"


import editIcon from "../img/icons/edit-iceblue.svg"
// import viewIcon from "../img/icons/view-iceblue.svg"
import deleteIcon from "../img/icons/delete-iceblue.svg"
import plusIcon from "../img/icons/add.svg"
import axios from 'axios'

import { Link } from 'react-router-dom'


function DoctorsSection(props) {

  const allDoctors = props.allDoctors;

  const baseUrl = "https://hms2-backend.vercel.app";


  function removeDoctor(doctor) {
    console.log("removing doctor")
    console.log(doctor);
    // make api call to /deleteDoctor and delete by name or email
    // fetchAllDoctors()

    const id = doctor._id;
    console.log(id);


    // axios.post("http://localhost:3001/deleteDoctor", {id})
    axios.post(`${baseUrl}/deleteDoctor`, {id})
    .then((res) => {
        console.log(res);
        if (res.success === false) {
        console.log("doctor deletion failure...")
        }

        if (res.data.success === true) {
        // success toast
        console.log("doctor account deleted successfully...")
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
        <SearchBar />
        <Date />
      </div>
      <div className='addNewDoctor-div'>
        <h3>Add New Doctor</h3>
        <Link to='/addNewDoctor' className='addNew-btn'>
          <img className='btnIcon' src={plusIcon} alt='plusIcon' />
          Add New</Link>
      </div>

      {/* doctors data div */}
      {
        allDoctors.map((doctor) => {
          return (
            <div className='doctors-data-div'>
              <table >
                <tr>
                  <th className='title'>Doctor Name</th>
                  <th className='title'>Email</th>
                  <th className='title'>Specialities</th>
                  <th className='title'>Events</th>
                </tr>
                <tr>
                  <td>{doctor.firstName + " " + doctor.lastName}</td>
                  <td>{doctor.email}</td>
                  <td>Accident and emergency</td>
                  <td className='events-btn'>
                    <Link to={`/editDoctor/:${doctor._id}`} className='edit-btn'>
                      <img className='btnIcon' src={editIcon} alt="editIcon" />
                      Edit</Link>
                    <button onClick={() => removeDoctor(doctor)} className='remove-btn'>
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

export default DoctorsSection