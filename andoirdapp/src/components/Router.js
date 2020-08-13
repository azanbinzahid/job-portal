import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {autoLogin, fetchJobs} from '../redux/actions';
import Home from './Home';
// import Login from './Login';
// import Signup from './Signup';
// import NavBar from './NavBar';
// import JobList from './JobList';
// import SingleJob from './SingleJob';
// import Profile from './Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Router = (props) => {
  useEffect(() => {
    props.autoLogin();
    props.fetchJobs();
  }, [props]);

  return (
    // <NavBar />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Scree name="Home" component={Home} />
        {/* <Stack.Scree name="/login" component={Login} />
        <Stack.Scree name="/signup" component={Signup} />
        <Stack.Scree name="/jobs/:jobId" component={SingleJob} />
        <Stack.Scree name="/profile" component={Profile} />
        <Stack.Scree name="/jobs" component={JobList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    fetchJobs: () => dispatch(fetchJobs()),
  };
};

export default connect(null, mapDispatchToProps)(Router);
