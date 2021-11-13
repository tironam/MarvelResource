import React from 'react'
import ImgButton from './ImgButton'
import { HashLink } from 'react-router-hash-link'

function BtnSection() {
    return (
        <div className=" home-cards row">
            <h1 className="header-text">Disney+ Day</h1>
                <ImgButton
                    href="/NextSaga#whatsnext"
                    image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/disney_day_2021.jpg"
                    alt="Artwork featuring logos for Marvel shows announced at Disney+ Day"
                    link="New live action and animated shows coming to Disney+"
                    text="Check out what was announced on Disney+ Day in Phase 4 & Beyond"
                />
                <h1 className="header-text">What's on now?</h1>
                <ImgButton
                    href="/NextSaga#whatif"
                    image="https://media.vanityfair.com/photos/6114a5d50b170c6defc5cb3f/master/pass/What%20If%20lead%20image.jpeg"
                    alt="Poster for WHAT IF...?"
                    link="WHAT IF...?"
                    text="All episodes now streaming on Disney+"
                />
            <h1 className="header-text">What's' Next?</h1>
            <ImgButton
                href="/NextSaga#nowayhome"
                image="https://bgr.com/wp-content/uploads/2021/08/spider-man-no-way-home-spider-man-trailer.jpg?quality=82&strip=all&w=1440&h=810&crop=1"
                alt="WandaVision Poster"
                link="Spider-Man: No Way Home"
                text="In theaters December 17th"
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
