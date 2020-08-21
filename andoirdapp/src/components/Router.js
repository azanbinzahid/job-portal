import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {autoLogin, fetchJobs, logUserOut} from '../redux/actions';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import JobList from './JobList';
import SingleJob from './SingleJob';
import Profile from './Profile';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

const Router = (props) => {
  useEffect(() => {
    props.autoLogin();
    props.fetchJobs();
  }, [props]);

  return (
    <NavigationContainer>
      {props.isLogged ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Jobs" component={JobList} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Logout" component={Login} />
          <Drawer.Screen name="Settings" component={Settings} />

          <Drawer.Screen
            name="Job"
            component={SingleJob}
            options={{
              drawerLabel: () => null,
            }}
          />
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="SignUp" component={Signup} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    fetchJobs: () => dispatch(fetchJobs()),
    logUserOut: () => dispatch(logUserOut()),
  };
};
const mapStateToProps = (state) => ({
  isLogged: state.userReducer.loggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
