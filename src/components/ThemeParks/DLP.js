import React from "react";
import AttractionCard from "./AttractionCard";

const DLP = () => {
  return (
    <div>
      <h4 className="title-text">Disneyland Paris</h4>
      <div className="text-center">
        <AttractionCard
          image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/01/dlpan59050922.jpg"
          name="Marvel Avengers Campus"
          synopsis="Calling all heroes... prepare to assemble in an epic new land in Walt Disney Studios Park, where you’ll team up with the Avengers and take on the mightiest MARVEL missions!

"
          info="The second Avengers Campus to open, following the location in Disney California Adventure. This campus will be unique to Paris and be part of the overarching storyline that extends through all of the Disney Parks Marvel attractions and experiences."
          replace=""
          locale="Walt Disney Studios Park"
          date="July 20, 2022"
        />
      </div>
      <h5 className="text">The Attractions of Avengers Campus</h5>
      <div className="row text-center">
        <AttractionCard
          image="https://media.disneylandparis.com/d4th/en-usd/images/vignette_spider-man-web-adventure_16-9_tcm1861-236869.png?w=960"
          name="Spider-Man W.E.B. Adventure"
          synopsis="Unleash your inner hero in an action-packed mission alongside Spidey himself, and use your innovative new tech to sling your own web and catch all the Spider-Bots before they wreak total techno-havoc across the Campus."
          info="Tom Holland reprises his role as Peter Parker/Spider-Man for the attraction. The attraction is expected to be similar to the version opening with Avengers Campus at Disney California Adventure."
          locale="Avengers Campus - Walt Disney Studios Park"
          date="2021 TBA"
        />
        <AttractionCard
          image="https://media.disneylandparis.com/d4th/en-usd/images/vignette_avengers-assemble_16-9_tcm1861-236731.png?w=960"
          name="Avengers Assemble: Flight Force"
          synopsis="Heroes wanted! Team up with Iron Man and Captain Marvel to help them save the world from an intergalactic threat. Earth is counting on you!"
          info="Very little has been revealed about this attraction, except that it will be an indoor rollercoaster featuring Iron Man and Captain Marvel."
          replace="This attraction replaced the former Rock 'n' Roller Coaster Starring Aerosmith in the park, which closed in September 2019."
          locale="Avengers Campus - Walt Disney Studios Park"
          date="2021 TBA"
        />
      </div>
      <h5 className="text">Other Marvel Experiences</h5>
      <div className="row text-center">
        <AttractionCard
          image="https://media.disneylandparis.com/d4th/en-usd/images/vignette_stark-factory-interior-2021_16-9_tcm1861-237130.png?w=960"
          name="Stark Factory"
          synopsis="Have an appetite for invention… and pizza, pasta and salad? Then fly over to Stark Factory, a quick-service kitchen and high-tech workspace where Super Heroes can come to build and repair their gear."
          replace=""
          locale="Walt Disney Studios Park"
          date="July 20, 2022"
        />
        <AttractionCard
          image="https://media.disneylandparis.com/d4th/en-usd/images/vignette_pym-food-labs-2021_16-9_tcm1861-237131.png?w=960"
          name="PYM Kitchen"
          synopsis="With a huge variety of good food at size-defying scales, power up with a buffet of unusually-sized mains and desserts – all prepared by a team of super-smart chefs using Ant-Man and The Wasp’s PYM Particle 'shrinking and growing' technology."
          replace=""
          locale="Walt Disney Studios Park"
          date="July 20, 2022"
        />
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
  );
};

export default DLP;
