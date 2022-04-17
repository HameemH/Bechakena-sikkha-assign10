import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

import { useNavigate, Link } from 'react-router-dom';

import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
    const [CustomErrorEmail, setCustomErrorEmail] = useState('');
    const [CustomErrorPassword, setCustomErrorPassword] = useState('');


    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = e =>{
        const emailvalidation = /\S+@\S+\.\S+/;
        const validEmail = emailvalidation.test(e.target.value);
        if(validEmail){
            setEmail(e.target.value);
            setCustomErrorEmail('')
        }
        else{
            setCustomErrorEmail('Email is not valid')
        }
       
    }
    const handlePassword =e =>{
        const passwordvalidation = /.{6}/;
        const validPassword = passwordvalidation.test(e.target.value);
        if(validPassword){
            setPassword(e.target.value);
            setCustomErrorPassword('');
        }
        else{
            setCustomErrorPassword('Password should be 6 characters')
        }
       
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
             <input type="email" name="" id="" placeholder='Your Email' onChange={handleEmail} className='p-2 m-2 rounded-pill' required />
             
             <input type="password" name="" id="" placeholder='Your Password(at least 6 characters)'  onChange={handlePassword} className='p-2 m-2 rounded-pill' required/>
             
            
              <input type="submit" value="Signup" className='btn btn-secondary shadow shadow-lg rounded-pill'/>  
                
            </form>
            <p className='text-danger'>{CustomErrorEmail}</p>
            <p className='text-danger'>{CustomErrorPassword}</p>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
            <Button className='btn btn-light shadow mt-2 rounded-pill' onClick={() => signInWithGoogle()}>Signup with google</Button> 
        </div>
       </div>
        </div>
        </div>
    );
};

export default Signup;