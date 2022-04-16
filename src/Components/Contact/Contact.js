import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
       <div className='services '>
            <div className=' login-container'>
            <h1>Contact Me to know More</h1>
            <form className='d-flex flex-column'>
                <input type="text" name="" placeholder='Your Name' className='p-2 m-2 rounded-pill' id="" />
               
             <input type="email" name="" id="" placeholder='Your Email' className='p-2 m-2 rounded-pill' />
                <h3>Ask your detailed enquiry down</h3>
                <textarea name="" id="" cols="30" rows="10" className='p-2 m-2 rounded'></textarea>
                <button className='btn btn-secondary'>Ask</button>
            </form>
        </div>
       </div>
    );
};

export default Contact;