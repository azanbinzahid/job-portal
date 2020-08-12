import React from 'react'
import {connect} from 'react-redux'
import JobItem from 'components/JobItem'
import { Container, Jumbotron, CardColumns } from 'react-bootstrap';


const JobList = (props) => {
    return (
        <Container>
        <Jumbotron align="center">
                <h1> Job Listing Page </h1>
        </Jumbotron>
        <CardColumns>
        {props.jobs.map(job => (
            <JobItem key={job.id} job={job}/>
        ))}
        </CardColumns>
        </Container>        
    )
}


const mapStateToProps = state => ({
    jobs: state.jobReducer.jobs
  });

export default connect(mapStateToProps)(JobList);
