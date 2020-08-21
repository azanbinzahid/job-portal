import React, { useEffect, useCallback, FC } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Container,
  Jumbotron,
  Button,
  Card,
  ListGroup,
  CardColumns,
  Spinner,
} from "react-bootstrap";
import { fetchJob, applyJob } from "redux/actions";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";

const Title = styled.div`
  color: white;
`;

type Props = {
  job: Job;
  username: string;
  applyJob: (jobId: string, msg: string, type: string) => void;
  fetchJob: (jobId: string) => void;
  match: {
    params: {
      jobId: string;
    };
  };
};
const JobList: FC<Props> = (props) => {
  const {
    params: { jobId },
  } = props.match;
  const { fetchJob, job } = props;

  useEffect(() => {
    fetchJob(jobId);
  }, [fetchJob, jobId]);

  const handleClick = useCallback(
    (msg, type) => {
      props.applyJob(jobId, msg, type);
    },
    [props, jobId]
  );

  if (job == null) {
    return (
      <Container<React.ElementType> align="center" className="p-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container>
      <Jumbotron<React.ElementType> align="center">
        <h1> Job Details Page </h1>
        {!job.applicants.includes(props.username) ? (
          <Button
            onClick={() => handleClick("Applied", "success")}
            variant="primary"
          >
            Apply Now
          </Button>
        ) : (
          <Button
            onClick={() => handleClick("Application Withdrawn", "warning")}
            variant="secondary"
          >
            Withdraw Application
          </Button>
        )}
      </Jumbotron>

      <CardColumns>
        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title> Job Title </Title>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{job.title}</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Company </Title>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{job.company}</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Location(s) </Title>
          </Card.Header>
          <ListGroup variant="flush">
            {job.location.map((ele, index) => (
              <ListGroup.Item key={index}>{ele}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Job Description </Title>
          </Card.Header>
          <Card.Body style={{ background: "white" }}>
            <Card.Text style={{ textAlign: "justify" }}>
              {" "}
              {job.description}{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Category(s) </Title>
          </Card.Header>
          <ListGroup variant="flush">
            {job.category.map((ele, index) => (
              <ListGroup.Item key={index}>{ele}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Qualification(s) </Title>
          </Card.Header>
          <ListGroup variant="flush">
            {job.qualification.map((ele, index) => (
              <ListGroup.Item key={index}>{ele}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Salary </Title>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{job.salaray}</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card bg="primary">
          <Card.Header>
            {" "}
            <Title>Experiance </Title>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{job.experiance}</ListGroup.Item>
          </ListGroup>
        </Card>
      </CardColumns>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  job: state.jobReducer.job,
  username: state.userReducer.user.username,
});

const mapDispatchToProps = {
  fetchJob,
  applyJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList as any);
