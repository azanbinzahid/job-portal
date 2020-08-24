import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { autoLogin, fetchJobs } from "redux/actions";
import Home from "home/Home";
import Login from "utility/Login";
import Signup from "utility/Signup";
import NavBar from "app/NavBar";
import JobList from "jobs/JobList";
import SingleJob from "jobs/SingleJob";
import Profile from "profile/Profile";
import ProtectedRoute from "app/ProtectedRoute";

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
