import React from 'react'
import {connect, useSelector} from 'react-redux'
import {Navbar, Nav, Badge} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components'
import {logUserOut} from 'redux/actions'
import AlertBox from 'components/AlertBox'


const Item = styled.h4``;
const Title = styled.h3`
    display: inline;
    font-weight: bold;
    color: #1d83d4;
    vertical-align: bottom;
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
        <Navbar.Brand>
            <img
            alt=""
            src="https://image.flaticon.com/icons/svg/3232/3232975.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{ <Title>  Job Portal</Title> }
       </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <AlertBox/>
                {NavItem("/", "Home")}
                {NavItem("/jobs", "Jobs")} 
                <p><Badge variant="primary">New</Badge></p>
                {
                        !userReducer.loggedIn ? 
                            <>
                            {NavItem("/login", "Login")}
                            {NavItem("/signup", "SignUp")}
                            </>
                         : 
                            <>
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
