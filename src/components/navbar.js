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
        // <NavB className="navbar navbar-expand-md navbar-light bg-light">
            <NavB color="light" light expand="md">
                <NavbarBrand href="/">MCU & You</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse className="navbar-right" isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                The MCU So Far
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/Phase4">
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
                            <NavL href="/Upcoming">What's Next?</NavL>
                        </NavItem>
                        <NavItem>
                            <NavL href="/DisneyParks">Marvel & The Disney Parks</NavL>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavB>
        // </NavB>
    )
};

export default Navbar;