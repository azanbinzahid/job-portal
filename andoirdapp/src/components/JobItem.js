import React from 'react';
import {Card, Text, CardItem, Body, Badge} from 'native-base';

const truncate = (str) => {
  return str.length > 200 ? str.substring(0, 180) + '...' : str;
};

const JobItem = (props) => {
  const job = props.job;
  return (
    <Card>
      <CardItem header bordered>
        <Text>{job.title}</Text>
      </CardItem>

      <CardItem bordered>
        <Text note>Company: </Text>
        <Text>{job.company} </Text>
      </CardItem>

      <CardItem bordered>
        <Body>
          <Text note>Description: </Text>
          <Text>{truncate(job.description)}</Text>
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
        <Text note>Category: </Text>
        {job.category.map((cat, index) => (
          <Badge key={index} warning style={{margin: 2}}>
            <Text>{cat} </Text>
          </Badge>
        ))}
      </CardItem>
      <CardItem
        bordered
        footer
        button
        onPress={() => props.navigation.navigate('Job', {jobId: job.id})}>
        <Text>View Details</Text>
      </CardItem>
    </Card>
  );
};

export default JobItem;
