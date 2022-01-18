import React from 'react';
import MovieCard from './MovieCard.js'
import ShowCard from '../Shows/ShowCard.js'
import UpcomingMovie from './UpcomingMovie.js'
import UpcomingShow from '../Shows/UpcomingShow.js'

const WhatsNext = () => {
    return (
      <div className="container-fluid">
        <h1 className="text" id="whatsnext">
          What's Next?
        </h1>
        <div className="row text-center">
          <UpcomingShow
            id="shehulk"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/shehulk_lob_crd_01_0.jpg"
            alt="logo poster for She-Hulk"
            title="She-Hulk"
            synopsis="She-Hulk follows Jennifer Walters (Tatiana Maslany), a lawyer who specializes in superhuman-oriented legal cases. She-Hulk will welcome a host of Marvel characters to the series, including the Hulk, played by Mark Ruffalo, and the Abomination, played by Tim Roth. The new comedy series coming to Disney+ in 2022 is written by Executive Producer Jessica Gao and directed by Executive Producer Kat Coiro and Anu Valia."
            date="TBA 2022"
            director="Kat Coiro and Anu Valia"
            writer="Jessica Gao"
            episodes="10"
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
            synopsis="The series stars Samuel L. Jackson as Nick Fury and Ben Mendelsohn as the Skrull Talos—characters who first met in Marvel Studios’ Captain Marvel. The crossover comic event series showcases a faction of shapeshifting Skrulls who have been infiltrating Earth for years."
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
            synopsis="The series stars Dominique Thorne as Riri Williams, a genius inventor who creates the most advanced suit of armor since Iron Man."
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
            synopsis="The series of shorts follows Baby Groot’s glory days growing up, and getting into trouble, among the stars. Directed by Executive Producer Kirsten Lepore."
            director="Kirsten Lepore"
            writer="TBA"
            episodes="TBA"
          />
          <UpcomingShow
            id="xmen97"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/xmen97_lob_crd_01_rev.jpg"
            alt="Poster for X-Men '97"
            title="X-Men '97"
            synopsis="The animated series from Marvel Studios explores new stories in the iconic 90s timeline of the original series. Written by Executive Producer Beau DeMayo."
            date="2023"
            director="TBA"
            writer="Beau DeMayo"
            episodes="TBA"
          />
          <UpcomingShow
            id="spidermanfreshmanyear"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfreshmanyear_lob_crd_01.jpg"
            alt="Poster fro Spider-Man: Freshman Year"
            title="Spider-Man: Freshman Year"
            synopsis="The animated series follows Peter Parker on his way to becoming Spider-Man in the MCU, with a journey unlike we've ever seen and a style that celebrates the character’s early comic book roots. Written by Executive Producer Jeff Trammel."
            date="TBA"
            director="TBA"
            writer="Jeff Trammel"
            episodes="TBA"
          />
          <UpcomingShow
            id="echo"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/echo_lob_crd_01.jpg"
            alt="Poster for Echo"
            synopsis="The series stars Alaqua Cox as Maya Lopez, a character who will be introduced in Marvel Studios’ Hawkeye."
            type="Live Action"
            date="TBA"
            director="TBA"
            writer="TBA"
            episodes="TBA"
          />
          <UpcomingShow
            id="whatifs2"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif2_lob_crd_01.jpg"
            alt=""
            synopsis="**SPOILERS FOR WHAT IF...? SEASON 1** The second season of the fan-favorite animated series. After enlisting the Guardians of the Multiverse to stop Infinity Ultron, The Watcher returns in Season 2 of What If...? to meet new heroes and explore more strange new worlds in the MCU’s ever-expanding Multiverse. Directed by Executive Producer Bryan Andrews and written by Executive Producer AC Bradley."
            title="WHAT IF...? Season 2"
            type="Animated"
            date="TBA"
            director="Bryan Andrews"
            writer="AC Bradley"
            episodes="8"
          />
          <UpcomingShow
            id="agatha"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/agathahouseofharkness_lob_crd_01.jpg"
            alt="Poster for Agatha: House of Harkness"
            synopsis="Agatha: House of Harkness will reveal more about the character first introduced in Marvel Studios’ WandaVision. Jac Schaefer, who served as head writer and executive producer on WandaVision, returns for Agatha: House of Harkness. Be sure to hide all dogs named Sparky."
            title="Agatha: House of Harkness"
            type="Live Action"
            date="TBA"
            director="TBA"
            writer="Jac Schaefer"
            episodes="TBA"
          />
          <UpcomingShow
            id="marvelzombies"
            poster="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelzombies_lob_crd_01.jpg"
            alt="Poster for Marvel Zombies"
            synopsis="The animated series from Marvel Studios reimagines the Marvel Universe as a new generation of heroes battle against an ever-spreading zombie scourge. Directed by Executive Producer Bryan Andrews and written by Executive Producer Zeb Wells."
            title="Marvel Zombies"
            type="Animated"
            date="TBA"
            director="Bryan Andrews"
            writer="Zeb Wells"
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
    );
}

export default WhatsNext;