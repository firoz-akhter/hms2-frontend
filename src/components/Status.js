import React from 'react'
// import '../css/Status.css';
import "./css/Status.css"
import doctors from "./img/icons/doctors.svg"
import patients from "./img/icons/patients.svg"
import book from "./img/icons/book.svg"
import session from "./img/icons/session.svg"

function Status(props) {

    const allAppointments = props.allAppointments;
    // console.log(allAppointments);
    const allDoctors = props.allDoctors;


    return (
    <div className='status-container'>
        <h3 className='status-heading'>Status</h3>
        <div className='flex-div'>
            <div >
                <div>
                    <p>{allDoctors.length}</p>
                    <p>All Doctors</p>
                </div>
                <img className='icon' src={doctors} alt='doctors' />
            </div>
            <div>
                <div>
                    <p>{allAppointments.length}</p>
                    <p>All Patients</p>
                </div>
                <img className='icon' src={patients} alt='patients' />
            </div>

            <div>
                <div>
                    <p>1</p>
                    <p>New Booking</p>
                </div>
                <img className='icon' src={book} alt='book' />
            </div>
            <div>
                <div>
                    <p>0</p>
                    <p>Today Sessions</p>
                </div>
                <img className='icon' src={session} alt='session' />
            </div>
        </div>
        
            
        
    </div>
    )
}

export default Status