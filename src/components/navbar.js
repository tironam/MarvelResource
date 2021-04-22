import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar as NavB,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as NavL,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
// import MCUPhases from '../pages/MCUPhases';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavB className="navbar navbar-expand-md navbar-light bg-light">
            {/* <div className="container-fluid">
                    <NavLink to='/Home' className="navbar-brand" >
                        MCU & You
                    </NavLink>
                <NavbarToggler onClick={toggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav"> */}
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        {/* <NavLink to='/MCUPhases' className="nav-link">
                            The MCU So Far
                        </NavLink>
                        <NavLink to='/Upcoming' className="nav-link">
                            What's Next?
                        </NavLink>
                        <NavLink to='DisneyParks' className="nav-link">
                            Marvel in the Disney Parks
                        </NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
          </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div> */}
            <NavB color="light" light expand="md">
                <NavbarBrand href="/">MCU & You</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className="navbar-right" isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                The MCU So Far
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/MCUPhases">
                                    Phase 4 & Beyond
                                </DropdownItem>
                                <DropdownItem>
                                    The Infinity Saga
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Phases? Saga? MCU FAQ!
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavL href="Upcoming">What's Next?</NavL>
                        </NavItem>
                    </Nav>
                    <NavbarText>Marvel & The Disney Parks</NavbarText>
                </Collapse>
            </NavB>
        </NavB>
    )
};

export default Navbar;