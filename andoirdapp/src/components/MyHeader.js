import React from 'react';
import {Header, Body, Title, Button, Text, Left, Right} from 'native-base';
import AlertBox from './AlertBox';
import {connect} from 'react-redux';

const MyHeader = (props) => {
  return (
    <Header style={{backgroundColor: props.headerColor}}>
      <Left style={StyleSheet.body}>
        <Button transparent onPress={() => props.navigation.toggleDrawer()}>
          <Text>Menu</Text>
        </Button>
      </Left>
      <Body style={StyleSheet.body}>
        <Title style={StyleSheet.header}>{props.route.name}</Title>
      </Body>
      <Right style={StyleSheet.body}>
        <AlertBox />
      </Right>
    </Header>
  );
};

const StyleSheet = {
  header: {
    alignSelf: 'center',
    fontSize: 21,
  },
  body: {
    flex: 1,
  },
};
const mapStateToProps = (state) => ({
  headerColor: state.themeReducer.headerColor,
});

export default connect(mapStateToProps)(MyHeader);
