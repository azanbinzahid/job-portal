import React, {useLayoutEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import {fetchJob} from 'redux/actions'



const JobList = (props) => {

    const { params: { jobId } } = props.match;

    const jobReducer = useSelector(state => state.jobReducer)
    const userReducer = useSelector(state => state.userReducer)
    
    useLayoutEffect(() => {
        props.fetchJob(jobId)
    }, [props, jobId])

    if (!userReducer.loggedIn) {
        return <Redirect to="/login"/>
    }

    const job = jobReducer.job

    return (
        <Container>
            <Jumbotron align="center">
                    <h1> Job Details Page </h1>
            </Jumbotron>
            <Jumbotron>
            <h3> Title: {job.title} </h3>            
            <h3> Category: {job.category} </h3>            
            <h3> Company: {job.company} </h3>            
            <h3> Description: {job.description} </h3>            
            <h3> Location: {job.location} </h3>            
            <h3> Qualifications: {job.qualifications} </h3>            
            <h3> Experiance: {job.experiance} </h3>            
            <h3> Salaray: {job.salaray} </h3>            
            <h3> Posted On: {job.datestamp} </h3>   
            <Button> Apply Now </Button>

         </Jumbotron>
        </Container>        
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    }
  }
  
export default connect(null, mapDispatchToProps)(JobList);
