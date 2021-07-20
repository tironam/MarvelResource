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
                {/* <h1 className="header-text">MCU and You</h1> */}
                <h2 className="text">The ultimate resource for new and seasoned fans of the MCU</h2>
            </div>
            <div className="container-fluid">
                <div className="col-lg-4">
                <ImgButton
                    href="/InfinitySaga"
                    image="https://cdn.mos.cms.futurecdn.net/TkGBPEiAxyXDphCpELDsQ7-1200-80.jpg"
                    alt="Poster for Avengers: Endgame"
                    text="The Infinity Saga"
                    link="Where it all began"
                />
                <ImgButton
                    href="/NextSaga"
                    image="https://cdn3.whatculture.com/images/2020/09/286b83bfb0b66bea-600x338.jpg"
                    alt="WandaVision Poster"
                    text="Check out Phase 4 and beyond"
                    link="What's next?"
                />
                <ImgButton
                    href="/DisneyParks"
                    image="https://pbs.twimg.com/media/E25Hs3NWYAMWOrj?format=jpg&name=4096x4096"
                    alt="Avengers Campus concept art"
                    text="marvel in the disney parks"
                    link="The MCU comes to life"
                />
            </div>
            </div>
        </div>
    )
}

export default Home;