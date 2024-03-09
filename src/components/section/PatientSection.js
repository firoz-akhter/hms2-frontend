import React from 'react'
import SearchBar from '../SearchBar'
import Date from '../Date'
import viewIcon from "../img/icons/view-iceblue.svg"
import moment from 'moment'

function PatientSection(props) {

  const allPatients = props.allPatients

  console.log(allPatients);


  return (
    <div className='doctorSection-container'>
      <div className='searchBar-and-date-div'>
        <SearchBar />
        <Date />
      </div>

      <div>All Patients(1)</div>

      {
        allPatients.map((patient) => {
          return (
            <div className='doctors-data-div'>
              <table >
                <tr>
                  <th className='title'>Name</th>
                  <th className='title'>Telephone</th>
                  <th className='title'>Email</th>
                  <th className='title'>Date of Birth</th>
                  <th className='title'>Events</th>

                </tr>
                <tr>
                  <td>{`${patient.firstName} ${patient.lastName}`}</td>
                  <td>{patient.mobileNumber}</td>
                  <td>{patient.email}</td>
                  
                  <td>{`${moment(patient.birthdate).format('MMM-DD-YYYY')} `}</td>
                  <td className='events-btn'>
                    <button className='remove-btn'>
                      <img className='btnIcon' src={viewIcon} alt='btnIcon' />
                      View</button>
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

export default PatientSection