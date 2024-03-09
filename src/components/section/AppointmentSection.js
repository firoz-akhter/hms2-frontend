import React from 'react'
import Date from '../Date'
import deleteIcon from "../img/icons/delete-iceblue.svg"
import axios from 'axios';
import moment from 'moment';
// import "../css/doctorSection.js"

function AppointmentSection(props) {

  // allPatientData nhi allAppointmentData lana hai
  const allAppointments = props.allAppointments;
  console.log(allAppointments);


  const baseUrl = "https://hms2-backend.vercel.app";


  function removeAppointment(appointment) {
    console.log("removing appointment")
    console.log(appointment);
    // make api call to /deleteDoctor and delete by name or email
    // fetchAllDoctors()

    const id = appointment._id;
    console.log(id);


    // axios.post("http://localhost:3001/deleteAppointment", {id})
    axios.post(`${baseUrl}/deleteAppointment`, {id})
    .then((res) => {
        console.log(res);
        if (res.success === false) {
        console.log("appointment deletion failure...")
        }

        if (res.data.success === true) {
        // success toast
        console.log("appointment deleted successfully...")
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
        <h2>Appointment Manager</h2>
        <Date />
      </div>

      <div>Filter Appointment search bar is missing yet...</div>

      {
        allAppointments.map((appointment) => {
          return (
            
            <div className='doctors-data-div'>
              <table >
                <tr>
                  <th className='title'>Patient Name</th>
                  <th className='title'>Appointment Number</th>
                  <th className='title'>Doctor</th>
                  <th className='title'>Session Title</th>
                  <th className='title'>Schedule Date & Time</th>
                  <th className='title'>Appointment Date</th>
                  <th className='title'>Events</th>

                </tr>
                <tr>
                  <td>{appointment.patient}</td>
                  <td>{appointment.appointmentNumber}</td>
                  <td>{appointment.doctor}</td>
                  <td>Test Session</td>
                

                  <td>{`${moment(appointment.scheduledDate).format('MMM-DD-YYYY')} `}</td>
                  <td>{`${moment(appointment.appointmentDate).format('MMM-DD-YYYY')} `}</td>
                  <td className='events-btn'>
                    <button onClick={() => removeAppointment(appointment)} className='remove-btn'>
                      <img className='btnIcon' src={deleteIcon} alt='deleteIcon' />
                      Cancel</button>
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

export default AppointmentSection