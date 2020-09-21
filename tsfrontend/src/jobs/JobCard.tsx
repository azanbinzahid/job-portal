import React, { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { Job } from "redux/types";
import { truncate } from "utils/helper";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { FaMapMarkerAlt, FaStream } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

interface Props extends RouteComponentProps<any> {
  job: Job;
}

const JobCard: FC<Props> = (props) => {
  const { job, history } = props;
  return (
    <Card border="primary">
      <Card.Header>
        <FaStream /> {job.category.join(", ")}
      </Card.Header>
      <Card.Body>
        <Card.Title className="font-weight-bold">{job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <HiOfficeBuilding /> {job.company}
        </Card.Subtitle>
        <Card.Text>{truncate(job.description)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <FaMapMarkerAlt /> {job.location.join(", ")}
        <Button
          style={{
            float: "right",
            padding: "revert",
          }}
          onClick={() => {
            history.push(`/jobs/${job.id}`);
          }}
          variant="outline-primary"
        >
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default withRouter(JobCard);
