import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {fetchJob, applyJob, autoLogin} from '../redux/actions';
import {
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Body,
  Badge,
  Container,
} from 'native-base';
import MyHeader from './MyHeader';

const SingleJob = (props) => {
  var jobId = 1;
  if (props.route.params) {
    jobId = props.route.params.jobId;
  }

  const {fetchJob, job} = props;

  useEffect(() => {
    fetchJob(jobId);
  }, [fetchJob, jobId]);

  const handleClick = useCallback(
    (msg, type) => {
      props.autoLogin();
      props.applyJob(jobId, msg, type);
    },
    [props, jobId],
  );

  if (!job.category) {
    return null;
  }

  return (
    <Container>
      <MyHeader {...props} />
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>{job.title}</Text>
          </CardItem>

          <CardItem bordered>
            <Text note>Company: </Text>
            <Text>{job.company} </Text>
          </CardItem>

          <CardItem bordered>
            <Text note>Experiance: </Text>
            <Text>{job.experiance}y </Text>
          </CardItem>

          <CardItem bordered>
            <Text note>Salary: </Text>
            <Text>{job.salaray} PKR </Text>
          </CardItem>

          <CardItem bordered>
            <Body>
              <Text note>Description: </Text>
              <Text>{job.description}</Text>
            </Body>
          </CardItem>

          <CardItem bordered>
            <Text note>Location: </Text>
            {job.location.map((loc) => (
              <>
                <Badge info>
                  <Text>{loc}</Text>
                </Badge>
                <Text> </Text>
              </>
            ))}
          </CardItem>

          <CardItem bordered>
            <Text note>Qualification: </Text>
            {job.qualification.map((ele) => (
              <>
                <Badge success>
                  <Text>{ele} </Text>
                </Badge>
                <Text> </Text>
              </>
            ))}
          </CardItem>

          <CardItem bordered>
            <Text note>Category: </Text>
            {job.category.map((cat) => (
              <>
                <Badge warning>
                  <Text>{cat} </Text>
                </Badge>
                <Text> </Text>
              </>
            ))}
          </CardItem>
        </Card>
        <Content>
          {!job.applicants.includes(props.username) ? (
            <Button
              style={StyleSheet.button}
              rounded
              primary
              onPress={() => handleClick('Applied', 'success')}>
              <Text>Apply Now</Text>
            </Button>
          ) : (
            <Button
              rounded
              style={StyleSheet.button}
              light
              onPress={() => handleClick('Application Withdrawn', 'warning')}>
              <Text>Withdraw Application</Text>
            </Button>
          )}
        </Content>
      </Content>
    </Container>
  );
};

const StyleSheet = {
  button: {
    alignSelf: 'center',
    margin: 15,
  },
};

const mapStateToProps = (state) => ({
  job: state.jobReducer.job,
  username: state.userReducer.user.username,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    autoLogin: () => dispatch(autoLogin()),
    applyJob: (jobId, msg, type) => dispatch(applyJob(jobId, msg, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);
