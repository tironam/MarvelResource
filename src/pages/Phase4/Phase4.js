import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';
import './Phase4.css';

const Phase4 = () => {

    return (
        <div className="container-fluid">
                <h1 className="text">Phase 4 & Beyond</h1>
                <h2 className="text">Phase 4:</h2>
                <div className="row text-center">
                <div className="col-lg-6">
                    <ShowCard
                            className="card"
                            poster="https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg"
                            alt="WandaVision poster"
                            title="WandaVision"
                            synopsis="Marvel Studios’ “WandaVision” blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems."
                            date="January 15, 2021"
                            director="Matt Shakman"
                            writer="Jac Schaeffer"
                            episodes="9"
                            trailer="https://www.youtube.com/watch?v=UBhlqe2OTt4"
                        />
                </div>
                <div className="col-lg-6">
                        <ShowCard 
                            className="card"
                            poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
                            alt="The Falcon and the Winter Soldier poster"
                            title="The Falcon and the Winter Soldier" 
                            synopsis="Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.”"
                            date="March 19, 2021"
                            director="Kari Skogland"
                            writer="Malcom Spellman"
                            episodes="6"
                            trailer="https://www.youtube.com/watch?v=IWBsDaFWyTE"
                        />
                </div>
            </div>
        </div>
    )
}

export default Phase4;