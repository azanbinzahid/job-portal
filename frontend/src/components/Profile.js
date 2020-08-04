import React from 'react'
import {useSelector} from 'react-redux'
import { Container, Row, Col,  Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import EditProfileForm from 'components/EditProfileForm'



const Profile = () => {

    const userReducer = useSelector(state => state.userReducer)



    return (
        <Container>
            <Jumbotron align="center">
                <h1> {userReducer.user.first_name +" "+userReducer.user.last_name} </h1>
                <h3> Profile Page </h3>
            </Jumbotron>

            <Row>
                <Col>
                    <EditProfileForm/>
                </Col>
                <Col>
                    <h1> Jobs Applied </h1>
                    <ListGroup>
                    {   
                        userReducer.user.jobs_applied.map((job, index)=>(
                            <LinkContainer key={index} to={`/jobs/${job.id}`}>
                            <ListGroupItem action key={index}>{job.title}</ListGroupItem>
                            </LinkContainer>
                        ))
                    }
                    </ListGroup>
                </Col>

            </Row>
        </Container>
    )
}

export default Profile;
