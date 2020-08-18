import React from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Title,
  Body,
  Content,
  Button,
  Text,
  H1,
  Grid,
  Col,
} from 'native-base';

const Home = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title style={{alignSelf: 'center'}}>Job Portal</Title>
        </Body>
      </Header>
      <Content contentContainerStyle={{flex: 1}} padder>
        <Grid style={{alignItems: 'center'}}>
          <Col>
            <H1 style={StyleSheet}>Welcome {props.firstName}</H1>
            <Text style={StyleSheet}>
              Looking for a job? Apply online for latest jobs in Pakistan.
              Browse vacancies and apply for the latest jobs near you.
            </Text>
            {props.isLogged ? (
              <Button
                bordered
                style={StyleSheet}
                onPress={() => props.navigation.navigate('Jobs')}>
                <Text>Explore Jobs</Text>
              </Button>
            ) : (
              <Button
                bordered
                style={StyleSheet}
                onPress={() => props.navigation.navigate('Login')}>
                <Text>Login</Text>
              </Button>
            )}
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

const StyleSheet = {
  alignSelf: 'center',
  margin: 15,
};

const mapStateToProps = (state) => ({
  firstName: state.userReducer.user.firstName,
  isLogged: state.userReducer.loggedIn,
});

export default connect(mapStateToProps)(Home);
