import React from 'react'
import "./css/LeftSidebar.css"
import user from "./img/user.png"
import { useNavigate } from 'react-router-dom';

function LeftSidebar(props) {

    const {name, email, options, icons, setCurrentSection, setCurrentUserType} = props;

    const navigate = useNavigate()


    function handleClick() {
        console.log("logging out...")
        setCurrentUserType("");
        navigate("/")
    }





  return (
    <div className='leftSideBar-container'>
        <div className='left-div'>
            <div className='patient-profile'>
                <div className='profile-icon-and-name'>
                    <img className='user-icon' src={user} alt="userIcon"/>
                    <div>
                        <h2 className='username'>{name}</h2>
                        <p className='profile-subtitle'>{email}</p>
                    </div>
                    
                </div>
                <button onClick={handleClick} className='logout-btn'>Logout</button>
            </div>
            <div className='section'>
                <button onClick={() => setCurrentSection(options[0])} className='btn'>
                    <img src={icons[0]} alt='home'/>
                    {options[0]} </button>
                <button onClick={() => setCurrentSection(options[1])} className='btn'>
                    <img src={icons[1]} alt='doctors' />
                    {options[1]} </button>
                <button onClick={() => setCurrentSection(options[2])} className='btn'>
                    <img src={icons[2]} alt='schedule' />
                    {options[2]} </button>
                <button onClick={() => setCurrentSection(options[3])} className='btn'>
                    <img src={icons[3]} alt='book'/>
                    {options[3]} </button>
                <button onClick={() => setCurrentSection(options[4])} className='btn'>
                    <img src={icons[4]} alt='settings'/>
                    {options[4]} </button>


                
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar