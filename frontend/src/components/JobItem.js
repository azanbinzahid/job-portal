import React from 'react'
import {  Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const JobItem = ({job}) => {

 
    return (
        <Jumbotron>
           <h3> Title: {job.title} </h3>            
           <h3> Company: {job.company} </h3>            
           <h3> Location: {job.location} </h3>            
           <h3> Posted On: {job.datestamp} </h3>   
           <LinkContainer to={`jobs/${job.id}`}>
               <Button> View Details </Button>
           </LinkContainer>
        </Jumbotron>
    )
}


export default JobItem;