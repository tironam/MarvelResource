import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ShowCard';

const MCUPhases = () => {

    return (
        <div>
            <h1>MCU Phases so far</h1>
            <ProjectCard />
        </div>
    )
}

export default MCUPhases;