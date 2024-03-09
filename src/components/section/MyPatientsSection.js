import React from 'react'
import SearchBar from '../SearchBar'
import Date from '../Date'

function MyPatientsSection(props) {

  const doctorsPatient = props.doctorsPatient;

  console.log(doctorsPatient)


  return (
    <div className='doctorSection-container'>
      <div className='searchBar-and-date-div'>
        <SearchBar />
        <Date />
      </div>

      <div>My Patients(0)</div>

      {/* filter searchBar is missing yet... */}

      <div className='doctors-data-div'>
        <table >
          <tr>
            <th className='title'>Name</th>
            <th className='title'>Telephone</th>
            <th className='title'>Email</th>
            <th className='title'>Date of Birth</th>
            <th className='title'>Events</th>

          </tr>
      
        </table>
      </div>
      

    </div>
  )
}

export default MyPatientsSection