import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AvengersCampus from '../../components/AvengersCampus';

const DisneyParks = () => {

    return (
        <div>
            <h1 className="text">Marvel in the Disney Parks and Resorts</h1>
            <h2 className="text">The Disneyland Resort</h2>
            <div className="row text-center">
                <AvengersCampus />
            </div>
        </div>
    )
}

export default DisneyParks;