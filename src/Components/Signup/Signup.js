import React from 'react';
import { Button } from 'react-bootstrap';

const Signup = () => {
    return (
        <div>
            <div>
            <div className='services '>
            <div className=' login-container'>
            <h1>Contact Me to know More</h1>
            <form className='d-flex flex-column'>
                
               
             <input type="text" name="" id="" placeholder='Your Name' className='p-2 m-2 rounded-pill' />
             <input type="email" name="" id="" placeholder='Your Email' className='p-2 m-2 rounded-pill' />
             <input type="password" name="" id="" placeholder='Your Password' className='p-2 m-2 rounded-pill' />
                
                <Button className='btn btn-secondary'>Signup</Button>
            </form>
        </div>
       </div>
        </div>
        </div>
    );
};

export default Signup;