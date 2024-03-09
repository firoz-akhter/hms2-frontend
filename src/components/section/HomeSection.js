import React from 'react'
import "../css/HomeSection.css"

import Date from "../Date";
import Status from "../Status";
import SearchBar from "../SearchBar";

function HomeSection(props) {

  const {allAppointments, allDoctors} = props;

  
  console.log(allAppointments);


  return (
    <div className='right-div'>
      <navbar>
        <div className='navbar-first-div'>
          <h2 className='home-heading'>Home</h2>
          <Date />
        </div>
        <div className='welcome-section'>
          <p className='welcome-para'>Welcome!</p>
          <h1 className='welcome-section-heading'>Test Patient.</h1>
          <p>Haven't any idea about doctors? no problem let's jumping to "All Doctors" section or "Sessions"</p>
          <p>Track your past and future appointments history</p>
          <p className='para-last'>Also find out the expected arrival time of your doctor or medical consultant.</p>

          <h3>Channel a Doctor Here</h3>
          <SearchBar />
        </div>
      </navbar>
      <div className='status-div'>
          <Status allAppointments={allAppointments} allDoctors={allDoctors} />
      </div>
    </div>
  )
}

export default HomeSection