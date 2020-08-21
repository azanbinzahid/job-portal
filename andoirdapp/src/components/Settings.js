import React from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Button,
  Text,
  Body,
  Card,
  CardItem,
  Left,
} from 'native-base';
import MyHeader from './MyHeader';
import {toggleTheme} from '../redux/actions';

const Settings = (props) => {
  return (
    <Container>
      <MyHeader {...props} />
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Text>Change Header Color</Text>
            </Left>
            <Button transparent onPress={() => props.toggleTheme()}>
              <Text>Toggle</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerColor: state.themeReducer.headerColor,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: () => dispatch(toggleTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
