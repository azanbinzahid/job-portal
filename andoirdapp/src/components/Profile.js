import React from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Body,
  Right,
  Left,
  H3,
} from 'native-base';

import EditProfileForm from './EditProfileForm';
import MyHeader from './MyHeader';

const Profile = (props) => {
  return (
    <Container>
      <MyHeader {...props} />
      <Content padder>
        <Card>
          <CardItem header>
            <Body style={{alignItems: 'center'}}>
              <H3>
                {props.firstName} {props.lastName}
              </H3>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Jobs Applied</Text>
          </CardItem>
          {props.jobsApplied.map((job, index) => (
            <CardItem key={index}>
              <Left>
                <Text>{job.title}</Text>
              </Left>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    props.navigation.navigate('Job', {jobId: job.id})
                  }>
                  <Text>View</Text>
                </Button>
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Update Profile</Text>
          </CardItem>

          <EditProfileForm />
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.userReducer.user.firstName,
  lastName: state.userReducer.user.lastName,
  profileImage: 'http://10.0.2.2:8000' + state.userReducer.user.profile.image,
  jobsApplied: state.userReducer.user.jobsApplied,
});

export default connect(mapStateToProps)(Profile);
