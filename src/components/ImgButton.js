import React from 'react';
import { Button,  Link } from 'reactstrap';
// import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const ImgButton = (props) => {
    return (
            <div className="ImgButton">
                <Button color="primary" className="homeBtn" href={props.href}>
                    <img 
                        className="ImgButton img"
                        src={props.image}
                        alt={props.alt}
                    />
                    <h1 className="btn-text">{props.link}</h1>
                    <p className="info-text">{props.text}</p>
                </Button>
            </div>
    );
};

export default ImgButton;