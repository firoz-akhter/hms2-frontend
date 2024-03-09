import React from 'react'
import './css/LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landingPage-container'>
        
        <nav className='navbar'>
            <div className='logo'>MAXX Hospital</div>
            <div className='navbar-right-div'>
                <Link to='/login' className='loginBtn'>LOGIN</Link>
                <Link to='/signup' className='registerBtn'>REGISTER</Link>
            </div>
        </nav>
        <div className='body'>
            <h1 className='body-header'>Avoid Hassles & Delays.</h1>
            <p>How is health today, Sounds like not good!</p>
            <p>Don't worry. Find your doctor online Book as you wish with eDoc.</p>
            <p>We offer you a free doctor channelling service, Make your appointment</p>
            <Link to='/login' className='makeAppointment-btn'>Make Appointment</Link>
        </div>
        
    </div>
  )
}

export default LandingPage;