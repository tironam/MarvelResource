import React from 'react';
import Navbar from '../../components/Navbar.js';
import './Home.css';
import HeaderCard from '../../components/HeaderCard';

const Home = () => {
    return (
        <div>
            <div className="row text-center header-card">
                <HeaderCard 
                    image="https://allears.net/wp-content/uploads/2020/04/Spider-man-web-slingers-avengers-campus-disneyland-april-2020-700x438.png"
                    name="Welcome to MCU and You!"
                    text="Your ultimate resource for the Marvel Cinematic Universe!"
                />
            </div>
        </div>
    )
}

export default Home;