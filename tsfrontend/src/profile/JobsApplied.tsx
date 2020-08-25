import React, { FC } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Job } from "redux/types";

type Props = {
  jobsApplied: Job[];
};

const JobsApplied: FC<Props> = ({ jobsApplied }) => {
  return (
    <ListGroup>
      <h3> Jobs Applied </h3>
      {jobsApplied.map((job, index) => (
        <LinkContainer key={index} to={`/jobs/${job.id}`}>
          <ListGroupItem action key={index}>
            {job.title}
          </ListGroupItem>
        </LinkContainer>
      ))}
    </ListGroup>
  );
};

export default JobsApplied;
