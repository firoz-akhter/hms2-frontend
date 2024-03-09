import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AdminPrivateRoute(props) {
    const currentUserType = props.currentUserType;

    if(currentUserType === 'admin') {
        return <Outlet/>
    }
    else {
        return <Navigate to={"/login"} />       
    }

}

export default AdminPrivateRoute