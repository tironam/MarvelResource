import React from "react";
import ImgButton from "./ImgButton";
import { HashLink } from "react-router-hash-link";

function BtnSection() {
  return (
    <div className=" home-cards row">
      <h1 className="header-text">What's on now?</h1>
      <ImgButton
        image="https://bookriot.com/wp-content/uploads/2022/03/ms-marvel-trailer-1280x720.png"
        alt="Ms. Marvel poster"
        link="Ms. Marvel"
        text="Streaming now on Disney+"
      />
      <h1 className="header-text">Coming Soon To Disney Parks</h1>
      <ImgButton
        href="/DisneyParks#cosmicrewind"
        image="https://media.disneylandparis.com/d4th/en-usd/images/hd00000_2050dec31_world_avengers-campus-digital-key-visual_5-2_tcm1861-236724.jpg?w=1920"
        alt="Avengers Campus Disneyland Paris"
        link="Marvel Avengers Campus"
        text="Opening July 20, 2022 at Disneyland Paris"
      />
      <h1 className="header-text">What's' Next?</h1>
      <ImgButton
        href="/NextSaga#shehulk"
        image="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/aacp0vjsng0ktuejmzdy/disney-plus-marvel-she-hulk"
        alt="She-Hulk"
        link="She-Hulk: Attorney At Law"
        text="Streaming August 17, 2022 on Disney+"
      />
      <ImgButton
        href="/NextSaga#thor4"
        image="https://www.indiewire.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-18-at-10.03.24-AM.png"
        alt="Doctor Strange in the Multiverse of Madness poster"
        link="Thor: Love and Thunder"
        text="In theaters July 8, 2022"
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
