import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ShowCard';

const Upcoming = () => {

    return (
        <div>
            <h1>Upcoming MCU projects</h1>
            <ProjectCard />
        </div>
    )
}

export default Upcoming;