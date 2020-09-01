import React, { FC } from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";
import { RootState } from "redux/reducers";

interface PrivateRouteProps extends RouteProps {
  isLogged: boolean;
  loadded: boolean;
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | any;
}

export const ProtectedRoute: FC<PrivateRouteProps> = (props) => {
  const { component: Component, ...rest } = props;

  if (!props.loadded) {
    return (
      <Container<React.ElementType> align="center" className="p-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return props.isLogged ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  isLogged: state.userReducer.loggedIn,
  loadded: state.userReducer.loadded,
});

export default connect(mapStateToProps)(ProtectedRoute);
