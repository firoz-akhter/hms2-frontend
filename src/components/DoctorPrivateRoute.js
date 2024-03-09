import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function DoctorPrivateRoute(props) {

    let currentUserType = props.currentUserType;
  
    // let isLoggedIn = true;

    if(currentUserType==='doctor') {
        return <Outlet/>
    }
    else {
        return <Navigate to={"/login"} />       
    }


}

export default DoctorPrivateRoute