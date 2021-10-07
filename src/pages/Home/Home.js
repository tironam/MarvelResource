import React from 'react';
import Navbar from '../../components/Navbar.js';
import './Home.css';
import HeaderCard from '../../components/HeaderCard';
import Carousel from '../../components/Carousel';
import ImgButton from '../../components/ImgButton';
import HomeBanner from '../../components/HomeBanner.js';
import BtnSection from '../../components/BtnSection.js';

const Home = () => {
    return (
        <div>
            <h1 className="header-text" >The ultimate resource for new and seasoned fans of the MCU</h1>
            <h2 className="black-text ">Discover the past and future of the MCU. Learn about the lands and attractions inspired by the MCU at Disney Parks and Resorts around the world. Get those burning questions answered, like "Is Venom part of the MCU?", "Should I watch them in release order or chronological order?" All your MCU questions answered in one place.</h2>
            <BtnSection />
        </div>
    )
}
export default Home;