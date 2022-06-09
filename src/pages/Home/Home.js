import React from "react";
import Navbar from "../../components/Navbar.js";
import "./Home.css";
import BtnSection from "../../components/BtnSection.js";
import UpdateModal from "../../components/UpdateModal";

const Home = () => {
  return (
    <div>
      <h1 className="header-text">
        The ultimate resource for new and seasoned fans of the Marvel Cinematic
        Universe
      </h1>
      <h2 className="black-text ">
        Discover the past and future of the MCU. Learn about the MCU-inspired
        lands and attractions at Disney Parks around the world. Get answers to
        your important questions. Everything you need to know is right here.
      </h2>
      <UpdateModal buttonLabel="What's new to the site?" />
      <BtnSection />
    </div>
  );
};
export default Home;
