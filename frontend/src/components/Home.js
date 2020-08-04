import React from 'react'
import {useSelector} from 'react-redux'
import { Container, Jumbotron, Button, Badge} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Slider from 'components/Slider'

export default function Home() {

    const userReducer = useSelector(state => state.userReducer)
    const jobReducer = useSelector(state => state.jobReducer)
    const jobCount = jobReducer.jobs.length

    return (
        <div>
            <Slider/>
            <Container className="p-5">
                <Jumbotron>
                    <h2> Welcome {userReducer.user.first_name}</h2>
                    <p>
                    Looking for a job? Apply online for latest jobs in Pakistan. Browse vacancies and apply for the latest jobs near you.
                    </p>
                    {
                        userReducer.loggedIn ? ( 
                        <LinkContainer to="/jobs">
                        <Button variant="primary">
                            Explore Jobs <Badge variant="light">{jobCount}</Badge>
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
