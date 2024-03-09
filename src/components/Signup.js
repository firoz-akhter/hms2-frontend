import React, { useState } from 'react'
import "./css/Signup.css"
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {

  // const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const baseUrl = "https://hms2-backend.vercel.app";

  const [formData, setFormData] = useState( {
    firstName: "",
    lastName: "",
    address: "",
    birthdate: "",
    email: "",
    mobileNumber: "",
    password: "",
  } )

  // console.log(formData);

  function changeHandler(event) {
    // console.log(event.target.value);
    // setFirstName(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })

  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);


    axios.post(`${baseUrl}/signup`, formData)
      .then((res) => {
        console.log(res);
        if (res.success === false) {
          console.log("signup failure...")
        }
  
        if (res.data.success === true) {
          // success toast
          console.log("successfully signup...")
          navigate('/login');
        }


      } )
      .catch((error) => {
        console.log(error)
      });

    
    // navigate("/login");

  }



  return (
    <div className='signup-container'>

        <form onSubmit={handleSubmit}>
            <h1 className='header-text'>Let's Get Started! </h1>
            <p className='sub-text'>Add Your Personal Details to continue</p>


            <p className='label'>Name:</p>
            <div className='name-div'>
                <input required='true' type="text" name="firstName" placeholder='First Name...' onChange={changeHandler} value={formData.firstName} />
                <input required='true' type="text" name="lastName" placeholder='Last Name...' onChange={changeHandler} value={formData.lastName} />
            </div>
            


         
            <p className='label'>Address:</p>
            <input required='true' type="text" name="address" placeholder='Enter Address' onChange={changeHandler} value={formData.address} />


            <p className='label'>Date of Birth:</p>
            <input required='true' type='date' placeholder='dob' name='birthdate' onChange={changeHandler} value={formData.birthdate} />

            <p className='label'> Email:</p>
            <input required='true' type="email" name="email" placeholder='Enter Email...' onChange={changeHandler} value={formData.email} />

            <p className='label'>Mobile Number:</p>
            <input required='true'  name="mobileNumber" placeholder='ex: 18803982498' onChange={changeHandler} value={formData.mobileNumber} />

            <p className='label'>Create New Password:</p>
            <input required='true' type="password" name="password" onChange={changeHandler} value={formData.password} />

            <p className='label'>Confirm Password:</p>
            <input required='true' type="password" name="" />


            <input required='true' className='login-btn' type="submit" value="Sign Up" />

            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>

        </form>

    </div>
  )
}

export default Signup