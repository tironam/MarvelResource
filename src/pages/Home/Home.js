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
            <h2 className="black-text ">Discover the past and future of the MCU. Learn about the MCU-inspired lands and attractions Disney Parks and Resorts around the world. Get answers to your important questions, like is Venom part of the MCU? Everything you need to know is right here.</h2>
            <BtnSection />
        </div>
    )
}
export default Home;