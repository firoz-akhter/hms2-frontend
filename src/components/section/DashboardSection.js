import React from 'react'
import "../css/DashboardSection.css"
import Date from '../Date';
import Status from '../Status';


function DashboardSection(props) {

    const {allAppointments, allDoctors, setCurrentSection} = props;


    function handleSectionChange() {
      setCurrentSection("My Appointments");
    }


  return (
    <div className='dashboard-right-div'>
            <navbar>
                <div className='navbar-first-div'>
                    <h2 className='home-heading'>Dashboard</h2>
                    <Date />
                </div>
                <div className='welcome-section'>
                    <p className='welcome-para'>Welcome!</p>
                    <h1 className='welcome-section-heading'>Test Doctor.</h1>
                    <p>Thanks for joining with us. We are always trying to get you a complete service</p>
                    <p>You can view your daily schedule, Reach Patients Appointment at home!</p>

                    <button onClick={handleSectionChange} className='viewMyAppoints-btn'>View My Appointments</button>
                    
                </div>
            </navbar>
            <div className='status-div'>
                <Status allAppointments={allAppointments} allDoctors={allDoctors} />
            </div>
        </div>
  )
}

export default DashboardSection