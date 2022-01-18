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
          text="Bro, all episodes now streaming on Disney+, Bro"
        />
        <h1 className="header-text">What's' Next?</h1>
        <ImgButton
          href="/NextSaga#moonknight"
          image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/moonknight_lob_crd_04.jpg"
          alt="Moon Knight poster"
          link="Moon Knight"
          text="Streaming March 30th, 2022 on Disney+"
        />
        <ImgButton
          href="/NextSaga#doctorstrange2"
          image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_digital_keyart_vert_v3_lg.jpg"
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
          alt="Venom 2 poster"
          link="Is Venom part of the MCU?"
          text="Find out in the FAQ"
        />
      </div>
    );
}

export default BtnSection
