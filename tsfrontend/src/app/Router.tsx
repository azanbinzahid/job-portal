import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { autoLogin, fetchFilters } from "redux/actions";
import Home from "home/Home";
import Login from "auth/Login";
import Signup from "auth/Signup";
import NavBar from "app/NavBar";
import Footer from "app/Footer";
import Jobs from "jobs/Jobs";
import JobDetailed from "jobs/JobDetailed";
import Profile from "profile/Profile";
import ProtectedRoute from "app/ProtectedRoute";
import { Container } from "react-bootstrap";
import AlertBox from "alerts/AlertBox";

type Props = {
  autoLogin: () => void;
  fetchFilters: () => void;
};
export const Router: FC<Props> = (props) => {
  const { autoLogin, fetchFilters } = props;
  useEffect(() => {
    autoLogin();
    fetchFilters();
  }, [fetchFilters, autoLogin]);

  return (
    <BrowserRouter>
      <NavBar />
      <Container
        fluid
        style={{
          minHeight: "70vh",
          padding: 0,
        }}
      >
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "absolute",
            zIndex: 1,
            // top: 0,
            right: 0,
          }}
        >
          <AlertBox />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/jobs/:jobId" component={JobDetailed} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/jobs/" component={Jobs} />
          <Route component={Home} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  autoLogin,
  fetchFilters,
};

export default connect(null, mapDispatchToProps)(Router);
