import React, { useState } from 'react'
import "../css/Signup.css"
import "../css/AddNewSession.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNewSession(props) {


    const baseUrl = "https://hms2-backend.vercel.app";

    const navigate = useNavigate();

    // const toggleFormOpen = props.toggleFormOpen;
    const fetchSessions = props.fetchSessions;

    const [formData, setFormData] = useState( {
        sessionTitle: "",
        doctor: "",
        numOfPatients: "",
        sessionDate: "",
        sessionTime: "",
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
        console.log("form submited successfully...")
        console.log(formData);

        // axios.post("http://localhost:3001/addSession", formData)
        axios.post(`${baseUrl}/addSession`, formData)
        .then((res) => {
            console.log(res);
            if (res.success === false) {
            console.log("session submission failure...")
            }
    
            if (res.data.success === true) {
            // success toast
            console.log("session scheduled successfully...")
            fetchSessions();
            navigate(-1);
            }


        } )
        .catch((error) => {
            console.log("something didn't go well...")
            console.log(error)
        });

        navigate(-1);
        // toggleFormOpen();
    }

    function handleReset(event) {
        event.preventDefault();
        console.log("reset button clicked...")
        setFormData({
            sessionTitle: "",
            doctor: "",
            numOfPatients: "",
            sessionDate: "",
            scheduledTime: "",
        })
    }




  return (
    <div className='container'>
        <form className='form'>
            
            <h3>Add New Session.</h3>

            <div>
                <label>Session Title:</label>
                <input type="text" name="sessionTitle" onChange={changeHandler} value={formData.sessionTitle} />
            </div>
            <div>
                <label>Select Doctor:</label>
                <input type="text" name="doctor" onChange={changeHandler} value={formData.doctor} />
            </div>
            <div>
                <label>Number of Patients/Appointment Number:</label>
                <input type="text" name="numOfPatients" onChange={changeHandler} value={formData.numOfPatients} />
            </div>
            <div>
                <label>Session Date:</label>
                <input type="date" name="sessionDate" onChange={changeHandler} value={formData.sessionDate} />

            </div>
            <div>
                <label>Schedule Time:</label>
                <input type="time" name="sessionTime" onChange={changeHandler} value={formData.sessionTime} />
            </div>
            <div className='btns-div'>
                <button className='reset-btn' onClick={handleReset}>Reset</button>
                <button className='add-btn' type='submit' onClick={submitHandler}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewSession