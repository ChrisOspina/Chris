import React from 'react';
import Logo from '../components/img/Logo.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../components/session/AuthContext'; // Import useAuth hook
import Devider from  '../components/img/image 3.png'
const Login = () => {
  const { setUser } = useAuth(); // Access setUser from AuthContext

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "afernandez@gmail.com", "123456")
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        
      })
      .catch((error) => {
        const errorCode = error. code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="Preview w-full h-screen flex-col justify-center items-center gap-2.5 inline-flex bg-primary">
      <div className="Logo flex-col justify-start items-start gap-7 flex">
        <img className="Logo w-[200px] h-[200px]" src={Logo} alt="Logo" />
      </div>
      <div className="Title self-stretch justify-center items-center gap-2.5 inline-flex">
        <div className="Login text-center text-white text-4xl font-normal font-['Inter']">Login</div>
      </div>
      <div className="Content self-stretch h-96  flex-col justify-center items-center gap-5 flex">
        <div className="Select self-stretch justify-between items-center inline-flex">
          <div className="Doctor grow shrink basis-0 self-stretch px-5 py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
            <img className="Image2 w-48 h-72" src="https://via.placeholder.com/200x300" alt="Doctor" />
            <div className="Doctor text-white text-4xl font-normal font-['Inter']">Doctor</div>
          </div>
          <div className="Divider p-2.5 justify-center items-center gap-2.5 flex">
            <img className="Image3 w-48 h-72" src={Devider} alt="Divider" />
          </div>
          <div className="Patient grow shrink basis-0 self-stretch p-2.5 flex-col justify-end items-center gap-5 inline-flex" onClick={signIn}>
            <img className="Image1 w-48 h-72" src="https://via.placeholder.com/200x300" alt="Patient" />
            <div className="Patient text-white text-4xl font-normal font-['Inter']">Patient</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
