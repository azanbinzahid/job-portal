import React from 'react';
import {connect} from 'react-redux';
import {Container, Content, Button, Text, H1, Grid, Col} from 'native-base';
import MyHeader from './MyHeader';

const Home = (props) => {
  return (
    <Container>
      <MyHeader {...props} />
      <Content contentContainerStyle={StyleSheet.content} padder>
        <Grid style={StyleSheet.grid}>
          <Col>
            <H1 style={StyleSheet.text}>
              Welcome {props.firstName ? props.firstName : ''}
            </H1>
            <Text style={StyleSheet.text}>
              Looking for a job? Apply online for latest jobs in Pakistan.
              Browse vacancies and apply for the latest jobs near you.
            </Text>
            {props.isLogged ? (
              <Button
                bordered
                style={StyleSheet.button}
                onPress={() => props.navigation.navigate('Jobs')}>
                <Text>Explore Jobs</Text>
              </Button>
            ) : (
              <>
                <Button
                  bordered
                  style={StyleSheet.button}
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text>Login</Text>
                </Button>
                <Button
                  bordered
                  style={StyleSheet.button}
                  onPress={() => props.navigation.navigate('SignUp')}>
                  <Text>Signup</Text>
                </Button>
              </>
            )}
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

const StyleSheet = {
  button: {
    alignSelf: 'center',
    margin: 15,
  },
  text: {
    alignSelf: 'center',
    margin: 15,
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
};

const mapStateToProps = (state) => ({
  firstName: state.userReducer.user.firstName,
  isLogged: state.userReducer.loggedIn,
});

export default connect(mapStateToProps)(Home);
