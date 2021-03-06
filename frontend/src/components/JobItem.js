import React from 'react'
import {  Button, Card, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const truncate =  (str) => {
    return str.length > 200 ? str.substring(0, 180) + "..." : str;
}

const JobItem = ({job}) => {

 
    return (
        <Card border="primary">
            <Card.Header>
            {
                job.category.map(
                    (cat) => (
                        cat + ", "
                    )
                )
            }
            </Card.Header>
            <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> {job.company} </Card.Subtitle>
            <Card.Text>
                {truncate(job.description)}
            </Card.Text>
            <LinkContainer to={`jobs/${job.id}`}>
                <Button variant="primary"> View Details </Button>
            </LinkContainer>
            </Card.Body>
            <ListGroup variant="flush">
                {job.location.map( (loc, index) =>(
                    <ListGroup.Item key={index}>{loc}</ListGroup.Item>
                    )
                )}
            </ListGroup>
        </Card>
    )
}


export default JobItem;