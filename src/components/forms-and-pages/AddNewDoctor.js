import React, { useState } from 'react'
import "../css/AddNewSession.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNewDoctor(props) {

    const baseUrl = "https://hms2-backend.vercel.app";

    const fetchDoctors = props.fetchDoctors;

    const navigate = useNavigate();


    const [formData, setFormData] = useState( {
        firstName: "",
        lastName: "",
        address: "",
        birthdate: "",
        email: "",
        mobileNumber: "",
        password: "",
        role: "",
        specilities: "",
    } )

    


    function changeHandler(event) {
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        // make a post request with form data to add doctor

        // axios.post("http://localhost:3001/createDoctor", formData)
        axios.post(`${baseUrl}/createDoctor`, formData)
        .then((res) => {
            console.log(res);
            if (res.success === false) {
            console.log("doctor submission failure...")
            }
    
            if (res.data.success === true) {
            // success toast
            console.log("doctor account created successfully...")
            
            }


        } )
        .catch((error) => {
            console.log(error)
        });


        console.log("form submited successfully...")
        console.log(formData);
        // set is form open false
        // toggleFormOpen();
        fetchDoctors();
        navigate('/admin');
    }

    function handleReset(event) {
        event.preventDefault();
        console.log("reset button clicked...")
        setFormData({
            firstName: "",
            lastName: "",
            address: "",
            birthdate: "",
            email: "",
            mobileNumber: "",
            password: "",
            role: "",
            specilities: "",
        })
    }



  return (
    <div className='addNewDoctor-container'>
        <form className='form'>
            
            <h3>Add New Doctor.</h3>

            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={changeHandler} value={formData.firstName} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={changeHandler} value={formData.lastName} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" onChange={changeHandler} value={formData.address} />
            </div>
            <div>
                <label>Birthdate:</label>
                <input type="text" name="birthdate" onChange={changeHandler} value={formData.birthdate} />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' onChange={changeHandler} value={formData.email} />
            </div>
            <div>
                <label>Mobile Number:</label>
                <input type='text' name='mobileNumber' onChange={changeHandler} value={formData.mobileNumber}  />
            </div>
            
            <div>
                <label>role:</label>
                <input type="text" name="role" onChange={changeHandler} value={formData.role} />
            </div>

            <div>
                <label>Choose specialities:</label>
                <input type='text' name='specilities' onChange={changeHandler} value={formData.specilities} />
            </div>
            <div>
                <label>password:</label>
                <input type="password" name="password" onChange={changeHandler} value={formData.password} />
            </div>
            <div>
                <label>Confirm password:</label>
                <input type="password" name="password" />
            </div>


            <div className='btns-div'>
                <button className='reset-btn' onClick={handleReset}>Reset</button>
                <button type='submit' className='add-btn' onClick={submitHandler}>Add</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default AddNewDoctor