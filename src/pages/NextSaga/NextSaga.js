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
            <h1 className="text">TO PHASE 4 AND BEYOND</h1>
            <h5 className="text descriptor">The Infinity Saga is complete. The world is changed forever and there's no going back. Now what?</h5>
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