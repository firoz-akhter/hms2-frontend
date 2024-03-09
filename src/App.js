import './App.css';

import Administrator from './components/Administrator';
import AddNewSession from './components/forms-and-pages/AddNewSession';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import LandingPage from "./components/LandingPage.js";
import Login from './components/Login.js';
import Signup from './components/Signup.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PatientPrivateRoute from './components/PatientPrivateRoute.js';
import DoctorPrivateRoute from './components/DoctorPrivateRoute.js';
import AdminPrivateRoute from './components/AdminPrivateRoute.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddNewDoctor from './components/forms-and-pages/AddNewDoctor.js';
import EditDoctor from './components/forms-and-pages/EditDoctor.js';
import AddNewAppointment from './components/forms-and-pages/AddNewAppointment.js';
import EditPatient from './components/forms-and-pages/EditPatient.js';
import ViewAccountDetails from './components/forms-and-pages/ViewAccountDetails.js';

function App() {

  const baseUrl = "https://hms2-backend.vercel.app";

  const [currentUserType, setCurrentUserType] = useState("");
  const [loginUser, setLoginUser] = useState({});

  
  const [allPatients, setAllPatients] = useState({});
  const [allDoctors, setAllDoctors] = useState({});
  const [allAppointments, setAllAppointments] = useState({});
  const [allSessions, setAllSessions] = useState({});

  // console.log(allAppointments);
  // console.log(allSessionData);


  useEffect(() => {
    fetchPatients(); // might need or not at all
    fetchDoctors();
    fetchAppointments();
    fetchSessions();

  }, [])



  function fetchPatients() {
    // axios.get("http://localhost:3001/allPatients")
    axios.get(`${baseUrl}/allPatients`)
    .then((res) => {
      // console.log(res.data.allUsers);
      // allPatients = res.data.allUsers;
      setAllPatients(res.data.allUsers);
    } )
    .catch((error) => console.log(error));
  }

  function fetchDoctors() {
    console.log("fetching doctors")
    // axios.get("http://localhost:3001/allDoctors")
    axios.get(`${baseUrl}/allDoctors`)
    .then((res) => {
      setAllDoctors(res.data.allDoctors);
    } )
    .catch((error) => console.log(error));
  }

  function fetchAppointments() {
    // axios.get("http://localhost:3001/allAppointments")
    axios.get(`${baseUrl}/allAppointments`)
    .then((res) => {
      setAllAppointments(res.data.allAppointments);
    } )
    .catch((error) => console.log(error));
  }

  function fetchSessions() {
    console.log("fetching sessions")
    
    // axios.get("http://localhost:3001/allSessions")
    axios.get(`${baseUrl}/allSessions`)
    .then((res) => {
      setAllSessions(res.data.allSessions);
    } )
    .catch((error) => console.log(error));
  }


  function handlePrivateRoute(user) {
    setLoginUser(user);
    setCurrentUserType(user.role);
  }

  


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login handlePrivateRoute={handlePrivateRoute} />} />
          <Route path='/signup' element={<Signup/>} />

          <Route element={<AdminPrivateRoute currentUserType={currentUserType} />}>
            <Route path='/admin' element={ <Administrator 
              allPatients={allPatients} 
              allDoctors={allDoctors} 
              allAppointments={allAppointments}
              allSessions={allSessions}
              loginUser={loginUser}
              setCurrentUserType={setCurrentUserType}
              /> } 
            />

            <Route path='/addNewDoctor' element={ <AddNewDoctor fetchDoctors={fetchDoctors} /> } />
            <Route path='/editDoctor/:id' element={ <EditDoctor
              allDoctors={allDoctors} fetchDoctors={fetchDoctors}
            /> } />
            <Route path='/addNewSession' element={ <AddNewSession fetchSessions={fetchSessions} /> } />

          </Route>

          <Route element={<DoctorPrivateRoute currentUserType={currentUserType} />}>
            <Route path='/doctor' element={ <Doctor
              // allPatients={allPatients} 
              allDoctors={allDoctors} 
              allAppointments={allAppointments}
              allSessions={allSessions}
              loginUser={loginUser}
              setCurrentUserType={setCurrentUserType}
            /> } />
            <Route path='/addDoctorNewSession' element={ <AddNewSession /> } />
            <Route path='/editDoctorAccount/:id' element={ <EditDoctor
              allDoctors={allDoctors}
            /> } />
            <Route path='/doctorAccountDetails' element={ <ViewAccountDetails
              loginUser={loginUser}
            /> } />
          </Route>

          <Route element={<PatientPrivateRoute currentUserType={currentUserType} />}>
            <Route path='/patient' element={ <Patient
              // allPatients={allPatients} 
              allDoctors={allDoctors}
              allAppointments={allAppointments}
              allSessions={allSessions}
              loginUser={loginUser}
              setCurrentUserType={setCurrentUserType}
            /> } />
            <Route path='/addNewAppointment/:id' element={ <AddNewAppointment allAppointments={allAppointments} allSessions={allSessions} /> } />
            <Route path='/editPatient/:id' element={ <EditPatient
              allPatients={allPatients}
            /> } />
            <Route path='/patientAccountDetails' element={ <ViewAccountDetails
              loginUser={loginUser}
            /> } />

          </Route>



        </Routes>
      </BrowserRouter>
      
      


    </div>
  );
}

export default App;
