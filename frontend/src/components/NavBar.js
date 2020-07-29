import React from 'react'
import {connect, useSelector} from 'react-redux'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components'
import {logUserOut} from 'redux/actions'




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


const NavBar = (props) => {

    const userReducer = useSelector(state => state.userReducer)
    
    return (
        <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
        <Navbar.Brand> <Title> Job Portal </Title></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                {NavItem("/", "Home")}
                {
                        !userReducer.loggedIn ? 
                            <>
                            {NavItem("/login", "Login")}
                            {NavItem("/signup", "SignUp")}
                            </>
                         : 
                            <>
                            {NavItem("/jobs", "Jobs")}
                            <Nav.Link onClick={props.logUserOut}> <Item>Logout</Item> </Nav.Link>
                            </>

                }

            </Nav>
        </Navbar.Collapse>
        </Navbar>  
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut()),
    }
  }
  
export default connect(null, mapDispatchToProps)(NavBar);
