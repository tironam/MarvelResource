import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AttractionCard from '../../components/AttractionCard';

const DisneyParks = () => {

    return (
        <div>
            <h1 className="text">Disney Parks Marvel</h1>
            <h5 className="text">The Disneyland Resort</h5>
            <div className="row text-center">
                <AttractionCard
                    image="https://www.slashfilm.com/wp/wp-content/images/Guardians-of-the-Galaxy-Mission-Breakout-easter-eggs.jpg"
                    name="Guardians of the Galaxy - Mission: BREAKOUT!"
                    synopsis="Tanaleer Tivan aka The Collector (Benecio Del Toro) has brought his collection to Tera for the first time, and you're invited to see his newest additions... The Guardians of the Galaxy. Held captive high up in his fortress, Rocket (Bradley Cooper) escapes to enlist your help to break out Star-Lord (Chris Pratt), Gamora (Zoe Saldana), Drax (Dave Bautista), and Groot to the soundtrack of six pop hits, each offering unique scenes and drop sequences."
                    locale="Located in Disney California Adventure's Hollywood Land. Soon to be part of Avengers Campus."
                    date="May 27, 2017"
                />
            </div>
        </div>
    )
}

export default DisneyParks;