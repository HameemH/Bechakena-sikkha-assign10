
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer p-4 ' >
             <div className='mt-5'>
             <Link to='signup' className='text-decoration-none text-white m-3'>Signup </Link>
             <Link to='login' className='text-decoration-none text-white m-3'>Log In </Link>
             <Link to='blogs' className='text-decoration-none text-white m-3'>BLogs </Link>
             <Link to='about' className='text-decoration-none text-white m-3'>About Me </Link>
             </div>
             <p className='text-white fs-2'><small>copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;