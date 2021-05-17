import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AvengersCampus from '../../components/ThemeParks/AvengersCampus';
import DLR from '../../components/ThemeParks/DLR';
import WDW from '../../components/ThemeParks/WDW';
import HK from '../../components/ThemeParks/HK';
import DLP from '../../components/ThemeParks/DLP';
import DCL from '../../components/ThemeParks/DCL';
import HeaderCard from '../../components/HeaderCard';

const DisneyParks = () => {

    return (
        <div>
            <HeaderCard 
                image="https://allears.net/wp-content/uploads/2020/04/Spider-man-web-slingers-avengers-campus-disneyland-april-2020-700x438.png"
                name="MARVEL IN THE DISNEY PARKS"
                text=""
            />
            <h1 className="text">MARVEL IN THE DISNEY PARKS AND RESORTS</h1>
            <h4 className="text"></h4>
            <h2 className="text">The Disneyland Resort</h2>
            <div className="text-center">
                <AvengersCampus />
            </div>
            <div className="text-center">
                <DLR />
            </div>
            <div className="text-center">
                <WDW />
            </div>
            <div className="text-center">
                <HK />
            </div>
            <div className="text-center">
                <DLP />
            </div>
            <div className="text-center">
                <DCL />
            </div>
        </div>
    )
}

export default DisneyParks;