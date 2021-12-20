import React from 'react'
import ImgButton from './ImgButton'
import { HashLink } from 'react-router-hash-link'

function BtnSection() {
    return (
        <div className=" home-cards row">
            <h1 className="header-text">What's on now, bro?</h1>
            <ImgButton
                href="/NextSaga#hawkeye"
                image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/apt-106-12941_r2_1.jpg"
                alt="Poster for Hawkeye"
                link="Hawkeye"
                text="Bro, new episodes every Wednesday on Disney+, Bro"
            />
            <h1 className="header-text">What's' Next?</h1>
            <ImgButton
                href="/NextSaga#doctorstrange2"
                image="https://marvelblog.com/wp-content/uploads/2021/06/Doctor-Strange-in-the-Multiverse-of-Madness-Cast-Gift.png"
                alt="Doctor Strange in the Multiverse of Madness poster"
                link="Doctor Strange in the Multiverse of Madness"
                text="In theaters May 6th, 2022"
            />
            <h1 className="header-text">Disney+ Day</h1>
            <ImgButton
                href="/NextSaga#whatsnext"
                image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/disney_day_2021.jpg"
                alt="Artwork featuring logos for Marvel shows announced at Disney+ Day"
                link="New live action and animated shows coming to Disney+"
                text="Check out what was announced on Disney+ Day in Phase 4 & Beyond"
            />
            <h1 className="header-text">What do you want to know?</h1>
            <ImgButton
                href="/FAQ#venom"
                image="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/Venom-Let-There-Be-Carnage-Marvel-Sony-Tom-Hardy.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5"
                alt="Avengers Campus concept art"
                link="Is Venom part of the MCU?"
                text="Find out in the FAQ"
            />
        </div>
    )
}

export default BtnSection
