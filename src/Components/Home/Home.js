import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;