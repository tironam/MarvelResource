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
            <Carousel 
                image1="http://media.comicbook.com/2017/09/avengers-infinity-war-thanos-infinity-gauntlet-1018561-1280x0.jpeg"
            />
        </div>
    )
}

export default Home;