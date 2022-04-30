import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../component/Loding';
import ErrorMessage from '../../component/ErrorMessage';
import './LoginPage.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';

const LoginPage = ({ history }) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if(userInfo){
            navigate('/UserProfile');
        }
    }, [ navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

  return (
      <div className='mt-5'>
       <Container className='cc'> 
          <h1 className='title'>Log in</h1>
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {loading && <Loading/>}
          <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    value={email}
                    placeholder="Enter email" 
                    onChange={(e) => setEmail(e.target.value)}
                   />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
          <Row>
              <Col>
                New user? <Link to="/register">Register Here</Link>
              </Col>
          </Row>
       </Container> 
      </div>
  )
}

export default LoginPage;
