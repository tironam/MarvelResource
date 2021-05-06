import React from 'react';
import AttractionCard from './AttractionCard';

const DLR = () => {

    return (
        <div>
            <h4 className="text">Other Marvel experiences at the Disneyland Resort</h4>
            <div className="row text-center">
                <AttractionCard
                    image="https://i.ytimg.com/vi/5BsCmT898ts/maxresdefault.jpg"
                    name="Super Hero HQ"
                    synopsis="The original West Coast home to some of the greatest Super Heroes in the world. Visit Thor in Asgard, see Iron Man's hall of armor, and meet Spider-Man."
                    info="Super Hero HQ occupied the second floor above Star Wars Launch Bay. It housed character meet and greets and interactive experiences and exhibits, including Captain America before becoming Super Hero HQ. It closed on April 2, 2016, just a few months after opening."
                    replace="This took over the top floor of the former Innoventions building."
                    locale="Tomorrowland in Disneyland"
                    date="November 16, 2015"
                />
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2017/02/sohruit7875862.jpg"
                    name="Summer of Heroes"
                    synopsis='A special summertime event to mark the opening of "Guardians of the Galaxy - Mission: BREAKOUT! It brought with it themed food, special Marvel experiences like a short compilation of the MCU so far in the Sunset Showcase Theatre, and "Avengers Training Initiative," a show that allowed children to learn how to become Avengers with the help of S.H.I.E.L.D. agents, Black Widow, and Hawkeye.'
                    info='The fourth event at the resort to be centered around Marvel, after the Super Heroes Half Marathons the three years before. The "Avengers Training Initiative" show featured a video cameo from Iron Man, who was calling in from Hong Kong. This was a reference to the "Iron Man Experience" attraction at Hong Kong Disneyland. The summer event last until September 10th.'
                    replace=""
                    locale="Hollywood Land in Disney California Adventure"
                    date="May 27, 2017"
                />
                <AttractionCard 
                    image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2017/05/kdjn0820.jpg"
                    name="Guardians of the Galaxy: Awesome Dance Off!"
                    synopsis="After escaping the Collector's Fortress, Star-Lord and Gamora return to retrieve an object of great importance that was left behind, which turns out to be Star-Lord's pop hit-filled boombox. When the Collector's security systems track down the Guardians, the only way to get out of it is with an epic dance off. Obviously."
                    info="The show takes place directly in front of the attraction, with screens that reveal themselves to showcase Rocket calling in. The show's changed its soundtrack once since opening with the attraction in 2017. A full-size Groot meet and greet 
                    character comes out to greet guests at the end of the show."
                    replace=""
                    locale="Hollywood Land in Disney California Adventure"
                    date="May 27, 2017"
                />
            </div>
        </div>
    )
}

export default DLR;