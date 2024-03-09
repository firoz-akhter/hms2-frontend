import React, { useState } from 'react'
import './css/Patient.css';
import homeIcon from "./img/icons/home.svg"
import doctorsIcon from "./img/icons/doctors.svg"
import bookIcon from "./img/icons/book.svg";
import scheduleIcon from "./img/icons/schedule.svg"
import settingsIcon from "./img/icons/settings.svg"

import LeftSidebar from './LeftSidebar';
import HomeSection from './section/HomeSection';

import AllDoctorsSection from "./section/AllDoctorsSection"
import MyBookingsSection from './section/MyBookingsSection';
import SettingsSection from './section/SettingsSection';
import ScheduledSessionSection from './section/ScheduledSessionSection';



function Patient(props) {

  const {allDoctors, allAppointments, allSessions, loginUser, setCurrentUserType} = props;

  let patientName = `${loginUser.firstName} ${loginUser.lastName}`;

  let patientBookings = allAppointments.filter((appointment) => {
    return appointment.patient === patientName;
  })
  // console.log(patientBookings);
  // console.log(allAppointments);

  const [currentSection, setCurrentSection] = useState("Home");

  // allDoctors
  

  let name = `${loginUser.firstName} ${loginUser.lastName}`
  let email = loginUser.email;
  let options = ["Home", "All Doctors", "Scheduled Session", "My Bookings", "Settings"];
  let icons = [homeIcon, doctorsIcon, bookIcon, scheduleIcon, settingsIcon]



  return (
    <div className='patient-container'>
    
      <LeftSidebar name={name} email={email} options={options} icons={icons} setCurrentSection={setCurrentSection} setCurrentUserType={setCurrentSection} />
      
      {(currentSection==='Home') && <HomeSection allAppointments={allAppointments} allDoctors={allDoctors} />}
      {(currentSection==='All Doctors') && <AllDoctorsSection allDoctors={allDoctors} setCurrentSection={setCurrentSection} />}
      {(currentSection==='Scheduled Session') && <ScheduledSessionSection allSessions={allSessions} />}
      {/* appointments leke ao n patient vise filter kr do */}
      {(currentSection==='My Bookings') && <MyBookingsSection patientBookings={patientBookings} />} 
      {(currentSection==='Settings') && <SettingsSection loginUser={loginUser} />}    

        
    </div>
  )
}

export default Patient