import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InfoModal from './InfoModal.js'

const Footer = () => {
    const modalText = ["Once I realized I could turn my passion for Marvel into my next web development project, I started working on this website you're looking at right now. There are new Marvel fans everyday, so I wanted to create a simple resource that would have all the basic information they might need or want, and answer some major questions for them. I've really enjoyed making this site and will continue to keep it updated as new information comes along!", <br />, <br />, "I recognize there are going to be more detailed Marvel resource sites about there, but I made this one so I could practice web development. The technologies I used for this site HTML, CSS, React.JS, Reactstrap, Fontawesome, and react-scroll-up-button. Feel free to check out my portfolio site linked down here. It will have all of my contact info. I'd love to work with you and I'm always willing to learn something new! Can't wait to hear from you."]
    return (
        <div className="footer bg-light text-center text-lg-start">
                <div className="footer text-center p-3 text-white">
                    Michael Tirona © 2021
                    <a className="text-white" href="https://tironam.com/" target="blank"> tironam.com </a>
                </div>
                <div className="footer text-white socials-container">
                    <div>
                        <InfoModal 
                            buttonLabel="About the developer" 
                            title="About the developer"
                            text= {modalText}
                        />
                        <a href="https://vm.tiktok.com/ZM8dq4y4F/" target="_blank">
                            <FontAwesomeIcon icon={faTiktok} size="2x" className="socials" />
                        </a>
                         <a href="https://instagram.com/tironam" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="socials" />
                        </a>
                    <a href="https://twitter.com/tironacodes" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="2x" className="socials" />
                        </a>
                    <a href="https://www.linkedin.com/in/tironam/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="socials" />
                    </a>
                    </div>
                </div>
        </div>
    );
}

export default Footer;