import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <h1>Welcome</h1>
                </div>
                <div className='buttons'>
                    <Link to='/register'>
                        <Button size='lg' className='landingbutton' > Sign up</Button>
                    </Link>
                    
                    
                    <Link to='/login'>
                        <Button size='lg' className='landingbutton' variant= 'outline-primary' >Log in</Button>
                    </Link>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Home
