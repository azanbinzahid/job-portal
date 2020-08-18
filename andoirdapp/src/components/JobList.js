import React from 'react';
import {connect} from 'react-redux';
import JobItem from './JobItem';
import {View, Text} from 'react-native';

const JobList = (props) => {
  return (
    <View>
      <View align="center">
        <Text> Job Listing Page </Text>
      </View>
      <View>
        {props.jobs.map((job) => (
          <JobItem key={job.id} job={job} navigation={props.navigation} />
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobReducer.jobs,
});

export default connect(mapStateToProps)(JobList);
