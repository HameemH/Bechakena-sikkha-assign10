import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

import { useNavigate, Link } from 'react-router-dom';

import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword =e =>{
        setPassword(e.target.value);
    }
    const handleSignUp = e=>{
        e.preventDefault();
        console.log(email,password)
        createUserWithEmailAndPassword(email, password);
        console.log(user);
    }
    if (googleUser || user ){
        navigate('/home')
    }
    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <div>
            <div className='services '>
            <div className=' login-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp} className='d-flex flex-column'>
             <input type="text" name="" id="" placeholder='Your Name' className='p-2 m-2 rounded-pill' />
             <input type="email" name="" id="" placeholder='Your Email' onChange={handleEmail} className='p-2 m-2 rounded-pill' />
             <input type="password" name="" id="" placeholder='Your Password'  onChange={handlePassword} className='p-2 m-2 rounded-pill' />

              <input type="submit" value="Signup" className='btn btn-secondary shadow'/>  
                
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
            <Button className='btn btn-light shadow mt-2' onClick={() => signInWithGoogle()}>Signup with google</Button> 
        </div>
       </div>
        </div>
        </div>
    );
};

export default Signup;