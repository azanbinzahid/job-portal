import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {fetchJobs} from 'redux/actions'
import JobItem from 'components/JobItem'
import { Container, Jumbotron } from 'react-bootstrap';


const JobList = (props) => {

    const jobReducer = useSelector(state => state.jobReducer)
    const userReducer = useSelector(state => state.userReducer)
    
    useEffect(() => {
        props.fetchJobs()
    }, [props])

    if (!userReducer.loggedIn) {
        return <Redirect to="/login"/>
    }


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
