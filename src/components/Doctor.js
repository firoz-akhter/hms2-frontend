import React, { useState } from 'react'
import "./css/Doctor.css"
import LeftSidebar from './LeftSidebar'
import dashboardIcon from "./img/icons/dashboard.svg"
import bookIcon from "./img/icons/book.svg"
import sessionIcon from "./img/icons/session.svg"
import patientsIcon from "./img/icons/patients.svg"
import settingsIcon from "./img/icons/settings.svg"

import DashboardSection from './section/DashboardSection'
import MyPatientsSection from './section/MyPatientsSection'
import SettingsSection from './section/SettingsSection'
import AppointmentSection from './section/AppointmentSection'
import ScheduleSection from './section/ScheduleSection'

function Doctor(props) {

  const {allDoctors, allAppointments, allSessions, loginUser, setCurrentUserType} = props;
  // const loginUser = props.loginUser;


  // filter out kro allAppointments, allSessions, allPatients by loginUser.fullName
  // aur fir nested components ko send kr do UI pe show karane ke liye

  // console.log(allSessions);
  // console.log(loginUser);

  let doctorName = `${loginUser.firstName} ${loginUser.lastName}`;

  let doctorAppointments = allAppointments.filter((appointment) => {
    return appointment.doctor === doctorName;
  })
  // console.log(doctorAppointments);

  let doctorSessions = allSessions.filter((session) => {
    return session.doctor === doctorName;
  })

  let doctorsPatient = doctorAppointments;
  // console.log(doctorsPatient);
  

  const [currentSection, setCurrentSection] = useState("Dashboard");

  let name = `${loginUser.firstName} ${loginUser.lastName}`
  let email = loginUser.email;
  let options = ["Dashboard", "My Appointments", "My Sessions", "My Patients", "Settings"];
  let icons = [dashboardIcon, bookIcon, sessionIcon, patientsIcon, settingsIcon];




  return (
    <div className='doctor-container'>

      <LeftSidebar name={name} email={email} options={options} icons={icons} setCurrentSection={setCurrentSection} setCurrentUserType={setCurrentUserType} />
      
      {(currentSection==='Dashboard') && <DashboardSection 
          allAppointments={allAppointments} 
          allDoctors={allDoctors}
          setCurrentSection={setCurrentSection}
      />}

        {/* appointmentSection he render kro bus allAppointments filter kr ke do */}
      {(currentSection==='My Appointments') && <AppointmentSection allAppointments={doctorAppointments}  />}
      {(currentSection ==='My Sessions') && <ScheduleSection allSessions={doctorSessions} loginUser={loginUser} />} 
      {(currentSection==='My Patients') && <MyPatientsSection doctorsPatient={doctorsPatient} />}
      {(currentSection==="Settings") && <SettingsSection loginUser={loginUser} />}

    </div>
  )
}

export default Doctor