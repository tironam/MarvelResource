import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer bg-light text-center text-lg-start">
                <div className="footer text-center p-3 text-white">
                    Michael Tirona © 2021
                    <a className="text-white" href="https://tironam.com/" target="blank"> tironam.com</a>
                    <FontAwesomeIcon icon='apple' />
                </div>
        </div>
    );
}

export default Footer;