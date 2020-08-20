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
  Footer,
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
            {job.location.map((loc, index) => (
              <Badge key={index} info style={{margin: 2}}>
                <Text>{loc}</Text>
              </Badge>
            ))}
          </CardItem>

          <CardItem bordered>
            <Text note>Qualification: </Text>
            {job.qualification.map((ele, index) => (
              <Badge key={index} success style={{margin: 2}}>
                <Text>{ele} </Text>
              </Badge>
            ))}
          </CardItem>

          <CardItem bordered>
            <Text note>Category: </Text>
            {job.category.map((cat, index) => (
              <Badge key={index} warning style={{margin: 2}}>
                <Text>{cat} </Text>
              </Badge>
            ))}
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <Body>
          {!job.applicants.includes(props.username) ? (
            <Button full onPress={() => handleClick('Applied', 'success')}>
              <Text>Apply Now</Text>
            </Button>
          ) : (
            <Button
              full
              danger
              onPress={() => handleClick('Withdrawn', 'warning')}>
              <Text>Withdraw Application</Text>
            </Button>
          )}
        </Body>
      </Footer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  job: state.jobReducer.job,
  username: state.userReducer.user.username,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    applyJob: (jobId, msg, type) => dispatch(applyJob(jobId, msg, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);
