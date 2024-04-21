import React, {useState} from "react";

import {useNavigate} from 'react-router-dom';
import Logo from '../components/img/Logo.png';
import DoctorImage from "../components/img/doctor il2.png";
const DoctorSignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleclick = () => {
        navigate("/doctorlogin")
    };
    return (
        <div
            className="MacbookPro141 w-full  h-screen bg-stone-900 flex justify-between items-center">
            <div
                className="Signup bg-primary flex-grow flex-shrink flex-basis-0 self-stretch justify-center items-center gap-2.5 flex h-full">
                <div
                    className="w-full h-full px-7 py-5 flex-col justify-center items-center gap-5 inline-flex">
                    <div className="Frame7 py-5 px-5 w-64 flex justify-center items-center gap-2.5 ">
                        <div
                            className="Login text-white text-5xl font-normal flex justify-center items-center">Signup</div>
                        <div className="As text-white text-5xl font-normal">As</div>
                        <div className="Patient text-white text-5xl font-normal">Doctor</div>
                    </div>
                    <div className="Emailflex w-full justify-start items-center gap-2.5">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="example@gmail.com"
                            className="w-full flex h-12 px-5 py-px bg-white rounded-2xl  flex-grow flex-shrink flex-basis-0 self-stretch text-zinc-800 text-opacity-80 text-base font-normal"/>
                    </div>
                    
                    <div className="Emailflex w-full justify-start items-center gap-2.5">
                        <input
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            type="text"
                            placeholder="Confirm Email"
                            className="w-full flex h-12 px-5 py-px bg-white rounded-2xl  flex-grow flex-shrink flex-basis-0 self-stretch text-zinc-800 text-opacity-80 text-base font-normal"/>
                    </div>
                    <div className="Password w-full justify-start items-center gap-2.5">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="********"
                            className="flex py-px h-12 w-full px-5 bg-white rounded-2xl flex-grow flex-shrink flex-basis-0 self-stretch text-zinc-800 text-opacity-80 text-base font-normal"/>
                    </div>
                    {<div className="text-red-500">{""}</div>}
                    <button
                        className="Frame8 w-36 p-2.5 bg-purple-500 rounded-2xl flex justify-center items-center">
                        <div
                            className="Loginbutton text-white text-base font-normal flex justify-center items-center">Signup</div>
                    </button>
                    <div
                        className="DontHaveAnAccountClickHere text-center text-white text-base font-normal">HAVE AN ACCOUNT ?
                        <br/>
                        <button className="underline" onClick={handleclick}>Click here</button>
                    </div>
                </div>
            </div>
            <div
                className="Bg  w-[70%] h-full p-7 flex-col justify-end items-end inline-flex">
                <div className="Logo w-48 h-48 justify-center items-center inline-flex">
                    <img className="Logo" src={Logo}/>
                </div>
                <div
                    className="Frame6 self-stretch grow shrink basis-0 justify-center items-center gap-2.5 inline-flex">
                    <img className="Image4 h-full" src={DoctorImage}/>
                </div>
            </div>

        </div>
    )
}

export default DoctorSignUp;
