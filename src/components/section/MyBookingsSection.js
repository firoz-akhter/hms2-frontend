import React from 'react'
import Date from '../Date'
import "../css/MyBookingsSection.css"
import axios from 'axios';
import moment from 'moment';

function MyBookingsSection(props) {

  const patientBookings = props.patientBookings;

  const baseUrl = "https://hms2-backend.vercel.app";

  console.log(patientBookings);

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
    <div className='myBookingSection-container'>
        <div className='searchBar-and-date-div'>
            <h3>My Bookings history</h3>
            <Date />
        </div>
        <div> <p>My Bookings({patientBookings.length})</p> </div>

        {/* filter search bar is missing yet... */}

        {
          patientBookings.map((booking) => {
            return (
              <div className='booking-div'>
                <p>{booking.appointmentDate}</p>
                <p>Reference Number: OC-000-2</p>

                <h3>Session 101</h3>

                <p>Appointment Number:</p>
                <p>{booking.appointmentNumber}</p>

                <p>{booking.doctor}</p>
                {/* <p>{booking.scheduledData}</p>
                <p>Starts: @09:30 (12h)</p> */}

                <p>{moment(booking.date).format('MMM-DD-YYYY')}</p>
                <p>{`@ ${booking.time}h`}</p>

            
                <button onClick={() => removeAppointment(booking)} className='bookNow-btn'>Cancel Booking</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default MyBookingsSection