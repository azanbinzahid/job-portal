import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col,  Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import EditProfileForm from 'components/EditProfileForm'



const Profile = (props) => {

    return (
        <Container>
            <Jumbotron align="center">
                <h1> {props.firstName +" "+props.lastName} </h1>
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
                        props.jobsApplied.map((job, index)=>(
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

const mapStateToProps = state => ({
    firstName: state.userReducer.user.firstName,
    lastName: state.userReducer.user.lastName,
    jobsApplied: state.userReducer.user.jobsApplied,
  });

export default connect(mapStateToProps)(Profile);
