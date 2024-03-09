import React, { useState } from 'react'
import doctorIcon from "../img/icons/doctors.svg"
import viewIcon from "../img/icons/view-iceblue.svg"
import patientIcon from "../img/icons/patients.svg"
import Date from '../Date'
import "../css/SettingsSection.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SettingsSection(props) {

    const [wantToDelete, setWantToDelete] = useState(false);

    const baseUrl = "https://hms2-backend.vercel.app";
    
    const navigate = useNavigate();

    const loginUser = props.loginUser;
    console.log(loginUser);
    const role = loginUser.role;

    // const link = `/editPatient/:${loginUser._id}`;
    let link = "";
    let viewAccountLink = "";

    if(role === 'doctor') {
        link = `/editDoctorAccount/:${loginUser._id}`;
        viewAccountLink = "/doctorAccountDetails"
    }
    else if(role === 'patient') {
        link = `/editPatient/:${loginUser._id}`;
        viewAccountLink = "/patientAccountDetails";
    }


    function handleDeletion(condition) {
        if(condition === 'No') {
            setWantToDelete(false);
        }
        else if(condition === 'Yes') {
            if(role === 'patient') {
                deletePatient(loginUser);
            }
            else if(role === 'doctor') {
                deleteDoctor(loginUser);
            }

            console.log("Account deletion completed...")
            navigate('/');
        }
    }

    function toggleDeleteDiv() {
        setWantToDelete(!wantToDelete);
    }

    function deletePatient(patient) {
        console.log("removing doctor")
        console.log(patient);
        // make api call to /deleteDoctor and delete by name or email
        // fetchAllDoctors()

        const id = patient._id;
        console.log(id);

        


        // axios.post("http://localhost:3001/deletePatient", {id})
        axios.post(`${baseUrl}/deletePatient`, {id})
        .then((res) => {
            console.log(res);
            if (res.success === false) {
                console.log("patient deletion failure...")
            }

            if (res.data.success === true) {
            // success toast
            console.log("patient account deleted successfully...")
            // navigate('/login');
            }


        } )
        .catch((error) => {
            console.log(error)
        });

    }

    

    function deleteDoctor(doctor) {
        console.log("removing doctor")
        console.log(doctor);
        // make api call to /deleteDoctor and delete by name or email
        // fetchAllDoctors()

        const id = doctor._id;
        console.log(id);


        axios.post(`${baseUrl}/deleteDoctor`, {id})
        .then((res) => {
            console.log(res);
            if (res.success === false) {
            console.log("doctor deletion failure...")
            }

            if (res.data.success === true) {
            // success toast
            console.log("doctor account deleted successfully...")
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
            <h2>Settings</h2>
            <Date />
        </div>

        <Link to={link} className='inner-container'>
            <img className='icon' src={doctorIcon} alt='doctorIcon' />
            <div>
            
                {/* <Link to={link}  >Account Settings</Link> */}
                <h3 className='h3'>Account Settings</h3>
                <p className='para'>Edit Your Account Details and Change Password</p>
            </div>
        </Link>
        
        <Link to={viewAccountLink} className='inner-container'>
            <img className='icon' src={viewIcon} alt='viewIcon' />
            <div>
                {/* <Link to={viewAccountLink} >View Account Details</Link> */}
                <h3 className='h3'>View Account Details</h3>
                <p className='para'>View Personal information About Your Account</p>
            </div>
        </Link>
        
        <div onClick={toggleDeleteDiv} className='inner-container'>
            <img className='icon' src={patientIcon} alt='patientIcon' />
            <div>
                <h3 className='h3'>Delete Account</h3>
                <p className='para'>Will Permanently Remove your Account</p>
                
            </div>
            
        </div>

        
        {
            wantToDelete && 
            <div className='permanently-delete-div'>
                <p>Are you sure you want to delete your account ?</p>
                <button onClick={() => handleDeletion("No")}>No</button>
                <button onClick={() => handleDeletion("Yes")}>Yes</button>
            </div>
        }


    </div>
  )
}

export default SettingsSection