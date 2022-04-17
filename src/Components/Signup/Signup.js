import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle } from "react-firebase-hooks/auth";

import auth from './../../firebase.init';

const Signup = () => {
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
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
    }
    return (
        <div>
            <div>
            <div className='services '>
            <div className=' login-container'>
            <h1>Contact Me to know More</h1>
            <form onSubmit={handleSignUp} className='d-flex flex-column'>
                
               
             <input type="text" name="" id="" placeholder='Your Name' className='p-2 m-2 rounded-pill' />
             <input type="email" name="" id="" placeholder='Your Email' onChange={handleEmail} className='p-2 m-2 rounded-pill' />
             <input type="password" name="" id="" placeholder='Your Password'  onChange={handlePassword} className='p-2 m-2 rounded-pill' />
                
              <input type="submit" value="Signup" className='btn btn-secondary shadow'/>  
                
            </form>
            <Button className='btn btn-light shadow mt-2' onClick={() => signInWithGoogle()}>Signup with google</Button> 
        </div>
       </div>
        </div>
        </div>
    );
};

export default Signup;