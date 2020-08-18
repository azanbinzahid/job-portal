import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {fetchJob, applyJob} from '../redux/actions';

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
    <View>
      <View>
        <Text> Job Details Page </Text>
        {!job.applicants.includes(props.username) ? (
          <Button
            onPress={() => handleClick('Applied', 'success')}
            title="Apply Now"
          />
        ) : (
          <Button
            onPress={() => handleClick('Application Withdrawn', 'warning')}
            variant="secondary"
            title="Withdraw Application"
          />
        )}
      </View>

      <View>
        <View>
          <Text> Job Title</Text>
          <Text>{job.title}</Text>
        </View>

        <View>
          <Text> Company</Text>
          <Text>{job.company}</Text>
        </View>

        <View>
          <Text> Location(s)</Text>
          <View>
            {job.location.map((ele, index) => (
              <Text key={index}>{ele}</Text>
            ))}
          </View>
        </View>
        <View>
          <Text> Job Description</Text>
          <Text> {job.description} </Text>
        </View>

        <View>
          <Text> Category(s)</Text>
          {job.category.map((ele, index) => (
            <Text key={index}>{ele}</Text>
          ))}
        </View>
        <View>
          <Text> Qualification(s)</Text>
          {job.qualification.map((ele, index) => (
            <Text key={index}>{ele}</Text>
          ))}
        </View>
        <View>
          <Text> Salary</Text>
          <Text>{job.salaray}</Text>
        </View>

        <View>
          <Text> Experiance</Text>
          <Text>{job.experiance}</Text>
        </View>
      </View>
    </View>
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
