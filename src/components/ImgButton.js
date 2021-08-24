import React from 'react';
import './ImgButton.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const ImgButton = (props) => {
    return (
            <div className="ImgButton">
                <Link className="ImgButton-link" to={props.href}>
                    <div className="ImgButton-wrap">
                        <img 
                            className="ImgButton-img"
                            src={props.image}
                            alt={props.alt}
                        />
                    </div>
                    <div>
                        <h1 className="btn-text">{props.link}</h1>
                        <p className="info-text">{props.text}</p>
                    </div>
                </Link>
            </div>
    );
};

export default ImgButton;