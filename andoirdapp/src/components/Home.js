import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';

const Home = (props) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text> Welcome {props.firstName}</Text>
          <Text>
            Looking for a job? Apply online for latest jobs in Pakistan. Browse
            vacancies and apply for the latest jobs near you.
          </Text>
          {props.isLogged ? (
            <Button title="Explore Jobs" />
          ) : (
            <Button title="Login" />
          )}
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.userReducer.user.firstName,
  isLogged: state.userReducer.loggedIn,
  jobCount: state.jobReducer.jobs.length,
});

export default connect(mapStateToProps)(Home);
