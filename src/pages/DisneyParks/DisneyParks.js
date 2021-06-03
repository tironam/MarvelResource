import { render } from '@testing-library/react';
import { Button } from 'reactstrap';
import React from 'react';
import Navbar from '../../components/Navbar';
import AvengersCampus from '../../components/ThemeParks/AvengersCampus';
import DLR from '../../components/ThemeParks/DLR';
import WDW from '../../components/ThemeParks/WDW';
import HK from '../../components/ThemeParks/HK';
import DLP from '../../components/ThemeParks/DLP';
import DCL from '../../components/ThemeParks/DCL';
import HeaderCard from '../../components/HeaderCard';
import ScrollUpButton from "react-scroll-up-button";

const DisneyParks = () => {

    return (
        <div>
            <ScrollUpButton />
            <h1 className="header-text">MARVEL IN THE DISNEY PARKS AND RESORTS</h1>
            <div className="text">
                <Button size="lg" className="phaseBtn phase1" color="danger" href="#DLR" style={{ marginBottom: '1rem' }}>
                    Disneyland Resort
                </Button>
                <Button size="lg" className="phaseBtn phase2" color="danger" href="#WDW" style={{ marginBottom: '1rem' }}>
                    Walt Disney World
                </Button>
                <Button size="lg" className="phaseBtn phase3" color="danger" href="#HKDL" style={{ marginBottom: '1rem' }}>
                    Hong Kong Disneyland
                </Button>
                <Button size="lg" className="phaseBtn phase3" color="danger" href="#DLP" style={{ marginBottom: '1rem' }}>
                    Disneyland Paris
                </Button>
                <Button size="lg" className="phaseBtn phase3" color="danger" href="#DCL" style={{ marginBottom: '1rem' }}>
                    Disney Cruise Line
                </Button>
            </div>
            <h4 className="text"></h4>
            <h2 className="title-text" id="DLR">The Disneyland Resort</h2>
            <div className="text-center">
                <AvengersCampus />
            </div>
            <div className="text-center" id="DLR">
                <DLR />
            </div>
            <div className="text-center" id="WDW">
                <WDW />
            </div>
            <div className="text-center" id="HKDL">
                <HK />
            </div>
            <div className="text-center" id="DLP">
                <DLP />
            </div>
            <div className="text-center" id="DCL">
                <DCL />
            </div>
        </div>
    )
}

export default DisneyParks;