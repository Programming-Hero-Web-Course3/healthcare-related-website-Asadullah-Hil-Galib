import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword,handleFormcontrol,handleEmailChange, handlePasswordChange] = useState('')
    const { signInUsingGoogle, user,signInWithEmail,getEmail,error,
        getPassword,userLoginEmailPassword,setUser } = useAuth();
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()


    // Handle Google Sign In_________________
    const HandleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                swal("Good job!", "Account has been created!", "success");
                history.push(redirect_url);
            })
            .catch(error => swal("Warning", `${error.message}`, "error"));
    }



    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-full p-4 max-w-lg shadow-2xl">
                <h1 className="text-yellow-600 font-bold capitalize text-2xl mb-2">Please login</h1>
                <span className="mt-1 text-red-600 text-md md:text-lg">{ error}</span>
                <form onSubmit={handleFormcontrol}>
                    <input onBlur={handleEmailChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="email" placeholder="E-mail" />
                    <input onBlur={handlePasswordChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="password" placeholder="Password" />
                    <button className="text-lg text-white font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Login</button>
                </form>
                <div className="flex justify-between py-2">
                    <span className="text-yellow-900 text-lg font-medium">Are you new user? </span>
                    <Link className="text-yellow-900 text-lg font-medium" to="/register"> Register now</Link>
                </div>
                <div>
                    <button onClick={HandleGoogleSignIn} className="bg-yellow-600 text-white px-8 h-12 mt-4 mx-auto flex items-center justify-between rounded-full text-2xl capitalize"><span className="mr-4"><i class="fab fa-google"></i></span> by google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;