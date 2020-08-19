import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { autoLogin, fetchJobs } from "redux/actions";
import Home from "components/Home";
import Login from "components/Login";
import Signup from "components/Signup";
import NavBar from "components/NavBar";
import JobList from "components/JobList";
import SingleJob from "components/SingleJob";
import Profile from "components/Profile";
import ProtectedRoute from "components/ProtectedRoute";

type Props = {
  autoLogin: () => void;
  fetchJobs: () => void;
};
const Router: FC<Props> = (props) => {
  useEffect(() => {
    props.autoLogin();
    props.fetchJobs();
  }, [props]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/jobs/:jobId" component={SingleJob} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/jobs" component={JobList} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  autoLogin,
  fetchJobs,
};

export default connect(null, mapDispatchToProps)(Router);
