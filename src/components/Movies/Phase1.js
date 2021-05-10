import React from 'react';
import MovieCard from './MovieCard.js'

const Phase1 = () => {
    return (
        <div className="container-fluid">
            <h1 className="text">Phase 1</h1>
            <div className="row text-center">
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_4.jpg"
                    title="Iron Man"
                    synopsis="Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man."
                    date="May 2, 2008"
                    director="Jon Favreau"
                    writer="Mark Fergus, Hawk Ostby, Art Marcum, Matt Holloway"
                    trailer="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_3.jpg"
                    title="The Incredible Hulk"
                    synopsis="In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk."
                    date="June 13, 2008"
                    director="Louis Leterrier"
                    writer="Zak Penn"
                    trailer="https://www.youtube.com/watch?v=xbqNb2PFKKA"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_4.jpg"
                    title="Iron Man 2"
                    synopsis="With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy."
                    date="May 7, 2010"
                    director="Jon Favreau"
                    writer="Justin Theroux"
                    trailer="https://www.youtube.com/watch?v=BoohRoVA9W"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01_1.jpg"
                    title="Thor"
                    synopsis="As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat."
                    date="May 6, 2011"
                    director="Kenneth Brannagh"
                    writer="Ashley Miller, Zack Stentz, Don Payne"
                    trailer="https://www.youtube.com/watch?v=JOddp-nlNvQ"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathefirstavenger_lob_crd_01_0.jpg"
                    title="Captain America: The First Avenger"
                    synopsis="Marvel's Captain America: The First Avenger focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America."
                    date="July 22, 2011"
                    director="Joe Johnston"
                    writer="Christopher Markus, Stephen McFeely"
                    trailer="https://www.youtube.com/watch?v=JerVrbLldXw"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03_0.jpg"
                    title="The Avengers"
                    synopsis="When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins. The super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow."
                    date="May 4, 2012"
                    director="Joss Whedon"
                    writer="Joss Whedon"
                    trailer="https://www.youtube.com/watch?v=eOrNdBpGMv8"
                />
            </div>
        </div>
    );
}

export default Phase1