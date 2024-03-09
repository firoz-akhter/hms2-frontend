import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
// import search from "../img/search.svg"
import Date from './Date'
import Status from './Status'
import "./css/Administrator.css"
import SearchBar from './SearchBar'
import dashboardIcon from "./img/icons/dashboard.svg"
import doctorsIcon from "./img/icons/doctors.svg"
import scheduleIcon from "./img/icons/schedule.svg"
import appointmentIcon from "./img/icons/book.svg"
import patientIcon from "./img/icons/patients.svg"
import DoctorsSection from './section/DoctorsSection'
import ScheduleSection from './section/ScheduleSection'
import AppointmentSection from './section/AppointmentSection'
import PatientSection from './section/PatientSection'




function Administrator(props) {

  const {allPatients, allDoctors, allAppointments, allSessions, loginUser, 
    setCurrentUserType} = props;

  
  const [currentSection, setCurrentSection] = useState("dashboard");

  let name = `${loginUser.firstName} ${loginUser.lastName}`
  let email = loginUser.email;
  let options = ["dashboard", "doctors", "schedule", "appointment", "patients"];
  let icons = [dashboardIcon, doctorsIcon, scheduleIcon, appointmentIcon, patientIcon]





  return (
    <div className='administrator-container'>
        <LeftSidebar name={name} email={email} options={options} icons={icons} setCurrentSection={setCurrentSection} setCurrentUserType={setCurrentUserType} />

        {/* <button onClick={() => setCurrentUserType("")}>Logout</button> */}

        {/** this is dashboard component */}
        {(currentSection==="dashboard") && 
          <div className='right-div'> 
              <div className='searchBar-and-date-div'>
                  <SearchBar />
                  <Date />
              </div>
              <Status allAppointments={allAppointments} allDoctors={allDoctors} />
          </div>
        }

        {(currentSection ==="doctors") && <DoctorsSection allDoctors={allDoctors} />}
        {(currentSection==="schedule") && <ScheduleSection loginUser={loginUser} allSessions={allSessions} />}
        {(currentSection==="appointment") && <AppointmentSection allAppointments={allAppointments} />}
        {(currentSection==="patients") && <PatientSection allPatients={allPatients} />}

    </div>
  )
}

export default Administrator