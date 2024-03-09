import React, { useState } from 'react'
import "../css/Signup.css"
import "../css/AddNewSession.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

function AddNewAppointment(props) {

    const baseUrl = "https://hms2-backend.vercel.app";

    const navigate = useNavigate();

    const allAppointments = props.allAppointments;
    const allSessions = props.allSessions;
    // id of particular session
    let {id} = useParams()
    id = id.slice(1, );

    let session = allSessions.filter((session) => {
      return session._id === id
    })
    session = session[0];
    
    let date = moment(session.date).format('MMM-DD-YYYY')
    let doctor = session.doctor;
    

    // allAppointments filter kro doctor vise and date vise
    let totalBooking = allAppointments.filter((appointment) => {
      return (
        moment(appointment.date).format('MMM-DD-YYYY') === date && 
          appointment.doctor===doctor
        );
    }).length // isko abhi thoda thik kro

    console.log("total booking", totalBooking)

    const [formData, setFormData] = useState( {
        doctor: doctor,
        patient: "",
        appointmentNumber: totalBooking + 1,
        appointmentDate: date,
        scheduledDate: moment(),
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

        // axios.post("http://localhost:3001/addNewAppointment/" + id, formData)
        axios.post(`${baseUrl}/addNewAppointment/` + id, formData)
        .then((res) => {
            console.log(res);
            if (res.success === false) {
            console.log("appointment submission failure...")
            }
    
            if (res.data.success === true) {
            // success toast
            console.log("appointment scheduled successfully...")
            navigate(-1);
            }


        } )
        .catch((error) => {
            console.log("something didn't go well...")
            console.log(error)
        });

        // navigate(-1);
        // toggleFormOpen();
    }

    function handleReset(event) {
        event.preventDefault();
        console.log("reset button clicked...")
        setFormData({
          doctor: doctor,
          patient: "",
          appointmentNumber: totalBooking + 1,
          appointmentDate: date,
          scheduledDate: moment(),
        })
    }




  return (
    <div className='addNewDoctor-container'>
        <form className='form'>
            
            <h3>Add New Appointment.</h3>

            <div>
                <label>Doctor:</label>
                <input type="text" name="doctor" onChange={changeHandler} value={formData.doctor} />
            </div>
            <div>
                <label>Patient:</label>
                <input type="text" name="patient" onChange={changeHandler} value={formData.patient} />
            </div>
            <div>
                <label>Appointment Number:</label>
                <input type="number" name="appointmentNumber" onChange={changeHandler} value={formData.appointmentNumber} />
            </div>
            <div>
                <label>Appointment Date:</label>
                <input type="date" name="appointmentDate" onChange={changeHandler} value={formData.appointmentDate} />

            </div>
            <div className='btns-div'>
                <button className='reset-btn' onClick={handleReset}>Reset</button>
                <button className='add-btn' type='submit' onClick={submitHandler}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewAppointment