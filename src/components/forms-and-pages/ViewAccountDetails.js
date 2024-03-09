import React from 'react'
import "../css/ViewAccountDetails.css"
import { useNavigate } from 'react-router-dom';

function ViewAccountDetails(props) {

    const user = props.loginUser;
    console.log(user)

    const navigate = useNavigate();


    function handleClick() {
        console.log("clicking handle click")
        navigate(-1);
    }


  return (
    <div className='accountDetail-container'>
        <div>
            <p>First Name:</p>
            <p>{user.firstName}</p>
        </div>
        <div>
            <p>Last Name:</p>
            <p>{user.lastName}</p>
        </div>
        <div>
            <p>Email:</p>
            <p>{user.email}</p>
        </div>
        <div>
            <p>Address:</p>
            <p>{user.address}</p>
        </div>
        <div>
            <p>Birthdate:</p>
            <p>{user.birthdate}</p>
        </div>
        <div>
            <p>Mob. Number:</p>
            <p>{user.mobileNumber}</p>
        </div>
        <div>
            <p>role:</p>
            <p>{user.role}</p>
        </div>

        <button onClick={handleClick} className='ok-btn'>OK</button>


    </div>
  )
}

export default ViewAccountDetails