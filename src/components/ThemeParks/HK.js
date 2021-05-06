import React from 'react';
import AttractionCard from './AttractionCard';

const HK = () => {

    return (
        <div>
            <h4 className="text">Hong Kong Disneyland</h4>
            <h5 className="text">Marvel Attractions</h5>
            <div className="row text-center">
                <AttractionCard
                    image="https://secure.cdn4.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-hkdl-assets/prod/en-intl/system/images/hkdl-att-iron-man-exp-hero-01.jpg"
                    name="Iron Man Experience"
                    synopsis="Tony Stark has selected Tomorrowland in Hong Kon Disneyland to host the Stark Expo, where you can see some of his latest innovations, including the Iron Wing. When Hydra begins to attack the Stark Industries building in Hong Kong, guests must help Iron Man to defend the city and the building's arc reactor at all costs! Make sure to stop by the Iron Man Tech Showcase, where you can meet Iron Man himself and check out other themed experiences."
                    info="This was the first ever Marvel-themed attraction at a Disney Park. While the other Marvel Disney Parks attractions feature much of the talent from the MCU, Robert Downey Jr. did not lend his voice to this attraction."
                    locale="Tomorrowland"
                    date="January 10, 2017"
                />
                <AttractionCard 
                    image="https://secure.cdn2.wdpromedia.com/resize/mwImage/1/434/244/90/wdpromedia.disney.go.com/media/wdpro-hkdl-assets/prod/en-intl/system/images/hkdl-entity-ant-man-and-the-wasp-nano-battle-section-1-01-new.jpg"
                    name="Ant-Man and The Wasp: Nano Battle!"
                    synopsis="As Hydra attacks Hong Kong, join Ant-Man and The Wasp in protecting the S.H.I.E.L.D. Science & Technology Pavilion at the Stark Expo. Shrink down to the size of an ant and help defeat Arnim Zola to keep S.H.I.E.L.D.'s secrets safe!"
                    info="The second Marvel-themed attraction at Hong Kong Disneyland and the third ever in a Disney Park. The ride features scenes with the Paul Rudd and Evangeline Lilly reprising their roles that were directed by Peyton Reed, the director of the Ant-Man films. This ride replaced the former ''Buzz Lightyear Astro Blasters'' attraction and used its layout and ride vehicles."
                    locale="Tomorrowland"
                    date="March 31, 2019"
                />
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2018/02/shjgfjhgir987987063-613x219.jpg"
                    name="Untitled Avengers Attraction"
                    synopsis="Very little is known about this attraction. It's not clear if this will be the same as the one intended to open in Disney California Adventure's Avengers Campus, but it's possible. When the attraction opens, it will join the other two Marvel attraction in Tomorrowland to form a brand new Marvel-themed area."
                    info=""
                    locale="Marvel-themed area/Tomorrowland"
                    date="2023 TBA"
                />
            </div>
        </div>
    )
}

export default HK;