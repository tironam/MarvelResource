import React from 'react';
import Navbar from '../../components/Navbar.js';
import './Home.css';
import HeaderCard from '../../components/HeaderCard';
import Carousel from '../../components/Carousel';

const Home = () => {
    return (
        <div>
            <h1 className="text text-center">WELCOME TO MCU AND YOU</h1>
            <h4 className="text">The ultimate resource for new and seasoned fans of the MCU</h4>
            <Carousel />
        </div>
    )
}

export default Home;