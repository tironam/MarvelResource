import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer bg-light text-center text-lg-start">
                <div className="footer text-center p-3 text-white">
                    Michael Tirona © 2021
                    <a className="text-white" href="https://tironam.com/" target="blank"> tironam.com </a>
                </div>
                <div className="footer text-white socials-container">
                    <div>
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