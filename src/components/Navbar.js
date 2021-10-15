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
        <NavB className="navColor" color="danger" light expand="md">
            <NavbarBrand href="/" className="navbar-text" size="lg" style={{ "color": "white", "fontSize": "35px" }}>MCU and You</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse className="navbar-right" isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar style={{ "fontSize": "25px"}}>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="navbar-text" style={{ "color": "white"}}>
                                The MCU So Far
                            </DropdownToggle>
                            <DropdownMenu right className="text-center">
                            <DropdownItem href="/InfinitySaga" className="navbar-text" style={{ "color": "#df0000", "fontSize": "20px" }}>
                                    The Infinity Saga
                                </DropdownItem>
                            <DropdownItem href="/NextSaga" className="navbar-text" style={{ "color": "#df0000", "fontSize": "20px" }}>
                                    Phase 4 & Beyond
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                        <NavL href="/DisneyParks" className="navbar-text" style={{"color": "white"}}>Marvel & The Disney Parks</NavL>
                        </NavItem>
                        <NavItem>
                        <NavL href="/FAQ" className="navbar-text" style={{ "color": "white" }}>FAQ</NavL>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavB>
        // </NavB>
    )
};

export default Navbar;
