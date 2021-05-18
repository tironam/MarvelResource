import React from 'react';
import AttractionCard from './AttractionCard';

const DLP = () => {

    return (
        <div>
            <h4 className="text">Disneyland Paris</h4>
            <div className="text-center">
                <AttractionCard
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/09/kdjflbh4jb3oui4nj2-1024x468.jpg"
                    name="Avengers Campus"
                    synopsis="Avengers Campus is part of the Global Avengers Initiative to find new recruits to help fight the battles ahead. Here, guests will get to meet some of their favorite heroes in attractions and encounters throughout the land."
                    info="The second Avengers Campus to open, following the location in Disney California Adventure. This campus will be unique to Paris and be part of the overarching storyline that extends through all of the Disney Parks Marvel attractions and experiences."
                    replace=''
                    locale="Walt Disney Studios Park"
                    date="2021 TBA"
                />
            </div>
            <h5 className="text">The Attractions of Avengers Campus</h5>
            <div className="row text-center">
                <AttractionCard
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/08/asdkjfh32o4324-624x279.jpg"
                    name="WEB SLINGERS: A Spider-Man Adventure"
                    synopsis="The Worldwide Engineering Brigade (or W.E.B. for short) is home to some of the brightest young minds in the world like Peter Parker, come together to help develop new technology for the greatest Super Heroes in the world. When Spider-Bots start running amok around Avengers Campus, it's up to you to board the WEB Slinger to help Spider-Man shoot webs and wrangle them up."
                    info="Tom Holland reprises his role as Peter Parker/Spider-Man for the attraction. The attraction is expected to be similar to the version opening with Avengers Campus at Disney California Adventure."
                    locale="Avengers Campus - Walt Disney Studios Park"
                    date="2021 TBA"
                />
                <AttractionCard
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2018/02/dlp2394876-624x352.jpg"
                    name="Untitled Iron Man Rollercoaster"
                    synopsis="This attraction is billed as a high-speed adventure with Iron Man featuring some of your favorite Avengers."
                    info="Very little has been revealed about this attraction. It's expected to be an indoor rollercoaster."
                    replace="This attraction replaced the former Rock 'n' Roller Coaster Starring Aerosmith in the park, which closed in September 2019."
                    locale="Avengers Campus - Walt Disney Studios Park"
                    date="2021 TBA"
                />
            </div>
            <h5 className="text">Other Marvel Experiences</h5>
            <div className="row text-center">
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/03/msh29384295834095834523.jpg"
                    name="Marvel Season of Super Heroes"
                    synopsis="Marvel's Super Heroes descend on Disneyland Paris in a special event, including shows and special heroic encounters."
                    info="Originated in 2018 as the Marvel Summer of Super Heroes. The event featured larger-than-life statues of Marvel characters like Iron Man and Black Panther. The stunt show features Scarlet Witch, who made her Disney Parks debut with the event."
                    replace=""
                    locale="Walt Disney Studios Park"
                    date="June 10, 2018"
                />
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/11/igatg383671a-1024x590.jpg"
                    name="Disney's Hotel New York - The Art of Marvel"
                    synopsis="A New York-inspired hotel filled with over 300 pieces of Marvel artwork by artists from around the world."
                    info="The hotel will feature an area with unique Marvel-themed photo ops and character meet and greets."
                    locale="Disneyland Paris"
                    date="June 21, 2021"
                />
            </div>
            
        </div>
    )
}

export default DLP;