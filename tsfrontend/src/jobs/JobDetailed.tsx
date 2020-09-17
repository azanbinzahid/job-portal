import React, { useEffect, useCallback, FC } from "react";
import { connect } from "react-redux";
import { Container, Button, Card, Spinner, Row, Col } from "react-bootstrap";
import { fetchJob, applyJob } from "redux/actions";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import SectionHeading from "app/common/SectionHeading";
import { FaBeer } from "react-icons/fa";

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
export const JobDetailed: FC<Props> = (props) => {
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
      <Container<React.ElementType> align="center" className="pb-5">
        <SectionHeading title={job.title} />
        {!job.applicants.includes(props.username) ? (
          <Button
            size="lg"
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
      </Container>
      <Row>
        <Col md="8">
          <Card className="mb-2" border="primary">
            <Card.Body style={{ background: "white" }}>
              <Card.Title>Overview</Card.Title>
              <Row>
                <Col xs="6">
                  <FaBeer />
                  Experiance:
                  {job.experiance}
                </Col>
                <Col xs="6">
                  <FaBeer />
                  Salary:
                  {job.salaray}
                </Col>
                <Col xs="6">
                  <FaBeer />
                  Company:
                  {job.company}
                </Col>
                <Col xs="6">
                  <FaBeer />
                  Location:
                  {job.location}
                </Col>
                <Col xs="6">
                  <FaBeer />
                  Qualification:
                  {job.qualification}
                </Col>
                <Col xs="6">
                  <FaBeer />
                  Category:
                  {job.category}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card border="primary" className="mb-2">
            <Card.Body style={{ background: "white" }}>
              <Card.Title>Description</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {job.description}
              </Card.Text>
              <Card.Text style={{ textAlign: "justify" }}>
                {job.description}
              </Card.Text>

              <Card.Text style={{ textAlign: "justify" }}>
                {job.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card border="primary">
            <Card.Header>Company Profile </Card.Header>
            <Card.Body>
              <Card.Title>{job.company} </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Button variant="primary">View Company Jobs</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailed as any);
