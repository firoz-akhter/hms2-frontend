import React from 'react'
import SearchBar from '../SearchBar'
import Date from '../Date'
import "../css/DoctorsSection.css"

import viewIcon from "../img/icons/view-iceblue.svg"
// import plusIcon from "../img/icons/add.svg"
import sessionIcon from "../img/icons/session-iceblue.svg"

function DoctorsSection(props) {

  const allDoctors = props.allDoctors;
  const setCurrentSection = props.setCurrentSection
  console.log(allDoctors)



  function showSession() {
    setCurrentSection("Scheduled Session")
  }



  
  return (
    <div className='doctorSection-container'>
      <div className='searchBar-and-date-div'>
        <SearchBar />
        <Date />
      </div>
      
      <div>All Doctors(2)</div>

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
                  <td>{`${doctor.firstName} ${doctor.lastName}`}</td>
                  <td>{doctor.email}</td>
                  <td>Accident and emergency</td>
                  <td className='events-btn'>
                    <button className='view-btn'>
                      <img className='btnIcon' src={viewIcon} alt='viewIcon' />
                      View</button>
                    <button onClick={showSession} className='view-btn'>
                      <img className='sessionIcon' src={sessionIcon} alt='sessionIcon' />
                      Sessions</button> {/* yaha se bs redirt krdo Scheduled Session pe*/}
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