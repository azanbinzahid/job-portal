import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {autoLogin, fetchJobs, logUserOut} from '../redux/actions';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
// import NavBar from './NavBar';
import JobList from './JobList';
// import SingleJob from './SingleJob';
// import Profile from './Profile';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(drawerProps, logOut) {
  console.log(logOut);
  return (
    <DrawerContentScrollView {...drawerProps}>
      <DrawerItemList {...drawerProps} />
      <DrawerItem
        label="Close drawer"
        onPress={() => drawerProps.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => drawerProps.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Router = (props) => {
  useEffect(() => {
    // props.autoLogin();
    props.fetchJobs();
  }, [props]);

  return (
    // <NavBar />
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(drawerProps) => (
          <CustomDrawerContent {...drawerProps} />
        )}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="/login" component={Login} />

        <Drawer.Screen name="/signup" component={Signup} />
        <Drawer.Screen name="/jobs" component={JobList} />
        {/* 
        <Drawer.Screen name="/jobs/:jobId" component={SingleJob} />
        <Drawer.Screen name="/profile" component={Profile} />
        */}
      </Drawer.Navigator>
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

export default connect(null, mapDispatchToProps)(Router);
