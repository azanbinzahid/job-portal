import React, {useLayoutEffect, useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { Container, Jumbotron, Button, Card, ListGroup, CardColumns, Spinner } from 'react-bootstrap';
import styled from 'styled-components'
import {fetchJob} from 'redux/actions'

const Title = styled.div`
    color: white
`;



const JobList = (props) => {
    useEffect(() => {
        props.fetchJob(jobId)
    }, [props])
    
    const { params: { jobId } } = props.match;
    const jobReducer = useSelector(state => state.jobReducer)
    const job = jobReducer.job
    if(!job.category) {
        return (
            <Container align="center" className="p-5">
            <Spinner animation="border" />
            </Container>
        )
    }

    return (
        <Container>
            <Jumbotron align="center">
                    <h1> Job Details Page </h1>
                    <Button variant="primary">Apply Now</Button>
            </Jumbotron>


            <CardColumns>
            <Card bg="primary">
            <Card.Header> <Title> Job Title </Title></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{job.title}</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card bg="primary">
                <Card.Header> <Title>Company </Title></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{job.company}</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card bg="primary">
                <Card.Header> <Title>Location(s) </Title></Card.Header>
                <ListGroup variant="flush">
                    {
                        job.location.map((ele)=>(
                        <ListGroup.Item>{ele}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card>
            <Card bg="primary">
                <Card.Header> <Title>Job Description </Title></Card.Header>
                <Card.Body style={{background: "white"}}>
                <Card.Text style={{textAlign: "justify"}}> {job.description} </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="primary">
                <Card.Header> <Title>Category(s) </Title></Card.Header>
                <ListGroup variant="flush">
                    {
                        job.category.map((ele)=>(
                        <ListGroup.Item>{ele}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card>
            <Card bg="primary">
                <Card.Header> <Title>Qualification(s) </Title></Card.Header>
                <ListGroup variant="flush">
                    {
                        job.qualification.map((ele)=>(
                        <ListGroup.Item>{ele}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card>
            <Card bg="primary">
                <Card.Header> <Title>Salary </Title></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{job.salaray}</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card bg="primary">
                <Card.Header> <Title>Experiance </Title></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{job.experiance}</ListGroup.Item>
                </ListGroup>
            </Card>

            </CardColumns>
        </Container>        
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    }
  }
  
export default connect(null, mapDispatchToProps)(JobList);
