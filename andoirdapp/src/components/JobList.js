import React from 'react';
import {connect} from 'react-redux';
import JobItem from './JobItem';
import {Container, Content} from 'native-base';
import MyHeader from './MyHeader';

const JobList = (props) => {
  return (
    <Container>
      <MyHeader {...props} />
      <Content padder>
        {props.jobs.map((job) => (
          <JobItem key={job.id} job={job} navigation={props.navigation} />
        ))}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobReducer.jobs,
});

export default connect(mapStateToProps)(JobList);
