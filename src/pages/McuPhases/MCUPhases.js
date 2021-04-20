import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';
import './MCUPhases.css';

const MCUPhases = () => {

    return (
        <div className="container-fluid">
                <h1 className="text">The MCU so far</h1>
                <h2 className="text">Phase 4:</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <ShowCard 
                            className="col"
                            poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
                            alt="The Falcon and the Winter Soldier poster"
                            title="The Falcon and the Winter Soldier" 
                            synopsis="Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.”"
                            date="March 19, 2021"
                            director="Kari Skogland"
                            writer="Malcom Spellman"
                            trailer="https://www.youtube.com/watch?v=IWBsDaFWyTE"
                        />
                        <ShowCard
                            className="col"
                            poster="https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg"
                            alt="WandaVision poster"
                            title="WandaVision"
                            synopsis="Marvel Studios’ “WandaVision” blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems."
                            date="January 15, 2021"
                            director="Matt Shakman"
                            writer="Jac Schaeffer"
                            trailer="https://www.youtube.com/watch?v=UBhlqe2OTt4"
                        />
                    </div>
                </div>
                
                <h2 className="text">Phase 3:</h2>
                <MovieCard 
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ffh_poster_onesheet.jpg"
                    title="Spider-Man: Far From Home"
                    synopsis="Following the events of Avengers: Endgame, Peter Parker (Tom Holland) returns in Spider-Man: Far From Home. Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter’s plan to leave super heroics behind for a few weeks is quickly scrapped when he begrudgingly agrees to help Nick Fury (Samuel L. Jackson) uncover the mystery of several elemental creature attacks. Spider-Man and Mysterio (Jake Gyllenhaal) join forces to fight the havoc unleashed across the continent but all is not as it seems."
                    date="July 2, 2019"
                    director="Jon Watts"
                    writer="Chris McKenna & Erik Sommers"
                    trailer="https://www.youtube.com/watch?v=Nt9L1jCKGnE"
                />
                <MovieCard 
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_1.jpg"
                    title="Avengers: Endgame"
                    synopsis="The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films."
                    date="April 26, 2019"
                    director="Anthony Russo, Joe Russo"
                    writer=" Christopher Markus, Stephen McFeely"
                    trailer="https://www.youtube.com/watch?v=TcMBFSGVi1c"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg"
                    title="Captain Marvel"
                    synopsis="Set in the 1990s, Marvel Studios' 'Captain Marvel' is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom."
                    date="March 8, 2019"
                    director="Anna Boden, Ryan Fleck"
                    writer="Anna Boden, Ryan Fleck, Geneva Robertson-Dworet"
                    trailer="https://www.youtube.com/watch?v=0LHxvxdRnYc"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01_0.jpg"
                    title="Ant-Man and the Wasp"
                    synopsis="In the aftermath of 'Captain America: Civil War,' Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past."
                    date="July 6, 2019"
                    director="Peyton Reed"
                    writer="Chris McKenna, Erik Sommers, Andrew Barrer, Gabriel Ferrari, Paul Rudd"
                    trailer="https://www.youtube.com/watch?v=UUkn-enk2RU"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02.jpg"
                    title="Avengers: Infinity War"
                    synopsis="As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
    "
                    date="April 27, 2018"
                    director="Anthony Russo, Joe Russo"
                    writer="Christopher Markus, Stephen McFeely"
                    trailer="https://www.youtube.com/watch?v=QwievZ1Tx-8"
                />
        </div>
    )
}

export default MCUPhases;