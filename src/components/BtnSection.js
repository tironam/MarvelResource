import React from "react";
import ImgButton from "./ImgButton";
import { HashLink } from "react-router-hash-link";

function BtnSection() {
  return (
    <div className=" home-cards row">
      <h1 className="header-text">What's on now?</h1>
      <ImgButton
        href="/NextSaga#moonknight"
        image="https://www.slashfilm.com/img/gallery/heres-what-happens-when-you-scan-the-qr-codes-in-moon-knight/intro-1649259889.jpg"
        alt="Poster for Moon Knight"
        link="Moon Knight"
        text="Streaming now on Disney+"
      />
      <h1 className="header-text">Coming Soon To Disney Parks</h1>
      <ImgButton
        href="/DisneyParks#cosmicrewind"
        image="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/703ef9a7-9091-8a66-0d7a-bd2bc4bb4a00/600x400.jpg"
        alt="Guardians of the Galaxy: Cosmic Rewind"
        link="Guardians of the Galaxy: Cosmic Rewind"
        text="Opening May 27, 2022 at Walt Disney World"
      />
      <h1 className="header-text">What's' Next?</h1>
      <ImgButton
        href="/NextSaga#msmarvel"
        image="https://bookriot.com/wp-content/uploads/2022/03/ms-marvel-trailer-1280x720.png"
        alt="Ms. Marvel poster"
        link="Ms. Marvel"
        text="Streaming June 8th, 2022 on Disney+"
      />
      <ImgButton
        href="/NextSaga#doctorstrange2"
        image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_teaser2_printed_1-sht_v4_lg.jpg"
        alt="Doctor Strange in the Multiverse of Madness poster"
        link="Doctor Strange in the Multiverse of Madness"
        text="In theaters May 6th, 2022"
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

export default BtnSection;
