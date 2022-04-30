import React, { useEffect, useState }  from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../component/Loding';
import ErrorMessage from '../../component/ErrorMessage';
import {useNavigate} from 'react-router-dom'
import './RegisterPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [name , setName]= useState("");
  const [password, setPassword] = useState("");

  const dispatch= useDispatch();
  const navigate= useNavigate();
  const userRegister= useSelector((state) => state.userRegister);
  const {loading, error, userInfo}= userRegister;


  useEffect (() => {
      if(userInfo){
          navigate('/UserProfile');
      }
  })
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(register(name,email,password));
  };


  return (
    <div className='mt-5'>
    <Container className='cc'> 
       <h1 className='title'>Sign up</h1>
       {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
       {loading && <Loading/>}
       <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Name</Form.Label>
               <Form.Control 
                 type="name"
                 placeholder="Name"
                 value={name}
                  onChange={(e) => setName(e.target.value)} />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control 
                 type="email" 
                 value={email}
                 placeholder="Enter email" 
                 onChange={(e) => setEmail(e.target.value)}
                />
               <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
               </Form.Text>
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
             Already registered? <Link to="/login">Login Here</Link>
           </Col>
       </Row>
    </Container> 
   </div>
  )
}

export default RegisterPage