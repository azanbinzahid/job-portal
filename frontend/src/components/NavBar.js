import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components'


const Item = styled.h4``;
const Title = styled.h2`
    font-weight: bold;
    color: blue;
`;


const NavItem = (toPath, menuName) => {
    return (
        <LinkContainer to={toPath}>
            <Nav.Link>
                <Item>
                    {menuName}
                </Item>
            </Nav.Link>
        </LinkContainer>
    )
}

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
        <Navbar.Brand> <Title> Job Portal </Title></Navbar.Brand>
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
