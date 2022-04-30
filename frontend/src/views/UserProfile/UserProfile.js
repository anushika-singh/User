import React, { useEffect, useState } from 'react'
import { Button, Container, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import '../UserProfile/UserProfile.css';
import { updateProfile } from '../../actions/userActions';
import Loading from '../../component/Loding';
import ErrorMessage from '../../component/ErrorMessage';

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch= useDispatch();
  const navigate= useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {loading, error, success} = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password }));
  };

  return (
    <div className='mt-5'>
      <Container className='cc'>
      <h1 className='head'>Profile</h1>
      <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
      </Container>
      <Button style={{backgroundColor: 'brown', borderBlock: '0px', margin: '30px', width: '100px' }} onClick={() => {
            localStorage.removeItem("userInfo");
            navigate('/');
          }}>Logout</Button>
    </div>
  )
}

export default UserProfile