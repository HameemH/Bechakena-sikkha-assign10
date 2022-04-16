import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;