import React from 'react';
import AttractionCard from './AttractionCard';

const WDW = () => {

    return (
        <div>
            <h4 className="text">Walt Disney World Resort</h4>
            <h5 className="text">Marvel Attractions</h5>
            <div className="row text-center">
                <AttractionCard
                    image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/image_wdw_epcotguardianscosmicrewind4.jpg"
                    name="Guardians of the Galaxy: Cosmic Rewind"
                    synopsis="Enter the Galaxarium, an educational exhibition that explores the similarities and mysteries of the formation of Earth's Galaxy and Xandar. When the Guardians of the Galaxy arrive, a cosmos-spanning adventure begins!"
                    info="The first Marvel attraction at Walt Disney World based on one of the few MCU properties Disney is allowed to use in Florida. Described as a storytelling rollercoaster, the ride vehicles rotate 360 degrees to face you towards the story while zooming along on the track. Originally slated to open in time for Walt Disney World's 50th anniversary in 2021, the attraction's current opening date is unclear."
                    locale="World Discovery in Epcot"
                    date="2021/2022 TBA"
                />
            </div>
            <h5 className="text">Other Marvel Experiences at Walt Disney World</h5>
            <div className="row text-center">
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/06/bnvhvgfter.jpg"
                    name="Guardians of the Galaxy - Awesome Mix Live!"
                    synopsis="Star-Lord and Gamora from Guardians of the Galaxy will take guests on a musical journey through the cosmos"
                    info="Taking place in the American Pavilion, this stage show featured the two Guardians grooving along with a live alien band. This show was part of Walt Disney World's Incredible Summer in 2018 and returned for the 2019 summer season. It was slated to return for 2020, but never did, likely because of covid restrictions at the resort."
                    locale="America Gardens Theatre at Epcot"
                    date="June 9, 2018"
                />
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2018/04/bncbdfet-624x352.jpg"
                    name="Character Encounters"
                    synopsis="When his film released in the fall of 2016, Doctor Strange could be found wandering the streets of Disney's Hollywood Studios displaying his magical prowess. Star-Lord and Baby Groot could also be found in the ''One Man's Dream'' attraction greeting guests."
                    info="Doctor Strange's appearances in the park were only for a limited time, while Star-Lord and Baby Groot had a much lengthier stay with a themed location."
                    locale="Disney's Hollywood Studios"
                    date="Fall 2016"
                />
            </div>
        </div>
    )
}

export default WDW;