import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavItem = (to, menu) => {
    return (
        <LinkContainer to={to}>
            <Nav.Link>
                <h4>
                    {menu}
                </h4>
            </Nav.Link>
        </LinkContainer>
    )
}

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
        <Navbar.Brand> <h2> Job Portal </h2></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                {NavItem("/", "Dashboard")}
                {NavItem("/login", "Login")}
            </Nav>
        </Navbar.Collapse>
        </Navbar>  
    )
}

export default NavBar;
