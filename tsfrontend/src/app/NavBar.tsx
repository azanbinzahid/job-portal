import React, { FC } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { logUserOut } from "redux/actions";
import AlertBox from "alerts/AlertBox";
import { RootState } from "redux/reducers";

const Title = styled.h3`
  display: inline;
  font-weight: bold;
  color: #1d83d4;
  vertical-align: bottom;
`;

const NavItem = (toPath: string, menuName: string) => {
  return (
    <>
      <LinkContainer to={toPath}>
        <Nav.Link>
          <h4>{menuName}</h4>
        </Nav.Link>
      </LinkContainer>
      <p>{menuName === "Jobs" ? <Badge variant="primary">New</Badge> : null}</p>
    </>
  );
};

type Props = {
  isLogged: boolean;
  logUserOut: () => void;
};

const NavBar: FC<Props> = (props) => {
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
          <AlertBox />
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
