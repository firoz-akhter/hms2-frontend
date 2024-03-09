import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PatientPrivateRoute(props) {

    let currentUserType = props.currentUserType

    if(currentUserType==='patient') {
        return <Outlet/>
    }
    else {
        return <Navigate to={"/login"} />       
    }

}

export default PatientPrivateRoute