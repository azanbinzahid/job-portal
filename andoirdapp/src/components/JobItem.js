import React from 'react';
import {View, Text, Button} from 'react-native';

const truncate = (str) => {
  return str.length > 200 ? str.substring(0, 180) + '...' : str;
};

const JobItem = (props) => {
  const job = props.job;
  return (
    <View>
      <Text>{job.category.map((cat) => cat + ', ')}</Text>
      <Text>{job.title}</Text>
      <Text> {job.company} </Text>
      <Text>{truncate(job.description)}</Text>
      <Button
        title=" View Details"
        onPress={() => props.navigation.navigate('SingleJob', {jobId: job.id})}
      />
      {job.location.map((loc, index) => (
        <Text key={index}>{loc}</Text>
      ))}
    </View>
  );
};

export default JobItem;
