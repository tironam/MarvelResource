import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';
import UpcomingShow from '../../components/UpcomingShow';
import UpcomingMovie from '../../components/UpcomingMovie';
import Phase4 from '../../components/Phase4';
import WhatsNext from '../../components/WhatsNext';
import './NextSaga.css';

const NextSaga = () => {

    return (
        <div className="container-fluid">
            <h1 className="text">Phase 4 And Beyond</h1>
            <h5 className="text">The Infinity Saga is complete. Where does the MCU go next?</h5>
            <div className="row text-center">
                <Phase4 />
            </div>
            <div className="row text-center">
                <WhatsNext />
            </div>
        </div>
    );
}

export default NextSaga;