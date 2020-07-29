import React from 'react'
import {  Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const JobItem = ({job}) => {

 
    return (
        <Card border="primary">
            <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> {job.company} </Card.Subtitle>
            <Card.Text>
                {job.description}
            </Card.Text>
            <LinkContainer to={`jobs/${job.id}`}>
                <Button variant="primary"> View Details </Button>
            </LinkContainer>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>{job.location}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}


export default JobItem;