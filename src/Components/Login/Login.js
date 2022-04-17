import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Login = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, Error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const navigateToRegister = event => {
        navigate('/signup');
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword =e =>{
        setPassword(e.target.value);
    }
    const handleLogin = e=>{
        e.preventDefault();
        console.log(email,password)
        signInWithEmailAndPassword(email, password);
        console.log(Error);
        
    }
    if (googleUser || user ){
        navigate(from, {replace: true});
    }
    return (
        <div>
            <div className='services '>
            <div className=' login-container'>
            <h1>Log In</h1>
            <form className='d-flex flex-column' onSubmit={handleLogin}>
             <input onChange={handleEmail} type="email" name="" id="" placeholder='Your Email' className='p-2 m-2 rounded-pill' />
             <input onChange={handlePassword} type="password" name="" id="" placeholder='Your Password' className='p-2 m-2 rounded-pill' />
                
             <input type="submit" value="Login"className='btn btn-secondary shadow'/>  
            </form>
            <p>New here ? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
            <Button on className='btn btn-light shadow mt-2' onClick={() => signInWithGoogle()}>Login with google</Button>

        </div>
       </div>
        </div>
    );
};

export default Login;