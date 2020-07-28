import React from 'react'
import {  Jumbotron } from 'react-bootstrap';

const JobItem = ({job}) => {
 
    return (
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
        </Jumbotron>
    )
}


export default JobItem;