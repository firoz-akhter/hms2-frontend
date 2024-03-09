import React, { useState } from 'react'
import "./css/Login.css"
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Login(props) {

  const baseUrl = "https://hms2-backend.vercel.app";

  const handlePrivateRoute = props.handlePrivateRoute;

  const [formData, setFormData] = useState( {email: "", password: ""} );
  const navigate = useNavigate();

  // console.log("formData", formData);

  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    // console.log("loggin the login url", `${baseUrl}/login`)

    
    
    // axios.post("http://localhost:3001/login", formData)
    axios.post(`${baseUrl}/login`, formData)
      
      .then((res) => {        
        console.log(res)
        console.log("login successfull...");
        handleLogin(res);
        
      } )
      .catch((error) => console.log(error));


  }


  function handleLogin(res) {

    let user = res.data.user;

    handlePrivateRoute(user);
    navigate(`/${user.role}`);

  }






  return (
    <div className='login-container'>

        <form onSubmit={handleSubmit}>
            <h1 className='header-text'>Welcome Back! </h1>
            <p className='sub-text'>Login with your details to continue</p>


            <p className='label'>Email:</p>
            <input required='true' type="email" name="email" placeholder='Email Address' onChange={changeHandler} value={formData.email} />

         
            <p className='label'>Password:</p>
            <input required='true' type="password" name="password" placeholder='Password' onChange={changeHandler} value={formData.password} />


            <input className='login-btn' type="submit" value="Login" />

            <p>Don't have an account? <NavLink to="/signup">Signup</NavLink> </p>

        </form>

    </div>
  )
}

export default Login