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
                    id="wandavision"
                    className="card"
                    poster="https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg"
                    alt=" poster for WandaVision"
                    title="WandaVision"
                    synopsis="Marvel Studios’ WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems."
                    date="January 15, 2021"
                    director="Matt Shakman"
                    writer="Jac Schaeffer"
                    episodes="9"
                    trailer="https://www.youtube.com/watch?v=UBhlqe2OTt4"
                />
                <ShowCard
                    id="falcontws"
                    className="card"
                    poster="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg"
                    alt="poster for The Falcon and the Winter Soldier"
                    title="The Falcon and the Winter Soldier"
                    synopsis="Following the events of Avengers: Endgame, Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience.”"
                    date="March 19, 2021"
                    director="Kari Skogland"
                    writer="Malcom Spellman"
                    episodes="6"
                    trailer="https://www.youtube.com/watch?v=IWBsDaFWyTE"
                />
                <ShowCard
                    id="loki"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/loki_lob_crd_03.jpg"
                    alt="poster for Loki"
                    title="Loki"
                    synopsis="The mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame."
                    date="June 11, 2021"
                    director="Kate Herron"
                    writer="Michael Waldron"
                    episodes="6"
                    trailer="https://www.youtube.com/watch?v=nW948Va-l10"
                />
                <MovieCard
                    id="blackwidow"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_05.jpg"
                    alt="theatrical poster for Black Widow"
                    title="Black Widow"
                    synopsis="Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."
                    date="July 9, 2021"
                    director="Cate Shortland"
                    writer="Jac Schaeffer & Ned Benson, Eric Pearson"
                    trailer="https://www.youtube.com/watch?v=Fp9pNPdNwjI"
                />
                <ShowCard
                    id="whatif"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/what_if_s1_digital_keyart_vert_v3_lg.jpg"
                    alt="logo poster for WHAT IF...?"
                    title="WHAT IF...?"
                    synopsis="Marvel Studios' first animated show features The Watcher (Jeffrey Wright) as our guide through the alternate realities of the Marvel Cinematic Universe multiverse."
                    date="August 11, 2021"
                    director="Bryan Andrew"
                    writer="Ashley Bradley"
                    episodes="9"
                    trailer="https://www.youtube.com/watch?v=x9D0uUKJ5KI"
                />
                <MovieCard
                    id="blackwidow"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd-04.jpg"
                    alt="theatrical poster for Shang-Chi and the Legend of the Ten Rings"
                    title="Shang-Chi and the Legend of the Ten Rings"
                    synopsis="Marvel Studios' Shang-Chi and The Legend of The Ten Rings stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."
                    date="September 3, 2021"
                    director="Destin Daniel Cretton"
                    writer="David Callaham, Destin Daniel Cretton and Andrew Lanham"
                    trailer="https://www.youtube.com/watch?v=giWIr7U1deA"
                />
                <MovieCard
                    id="eternals"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_03.jpg"
                    alt="theatrical poster for Eternals"
                    title="Eternals"
                    synopsis="Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants."
                    date="November 5, 2021"
                    director="Chloé Zhao"
                    writer="Kaz Firpo, Ryan Firpo, Chloé Zhao"
                    trailer="https://www.youtube.com/watch?v=x_me3xsvDgk"
                />
                <ShowCard
                    id="hawkeye"
                    poster="https://pbs.twimg.com/media/FCeJytEXEAYdOL9?format=jpg&name=large"
                    alt="logo poster for Hawkeye"
                    title="Hawkeye"
                    synopsis="Follows original Avenger Clint Barton aka Hawkeye (Jeremy Renner) and fan-favorite Marvel comics character Kate Bishop (Hailee Steinfeld), who picks up the bow and quiver."
                    date="November 24, 2021"
                    director="Rhys Thomas, Bert and Bertie"
                    writer="TBA"
                    episodes="TBA"
                    trailer="https://www.youtube.com/watch?v=5VYb3B1ETlk"
                />
                <MovieCard
                    id="nowayhome"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_02.jpg"
                    alt="logo poster for Spider-Man: No Way Home"
                    title="Spider-Man: No Way Home"
                    synopsis="Following the jaw-dropping cliffhanger from Spider-Man: Far From Home, Peter Parker aka Spider-Man (Tom Holland) is joined by Doctor Strange (Benedict Cumberbatch) for this new adventure. Jamie Foxx and Alfred Molina return."
                    date="December 17, 2021"
                    director="Jon Watts"
                    writer="Chris McKenna & Erik Sommers"
                    trailer="https://www.youtube.com/watch?v=JfVOs4VSpmA"
                />
                <MovieCard
                    id="doctorstrange2"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_digital_keyart_vert_v3_lg.jpg"
                    alt="logo poster for Doctor Strange in the Multiverse of Madness"
                    title="Doctor Strange in the Multiverse of Madness"
                    synopsis="Stephen Strrange aka Doctor Strange (Benedict Cumberbatch) is joined by Wanda Maximoff aka the Scarlet Witch (Elizabeth Olsen) in the sequel to the 2016 film."
                    date="May 6, 2022"
                    director="Sam Raimi"
                    writer="Jade Halley Bartlett, Michael Waldron"
                    trailer="https://www.youtube.com/watch?v=Rt_UqUm38BI"
                />
                <ShowCard
                    id="msmarvel"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmarvel_lob_crd_02_0.jpg"
                    alt="logo poster for Ms. Marvel"
                    title="Ms. Marvel"
                    synopsis="Ms. Marvel introduces viewers to Kamala, a 16-year old Pakistani American from Jersey City.  An aspiring artist, an avid gamer, and a voracious fan-fiction scribe, she is a huge fan of the Avengers — and one in particular, Captain Marvel. But Kamala has always struggled to find her place in the world — that is until she gets super powers like the heroes she’s always looked up to. Iman Vellani stars as Kamala Khan aka Ms. Marvel. Episodes are directed by Executive Producers Adil El Arbi & Bilall Fallah, Meera Menon, and Sharmeen Obaid-Chinoy."
                    date="Summer 2022"
                    director="Adil El Arbi & Bilall Fallah, Meera Menon and Sharmeen Obaid-Chinoy"
                    writer="TBA"
                    episodes="TBA"
                    trailer="https://www.youtube.com/watch?v=TRNI9TtBM5E"
                />
                <UpcomingMovie
                    id="thor4"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_02_0.jpg"
                    alt="logo poster for Thor: Love and Thunder"
                    title="Thor: Love and Thunder"
                    synopsis="God of thunder Thor (Chris Hemsworth) returns alongside the Guardians of the Galaxy in a space-hopping adventure that features the return of Jane Foster (Natalie Portman). Thor must face off against new villain Gorr the God Butcher (Christian Bale)."
                    date="July 8, 2022"
                    director="Taika Waititi"
                    writer="Taika Waititi, Jennifer Kaytin Robinson"
                />
            </div>
        </div>
    )
}

export default Phase4;