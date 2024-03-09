import { useState } from "react";
import {Col, Row, Image, Form, Navbar, Nav, Button} from "react-bootstrap"
import Login from './Login';

const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLoginModalOpen = () => {
      setShowLoginModal(true);
    };
  
    const handleLoginModalClose = () => {
      setShowLoginModal(false);
    };

  return (
    <>
    <Row className="py-3 px-4 m-0" style={{background: '#ffffffa8'}}>
        <Col xs={12} md={7} className="d-flex gap-3">
            <Image rounded width={40} height={40}  src="https://source.unsplash.com/random">
            </Image>
            <Form className="w-100">
                <Form.Control type="search" className="p-2" placeholder="search by artist, art, style, medium">
                </Form.Control>
            </Form>
        </Col>
        <Col xs={5} className='desktop-only'>
            <Navbar className="p-0 w-100">
                <Nav className="p-0 w-100" style={{justifyContent: 'space-between'}}>
                    <Nav.Link href="#home" style={{fontWeight: '600'}}>Buy</Nav.Link>
                    <Nav.Link href="#features" style={{fontWeight: '600'}}>Sell</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight: '600'}}>Gallery</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight: '600'}}>Classes</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight: '600'}}>Notifications</Nav.Link>
                    <Nav.Link className="p-1"><Button onClick={handleLoginModalOpen} variant="light"  className="p-1 px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                        Log In</Button>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-1"><Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
                        Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Col>
    </Row>
    <Login show={showLoginModal} handleClose={handleLoginModalClose} />
    </>
  )
}

export default Header