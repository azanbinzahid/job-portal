import React, { FC } from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { logUserOut } from "redux/actions";
import { RootState } from "redux/reducers";

const Title = styled.h3`
  display: inline;
  font-weight: bold;
  color: #1d83d4;
  vertical-align: bottom;
`;

const NavItem = (toPath: string, menuName: string) => {
  return (
    <LinkContainer to={toPath}>
      <Nav.Link>
        <h4>{menuName}</h4>
      </Nav.Link>
    </LinkContainer>
  );
};

type Props = {
  isLogged: boolean;
  logUserOut: () => void;
};

export const NavBar: FC<Props> = (props) => {
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
          />
          <Title> Job Portal</Title>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!props.isLogged ? (
            <>
              {NavItem("/", "Home")}
              {NavItem("/jobs", "Jobs")}
              {NavItem("/login", "Login")}
              {NavItem("/signup", "SignUp")}
            </>
          ) : (
            <>
              {NavItem("/", "Home")}
              {NavItem("/jobs", "Jobs")}
              {NavItem("/profile", "Profile")}
              <Nav.Link onClick={props.logUserOut}>
                <h4>Logout</h4>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = {
  logUserOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
