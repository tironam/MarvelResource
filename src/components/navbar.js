import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
// import MCUPhases from '../pages/MCUPhases';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                    <NavLink to='/Home' className="navbar-brand" >
                        MCU & You
                    </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        <NavLink to='/MCUPhases' className="nav-link">
                            The MCU So Far
                        </NavLink>
                        <NavLink to='/Upcoming' className="nav-link">
                            What's Next?
                        </NavLink>
                        <NavLink to='DisneyParks' className="nav-link">
                            Marvel in the Disney Parks
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;