import React from 'react';
import MovieCard from './MovieCard.js'
import UpcomingMovie from './UpcomingMovie.js'
import UpcomingShow from '../Shows/UpcomingShow.js'

const WhatsNext = () => {
    return (
        <div className="container-fluid">
            <h1 className="text">What's Next?</h1>
            <div className="row text-center">
                <UpcomingShow
                    id="moonknight"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/moonknight_lob_crd_02_0.jpg"
                    alt="logo poster for Moon Knight"
                    title="Moon Knight"
                    synopsis="Marc Spector (Oscar Isaac) is a former CIA agent that's left for dead in the Egyptian desert, before his life is saved by the Moon God Khonshu and he becomes Moon Knight."
                    date="TBA 2022"
                    director="Mohamed Diab"
                    writer="TBA"
                    episodes="TBA"
                />
                <UpcomingShow
                    id="shehulk"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/shehulk_lob_crd_01_0.jpg"
                    alt="logo poster for She-Hulk"
                    title="She-Hulk"
                    synopsis="Tatiana Maslany plays Jennifer Walters aka She-Hulk in the upcoming comedy series. The show sees the return of Tim Roth's Abomination and Hulk himself Mark Ruffalo."
                    date="TBA 2022"
                    director="Kat Coiro and Anu Valia"
                    writer="Jessica Gao"
                    episodes="10"
                />
                <UpcomingMovie
                    id="blackpanther2"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther2_lob_crd_02.jpg"
                    alt="logo poster for Black Panther: Wakanda Forever"
                    title="Black Panther: Wakanda Forever"
                    synopsis="The follow up to 2018's Best Picture nominee Black Panther."
                    date="November 11, 2022"
                    director="Ryan Coogler"
                    writer="Ryan Coogler"
                />
                <UpcomingMovie
                    id="themarvels"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/themarvels_lob_crd_01.jpg"
                    alt="logo poster for The Marvels"
                    title="The Marvels"
                    synopsis="Carol Danvers aka Captain Marvel (Brie Larson) returns in this new adventure, joined by Monica Rambeau (Teyonah Parris) from WandaVision and Ms. Marvel herself Kamala Khan (Iman Vellani)."
                    date="February 17, 2023"
                    director="Nia DaCosta"
                    writer="TBA"
                />
                <UpcomingMovie
                    id="antman3"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/antman_lob_crd_01_0.jpg"
                    alt="logo poster for Ant-Man and the Wasp: Quantumania"
                    title="Ant-Man and the Wasp: Quantumania"
                    synopsis="Scott Lang aka Ant-Man (Paul Rudd) and Hope Van Dyne aka The Wasp (Evangeline Lilly) return with Jonathan Majors taking on the role of villainous Kang the Conqueror."
                    date="July 28, 2023"
                    director="Peyton Reed"
                    writer="Jeff Loveness"
                />
                <UpcomingShow
                    id="secretinvasion"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/secretinvasion_lob_crd_01.jpg"
                    alt="logo poster for Secret Invasion"
                    title="Secret Invasion"
                    synopsis="Based on the hit Marvel comics storyline, Nick Fury (Samuel L. Jackson) and Talos (Ben Mendelsohn) face a secret Skrull invasion of Earth in Marvel Studios' next big event, joined by Kinsgley Ben-Adir, Olivia Colman, and Emilia Clarke."
                    date="TBA"
                    director="Thomas Bezuka and Ali Selim"
                    writer="Kyle Bradstreet"
                    episodes="TBA"
                />
                <UpcomingShow
                    id="gotgholiday"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/gotg-holiday_lob_crd_01_0.jpg"
                    alt="logo poster for The Guardians of the Galaxy Holiday Special"
                    title="The Guardians of the Galaxy Holiday Special"
                    synopsis="The Guardians of the Galaxy return for a holiday special. Yes, it's canon."
                    date="Holidays 2022"
                    director="James Gunn"
                    writer="James Gunn"
                    episodes="1"
                />
                <UpcomingShow
                    id="ironheart"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironheart_lob_crd_01_0.jpg"
                    alt="logo poster for Ironheart"
                    title="Ironheart"
                    synopsis="Dominique Thorne takes on the roll of Riri Williams, young genius inventor who creates her own suit of technologically advanced armor."
                    date="TBA"
                    director="TBA"
                    writer="Chinaka Hodge"
                    episodes="6"
                />
                <UpcomingShow
                    id="armorwars"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/armorwars_lob_crd_01_0.jpg"
                    alt="logo poster for Armor Wars"
                    title="Armor Wars"
                    synopsis="Tony Stark's armor has fallen into the wrong hands, and James 'Rhodey' Rhodes aka War Machine (Don Cheadle) returns to put an end to it."
                    date="TBA"
                    director="TBA"
                    writer="TBA"
                    episodes="TBA"
                />
                <UpcomingMovie
                    id="fantasticfour"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/fantasticfour_lob_crd_01_0.jpg"
                    alt="logo poster for Fantastic Four"
                    title="Fantastic Four"
                    synopsis="Marvel's first family comes home in this upcoming adaption of the beloved comic from 'Spider-Man' director Jon Watts."
                    date="TBA"
                    director="Jon Watts"
                    writer="TBA"
                />
                <UpcomingMovie
                    id="gotgvol3"
                    poster="https://i.pinimg.com/originals/fe/51/89/fe51897d65b86b2d96e3e325670ff53e.jpg"
                    alt="Image of Rocket with Baby Groot"
                    title="Guardians of the Galaxy Vol. 3"
                    synopsis="The Guardians of the Galaxy return for another adventure."
                    date="May 5th, 2023"
                    director="James Gunn"
                    writer="James Gunn"
                />
                <UpcomingMovie
                    id="blade"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blade_lob_crd_01_0.jpg"
                    alt="logo poster for Blade"
                    title="Blade"
                    synopsis="Academy Award winner Mahershala Ali takes on the mantle of Blade in this new take on the iconic vampire hunter from Marvel Studios."
                    date="TBA"
                    director="TBA"
                    writer="TBA"
                />
                <UpcomingShow
                    id="iamgroot"
                    poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/iamgroot_lob_crd_01_0.jpg"
                    alt="logo poster for I Am Groot"
                    title="I Am Groot"
                    synopsis="A series of animated shorts following the galaxy-saving Groot."
                    director="TBA"
                    writer="TBA"
                    episodes="TBA"
                />
                <UpcomingShow
                    id="wakandashow"
                    poster="https://tv-fanatic-res.cloudinary.com/iu/s--3457zZKz--/f_auto,q_auto/v1612280249/ryan-coogler-attends-black-panther-premiere"
                    alt="Image of Ryan Coogler"
                    title="Untitled show about Wakanda"
                    synopsis="Ryan Coogler (Black Panther, Black Panther 2) is developing an untitled show about Wakanda for Disney+."
                    director="TBA"
                    writer="TBA"
                    episodes="TBA"
                />
            </div>
        </div>
    )
}

export default WhatsNext;