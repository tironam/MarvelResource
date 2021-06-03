import React from 'react';
import AttractionCard from './AttractionCard';

const DLP = () => {

    return (
        <div>
            <h4 className="title-text">Disney Cruise Line</h4>
            <h5 className="text">Marvel Experiences at Sea</h5>
            <div className="row text-center">
                <AttractionCard
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/01/bnnbcvfdrefdaFI-624x352.jpg"
                    name="Marvel Day at Sea"
                    synopsis="Tale a stand with some of Marvel's mightiest for a heroic day filled with one-of-a-kind entertainment, unforgettable Super Hero sightings and special offerings for the entire family."
                    info="The 5-day event at sea features heroic encounters with various Marvel characters, movie marathons, shows, and other themed experiences."
                    locale="Select 5-night Disney Cruises"
                    date="Fall 2017"
                />
                <AttractionCard 
                    image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/disney-wish-family-dining-worlds-of-marvel.jpg"
                    name="Worlds of Marvel"
                    synopsis="the first-ever Marvel cinematic dining adventure. Guests will play an interactive role in an action-packed Avengers mission that unfolds around them, complete with a worldly menu inspired by the Marvel Cinematic Universe. At Worlds of Marvel, families will find dishes inspired by locations like Wakanda, Sokovia, and New York City while dining in the midst of an immersive Avengers technology showcase.
                    Outfitted with state-of-the-art Pym Tech and decked out in signature Stark-itecture style, the venue will offer surprises in all shapes and sizes. Additionally, be on the lookout for fan-favorite Avengers and an infamous foe."
                    info=""
                    locale="Disney Wish"
                    date="June 9, 2022"
                />
                <AttractionCard 
                    image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/disney-wish-disneys-oceaneer-club-marvel-super-hero-academy.jpg"
                    name="Marvel Super Hero Academy"
                    synopsis="Young “recruits” will train to be the next generation of Super Heroes with the help of their own real-life heroes, like Spider-Man, Black Panther, Ant-Man and the Wasp.
                    Young recruits will begin by choosing a Super Hero suit from a selection of power sets based on Marvel heroes like Iron Man and Captain Marvel, and watch as their choices become nanotech forms around mannequins in real-time. Then, they’ll get ready for “Avengers: Mission Training,” a gesture-based technology game where they can put their new suits and skills to the test as they virtually battle the bad guys."
                    info=""
                    locale="Disney Wish"
                    date="June 9, 2022"
                />
            </div>
        </div>
    )
}

export default DLP;