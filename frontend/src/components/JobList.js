import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import {fetchJobs} from 'redux/actions'
import JobItem from 'components/JobItem'
import { Container, Jumbotron } from 'react-bootstrap';


const JobList = (props) => {

    const jobReducer = useSelector(state => state.jobReducer)
    
    useEffect(() => {
        props.fetchJobs()
    }, [props])


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



const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
    }
  }
  
export default connect(null, mapDispatchToProps)(JobList);
