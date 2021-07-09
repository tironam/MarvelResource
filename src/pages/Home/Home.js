import React from 'react';
import Navbar from '../../components/Navbar.js';
import './Home.css';
import HeaderCard from '../../components/HeaderCard';
import Carousel from '../../components/Carousel';
import ImgButton from '../../components/ImgButton';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="header-text">MCU and You</h1>
                <h2 className="text">The ultimate resource for new and seasoned fans of the MCU</h2>
            </div>
            <div className="row text-center">
                <ImgButton
                    href="/InfinitySaga"
                    image="https://cdn.mos.cms.futurecdn.net/TkGBPEiAxyXDphCpELDsQ7-1200-80.jpg"
                    alt="Poster for Avengers: Endgame"
                    text="This is where it all began"
                    link="The Infinity Saga"
                />
                <ImgButton
                    href="/NextSaga"
                    image="https://cdn3.whatculture.com/images/2020/09/286b83bfb0b66bea-600x338.jpg"
                    alt="WandaVision Poster"
                    text="What could possibly come next?"
                    link="Phase 4 and Beyond"
                />
                <ImgButton
                    href="/DisneyParks"
                    image="https://pbs.twimg.com/media/E25Hs3NWYAMWOrj?format=jpg&name=4096x4096"
                    alt="Avengers Campus concept art"
                    text="like the mcu, but for theme parks"
                    link="Marvel in the Disney Parks"
                />
            </div>
        </div>
    )
}

export default Home;