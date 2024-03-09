import React, { useEffect, useState } from 'react'
import "../css/AddNewSession.css"
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditDoctor(props) {

    const baseUrl = "https://hms2-backend.vercel.app";

    const fetchDoctors = props.fetchDoctors;

    const navigate = useNavigate();

    const {id} = useParams();
    const allDoctors = props.allDoctors;
    console.log(allDoctors);
    console.log(id);
    console.log("doctor id is", allDoctors[0]._id);

    let doctor = allDoctors.filter((doctor) => {
        return doctor._id === id.slice(1, );
    })

    doctor = doctor[0];
    console.log(doctor);

    // const toggleEditForm = props.toggleEditForm;
    // const oldDoctor = props.oldDoctor;

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

    useEffect(() => {
        console.log("filling inputs")
        setFormData({
            ...formData,
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            address: doctor.address,
            birthdate: doctor.birthdate,
            email: doctor.email,
            mobileNumber: doctor.mobileNumber,
            // password: doctor.password,
            role: doctor.role,
            specilities: doctor.specilities 
        })
        
    }, [])




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

        // axios.put("http://localhost:3001/updateDoctor/" + id , formData)
        axios.put(`${baseUrl}/updateDoctor/` + id , formData)
        .then((res) => {
            console.log(res);
            if (res.success === false) {
            console.log("doctor update failure...")
            }
    
            if (res.data.success === true) {
            // success toast
            console.log("doctor account updated successfully...")
            fetchDoctors();
            navigate(-1);
            }


        } )
        .catch((error) => {
            console.log(error)
        });


        console.log("form submited successfully...")
        console.log(formData);
        // set is form open false
        // toggleEditForm();
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
    <div className='container'>
        <form className='form'>
            
            <h3>Edit Doctor.</h3>

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

export default EditDoctor



