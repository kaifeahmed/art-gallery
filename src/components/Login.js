import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

function Login({ show, handleClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      const user = await login(email, password);
      toast.success('You have been logged in.')
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong..');
    }
  }

  return (
    <>
      {/* Use the 'show' prop from the parent to control the modal visibility */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Image rounded width={40} height={40} src="https://source.unsplash.com/random" alt="Art"></Image>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Button variant="dark" className="p-1 p-3 w-100" style={{ borderRadius: '1000px' }} onClick={loginUser}>
                Login
              </Button>
            </Col>
          </Row>
          <p className='text-center m-4' style={{ color: '#6a6a6a' }}>or</p>
        </Modal.Body>
        <Modal.Footer>
          {/* Your footer content */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
