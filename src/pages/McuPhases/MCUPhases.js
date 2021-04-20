import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';

const MCUPhases = () => {

    return (
        <div>
            <h1>The MCU so far</h1>
            <h2>Phase 4:</h2>
            <ShowCard 
                poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
                alt="The Falcon and the Winter Soldier poster"
                title="The Falcon and the Winter Soldier" 
                synopsis="Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.”"
                date="March 19, 2021"
                director="Kari Skogland"
                writer="Malcom Spellman"
                trailer="https://www.youtube.com/watch?v=IWBsDaFWyTE"
            />
            <MovieCard />
        </div>
    )
}

export default MCUPhases;