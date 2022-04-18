import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Loign.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user,, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;

    if (user || user1) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='login-page'>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleLogIn}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Your Email' required/><br /><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Your Pasword' required/><br /><br />
                    {errorElement}
                    <input className='btn-form' type="submit" value="Login" />
                    <div className='separate'>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className='btn-google mb-3'>Continue With Google</button>
                    <p className='mt-0 mb-2'>Already a member? <Link to="/register">Register</Link></p>
                    <p>Forget password? <button onClick={resetPassword} className='text-primary reset-btn'>Reset Password</button></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;