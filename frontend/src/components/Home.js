import React from 'react'
import {connect} from 'react-redux'
import { Container, Jumbotron, Button, Badge} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Slider from 'components/Slider'

const Home = (props) => {


    return (
        <div>
            <Slider/>
            <Container className="p-5">
                <Jumbotron>
                    <h2> Welcome {props.firstName}</h2>
                    <p>
                    Looking for a job? Apply online for latest jobs in Pakistan. Browse vacancies and apply for the latest jobs near you.
                    </p>
                    {
                        props.isLogged ? ( 
                        <LinkContainer to="/jobs">
                        <Button variant="primary">
                            Explore Jobs <Badge variant="light">{props.jobCount}</Badge>
                        </Button>
                        </LinkContainer>
                        ) : (
                            <LinkContainer to="/login">
                            <Button variant='primary'> Login </Button>
                            </LinkContainer>                        
                        )
                    }
                </Jumbotron>
            </Container>
        </div>
    )
}


const mapStateToProps = state => ({
    firstName: state.userReducer.user.firstName,
    isLogged: state.userReducer.loggedIn,
    jobCount: state.jobReducer.jobs.length
  });

export default connect(mapStateToProps)(Home);
