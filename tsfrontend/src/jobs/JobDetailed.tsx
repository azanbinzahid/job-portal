import React, { useEffect, useCallback, FC, useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Card,
  Spinner,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { fetchJob, applyJob } from "redux/actions";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import SectionHeading from "app/common/SectionHeading";
import { FaBeer } from "react-icons/fa";

const OverviewItem = (icon: String, key: String, value: any) => {
  return (
    <Col xs="12" sm="6" className="overview-item">
      <p>
        <FaBeer /> {key}:
      </p>
      <h5>
        <Badge variant="primary" pill>
          {value}
        </Badge>
      </h5>
    </Col>
  );
};

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
      setLoadindSpinner(true);
    },
    [props, jobId]
  );

  const [loadindSpinner, setLoadindSpinner] = useState(true);

  if (job == null || loadindSpinner) {
    setTimeout(() => {
      setLoadindSpinner(false);
    }, 2000);
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
                {OverviewItem("", "Experiance", job.experiance)}
                {OverviewItem("", "Salary", job.salaray)}
                {OverviewItem("", "Company", job.company)}
                {OverviewItem("", "Category", job.category.join(", "))}
                {OverviewItem(
                  "",
                  "Qualification",
                  job.qualification.join(", ")
                )}
                {OverviewItem("", "Location", job.location.join(", "))}
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
          <Card border="primary" className="mb-2">
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
