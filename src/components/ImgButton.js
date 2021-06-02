import React from 'react';
import { Button,  Link } from 'reactstrap';
// import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const ImgButton = (props) => {
    return (
        <div className="text-center">
            <div className="col">
                <Button color="primary" className="homeBtn" href={props.href}>
                    <img 
                        className="ImgButton"
                        src={props.image}
                        alt={props.alt}
                    />
                    <p className="btn-text">{props.link}</p>
                </Button>
            </div>
            {/* <div className="col">
                <Button color="danger">{props.link}</Button>
            </div> */}
        </div>
    );
};

export default ImgButton;