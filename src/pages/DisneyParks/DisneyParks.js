import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AttractionCard from '../../components/AttractionCard';

const DisneyParks = () => {

    return (
        <div>
            <h1 className="text">Marvel in the Disney Parks and Resorts</h1>
            <h2 className="text">The Disneyland Resort</h2>
            <div className="row text-center">
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/410/205/75/dam/disneyland/destinations/disney-california-adventure/avengers-campus/avengers-campus-16x9.jpg?1618508653472"
                    name="Avengers Campus"
                    synopsis="Avengers Campus is part of the Global Avengers Initiative to find new recruits to help fight the battles ahead."
                    locale="Disney California Adventure"
                    date="June 4, 2021"
                />
            </div>
            <h4 className="text">The Attractions of Avengers Campus:</h4>
            <div className="row text-center">
                <AttractionCard
                    image="https://www.slashfilm.com/wp/wp-content/images/Guardians-of-the-Galaxy-Mission-Breakout-easter-eggs.jpg"
                    name="Guardians of the Galaxy - Mission: BREAKOUT!"
                    synopsis="Tanaleer Tivan aka The Collector (Benecio Del Toro) has brought his collection to Tera for the first time, and you're invited to see his newest additions... The Guardians of the Galaxy. Held captive high up in his fortress, Rocket (Bradley Cooper) escapes to enlist your help to break out Star-Lord (Chris Pratt), Gamora (Zoe Saldana), Drax (Dave Bautista), and Groot to the soundtrack of six pop hits, each offering unique scenes and drop sequences."
                    locale="Located in Disney California Adventure's Hollywood Land. Soon to be part of Avengers"
                    date="May 27, 2017"
                />
                <AttractionCard 
                    image="https://d23.com/app/uploads/2020/03/780w-463h_030920_avengers-campus-3.jpg"
                    name="WEB SLINGERS: A Spider-Man Adventure"
                    synopsis="The Worldwide Engineering Brigade (or W.E.B. for short) is home to some of the brightest young minds in the world like Peter Parker, come together to help develop new technology for the greatest Super Heroes in the world. When Spider-Bots start running amok around Avengers Campus, it's up to you to board the WEB Slinger to help Spider-Man shoot webs and wrangle them up."
                    locale="Avengers Campus"
                    date="June 4, 2021"
                />
            </div>
        </div>
    )
}

export default DisneyParks;