import React, { FC } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Job } from "redux/types";
import { truncate } from "utils/helper";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
  job: Job;
}

const JobItem: FC<Props> = (props) => {
  const { job, history } = props;
  return (
    <Card border="primary">
      <Card.Header>{job.category.map((cat) => cat + ", ")}</Card.Header>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
        <Card.Text>{truncate(job.description)}</Card.Text>
        <Button
          onClick={() => {
            history.push(`/jobs/${job.id}`);
          }}
          variant="primary"
        >
          View Details
        </Button>
      </Card.Body>
      <ListGroup variant="flush">
        {job.location.map((loc, index) => (
          <ListGroup.Item key={index}>{loc}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default withRouter(JobItem);
