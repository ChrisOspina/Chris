import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './components/main/main.js';
import Landing from './pages/Landing.js';
import {AuthProvider} from './components/session/AuthContext.js';
import {auth} from './firebase.js'; // Import auth from firebase.js
import PrintableReport from './test/printpdf.js';
import ReportPage from './pages/reportpage.js';
import SignUp from './pages/signup.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientLogin from './pages/PatientLogin.js';
import PatientSignUp from './pages/psignup.js';
<<<<<<< HEAD
import DoctorSignup from './pages/dsignup.js';
=======
import DoctorLogin from './pages/DoctorLogin.js';
import DoctorSignUp from './pages/dsignup.js';
>>>>>>> feat/login
function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return() => unsubscribe(); // Cleanup function to unsubscribe from the listener
    }, []);

    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="App overflow-y-scroll no-scrollbar">

                    <Routes>
                        <Route path='*'element=    {
                        user
                            ? <Main user={user}/>
                            //: <Landing/>
                            : <DoctorSignup/>
                    }/>
                    <Route path='/patientlogin' element={<PatientLogin/>}/>   
                    <Route path='/patientsignup' element={<PatientSignUp/>}/>   
                    <Route path='/doctorlogin' element={<DoctorLogin/>}/>
                    <Route path='/doctorsignup' element={<DoctorSignUp/>}/>
                    </Routes>
                
                </div>
            </AuthProvider>
        </BrowserRouter>

    );
}

export default App;