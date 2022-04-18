import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [signInWithGoogle,user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user || user1) {
        navigate("/home");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password Did not Match');
            return;
        }
        if (password.length < 6) {
            setError("password Minimum 6 charater");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="register-form">
            <div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Your Email' /><br /><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Your Pasword' /><br /><br />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name='password' placeholder='Confirm Pasword' /><br /><br />
                    <p style={{ color: "red", marginTop: "0px", marginBottom: "5px" }}>
                        {error}
                    </p>
                    <input className='btn-form' type="submit" value="Register" />
                    <div className='separate'>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className='btn-google'>Continue With Google</button>
                    <p>Already a member? <Link to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;