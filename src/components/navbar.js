import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
// import MCUPhases from '../pages/MCUPhases';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <NavLink to='/Home' className="navbar-brand" >
                        Marvel Site
                    </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        <NavLink to='/MCUPhases' className="nav-link">
                            MCU So Far
                        </NavLink>
                        <NavLink to='/Upcoming' className="nav-link">
                            Upcoming projects
                        </NavLink>
                        <NavLink to='DisneyParks' className="nav-link">
                            Disney Parks
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;