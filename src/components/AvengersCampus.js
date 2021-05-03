import React from 'react';
import AttractionCard from './AttractionCard';

const AvengersCampus = () => {

    return (
        <div>
            <div className="row text-center">
                <AttractionCard
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/08/Image_DLR_AvengersCampusBlog.jpg"
                    name="Avengers Campus"
                    synopsis="Avengers Campus is part of the Global Avengers Initiative to find new recruits to help fight the battles ahead. Here, guests will get to meet some of their favorite heroes in attractions, encounters throughout the land, shows, or even swinging above their heads. This marks the first Marvel-themed land in a Disney park and one of three planned between Disney California Adventure, Hong Kong Disneyland, and Walt Disney Studios Park at Disneyland Paris."
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
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/08/sdhbvwuy4y9u137.jpg"
                    name="Untitled Avengers Attraction"
                    synopsis="Enter Avengers Headquarters, where you'll board a Quinjet and join Earth's Mightiest Heroes on an exciting journey to save the day. This E-Ticket attraction promises to feature an innovative ride system."
                    locale="Avengers Campus"
                    date="Phase two of Avengers Campus (TBA)"
                />
            </div>
        </div>
    )
}

export default AvengersCampus;