import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;