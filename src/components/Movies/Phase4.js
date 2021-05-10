import React from 'react';
import MovieCard from './MovieCard.js';
import ShowCard from '../Shows/ShowCard.js';
import UpcomingMovie from './UpcomingMovie.js';
import UpcomingShow from '../Shows/UpcomingShow.js';

const Phase4 = () => {
    return (
        <div className="container-fluid">
            <h1 className="text">Phase 4 (So far):</h1>
            <div className="row text-center">
                <ShowCard
                    className="card"
                    poster="https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg"
                    alt="WandaVision poster"
                    title="WandaVision"
                    synopsis="Marvel Studios’ WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems."
                    date="January 15, 2021"
                    director="Matt Shakman"
                    writer="Jac Schaeffer"
                    episodes="9"
                    trailer="https://www.youtube.com/watch?v=UBhlqe2OTt4"
                />
                <ShowCard
                    className="card"
                    poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
                    alt="The Falcon and the Winter Soldier poster"
                    title="The Falcon and the Winter Soldier"
                    synopsis="Following the events of Avengers: Endgame, Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience.”"
                    date="March 19, 2021"
                    director="Kari Skogland"
                    writer="Malcom Spellman"
                    episodes="6"
                    trailer="https://www.youtube.com/watch?v=IWBsDaFWyTE"
                />
                <ShowCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/loki_lob_crd_03.jpg"
                    title="Loki"
                    synopsis="The mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame."
                    date="June 11, 2021"
                    director="Kate Herron"
                    writer="Michael Waldron"
                    episodes="6"
                    trailer="https://www.youtube.com/watch?v=nW948Va-l10"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_05.jpg"
                    title="Black Widow"
                    synopsis="Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."
                    date="July 9, 2021"
                    director="Cate Shortland"
                    writer="Jac Schaeffer & Ned Benson, Eric Pearson"
                    trailer="https://www.youtube.com/watch?v=Fp9pNPdNwjI"
                />
                <ShowCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif_card_1.jpg"
                    title="WHAT IF...?"
                    synopsis="Marvel Studios' first animated show features The Watcher (Jeffrey Wright) as our guide through the alternate realities of the Marvel Cinematic Universe multiverse."
                    date="Summer 2021"
                    director="Bryan Andrew"
                    writer="Ashley Bradley"
                    trailer="https://www.youtube.com/watch?v=4iLVoEg9aLk"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd-04.jpg"
                    title="Shang-Chi and the Legend of the Ten Rings"
                    synopsis="Marvel Studios' Shang-Chi and The Legend of The Ten Rings stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."
                    date="September 3, 2021"
                    director="Destin Daniel Cretton"
                    writer="David Callaham, Destin Daniel Cretton and Andrew Lanham"
                    trailer="https://www.youtube.com/watch?v=giWIr7U1deA"
                />
                <UpcomingMovie
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theeternals_lob_crd_01.jpg"
                    title="Eternals"
                    synopsis="Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants."
                    date="November 5, 2021"
                    director="Chloé Zhao"
                    writer="Kaz Firpo, Ryan Firpo, Chloé Zhao"
                />
                <ShowCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmarvel_lob_crd_02_0.jpg"
                    title="Ms. Marvel"
                    synopsis="Ms. Marvel, a newer character to Marvel comics has grabbed the world's imagination and we are excited to announce Iman Vellani as Kamala Khan. Ms. Marvel, an Original Series from Marvel Studios, is coming late 2021 to #DisneyPlus."
                    date="Late 2021"
                    director="Adil El Arbi & Bilall Fallah, Meera Menon and Sharmeen Obaid-Chinoy"
                    writer="TBA"
                    episodes="TBA"
                    trailer="https://www.youtube.com/watch?v=TRNI9TtBM5E"
                />
                <UpcomingShow
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_crd_01_0.jpg"
                    title="Hawkeye"
                    synopsis="Follows original Avenger Clint Barton aka Hawkeye (Jeremy Renner) and fan-favorite Marvel comics character Kate Bishop (Hailee Steinfeld), who picks up the bow and quiver."
                    date="Late 2021"
                    director="Rhys Thomas, Bert and Bertie"
                    writer="TBA"
                    episodes="TBA"
                />
                <MovieCard
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sn_lob_crd_01.jpg"
                    title="Spider-Man: No Way Home"
                    synopsis="Following the jaw-dropping cliffhanger from Spider-Man: Far From Home, Peter Parker aka Spider-Man (Tom Holland) is joined by Doctor Strange (Benedict Cumberbatch) for this new adventure. Jamie Foxx and Alfred Molina return."
                    date="December 17, 2021"
                    director="Jon Watts"
                    writer="Chris McKenna & Erik Sommers"
                    trailer="Chris McKenna & Erik Sommers"
                />
                <UpcomingMovie
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_1.jpg"
                    title="Doctor Strange in the Multiverse of Madness"
                    synopsis="Stephen Strrange aka Doctor Strange (Benedict Cumberbatch) is joined by Wanda Maximoff aka the Scarlet Witch (Elizabeth Olsen) in the sequel to the 2016 film."
                    date="March 25, 2022"
                    director="Sam Raimi"
                    writer="Jade Halley Bartlett, Michael Waldron"
                />
                <UpcomingMovie
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_02_0.jpg"
                    title="Thor: Love and Thunder"
                    synopsis="God of thunder Thor (Chris Hemsworth) returns alongside the Guardians of the Galaxy in a space-hopping adventure that features the return of Jane Foster (Natalie Portman). Thor must face off against new villain Gorr the God Butcher (Christian Bale)."
                    date="May 6, 2022"
                    director="Taika Waititi"
                    writer="Taika Waititi, Jennifer Kaytin Robinson"
                />
            </div>
        </div>
    )
}

export default Phase4;