import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AttractionCard from '../../components/AttractionCard';

const DisneyParks = () => {

    return (
        <div>
            <h1 className="text">Disney Parks Marvel</h1>
            <h5 className="text">Disney California Adventure</h5>
            <AttractionCard
                
            />
        </div>
    )
}

export default DisneyParks;