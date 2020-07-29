import React from 'react'
import {useSelector} from 'react-redux'
import JobItem from 'components/JobItem'
import { Container, Jumbotron } from 'react-bootstrap';


const JobList = () => {

    const jobReducer = useSelector(state => state.jobReducer)
    
    return (
        <Container>
        <Jumbotron align="center">
                <h1> Job Listing Page </h1>
        </Jumbotron>
        {jobReducer.jobs.map(job => (
            <JobItem key={job.id} job={job}/>
        ))}
        </Container>        
    )
}



export default JobList;
