import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';
import './Services.css'

const Services = () => {
    const [Services, setServices] = useState([]);
    console.log(Services);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='services mt-4'>
            <h1>SERVICES</h1>
           <div className='row mx-auto container'>
           {
                Services.map(service=><Service key={service.id} service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;