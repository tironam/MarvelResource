import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';

const MCUPhases = () => {

    return (
        <div>
            <h1>MCU Phases so far</h1>
            <ShowCard />
        </div>
    )
}

export default MCUPhases;