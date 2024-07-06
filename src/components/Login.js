import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { FcGoogle } from "react-icons/fc";

function Login({ show, handleClose }) {
  const { login, googleSignIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      await login(email, password);
      toast.success('You have been logged in.');
      handleClose();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const signInWithGoogle = async () => {
    try {
      googleSignIn();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* Use the 'show' prop from the parent to control the modal visibility */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className='d-flex gap-3' closeButton>
          <Modal.Title>
            <Image rounded width={40} height={40} src="https://picsum.photos/1920/1080" alt="Art"></Image>
          </Modal.Title>
          <h5 className='m-0' >Art Gallery</h5>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <p style={{ width: '80%', fontSize: '1.6rem', marginTop: '15px', marginBottom: '40px', lineHeight: '1.2', fontWeight: '500' }}>
            Log in to collect art by the world’s leading artists
          </p>
          <Row>
            <Col>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Col sm="12">
                    <Form.Control
                      className='p-3'
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Col sm="12">
                    <Form.Control
                      className='p-3'
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='mb-3' style={{ marginTop: '-10px' }}>
            <Col className='d-flex justify-content-end'>
              <Link to="/" style={{ textDecoration: 'underline', color: '#6a6a6a', textAlign: 'end' }}>Forgot Password?</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="dark" disabled={!email || !password} className="p-1 p-3 w-100" style={{ borderRadius: '1000px' }} onClick={loginUser}>
                Login
              </Button>
            </Col>
          </Row>
          <p className='text-center m-4' style={{ color: '#6a6a6a' }}>or</p>
          <Row>
            <Col>
            <Button variant="light" onClick={signInWithGoogle} className="p-1 p-3 w-100 d-flex justify-content-center align-items-center gap-2" style={{ borderRadius: '1000px', border: '1px solid black', fontWeight: '500' }}>
              <FcGoogle /> Continue with Google
            </Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {/* Your footer content */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
