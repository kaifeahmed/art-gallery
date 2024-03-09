import { useState } from "react";
import {Col, Row, Image, Form, Navbar, Nav, Button, Dropdown} from "react-bootstrap"
import Login from './Login';
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import Signup from "./Signup";

const Header = () => {
    const auth = useAuth();
    const { logout } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLoginModalOpen = () => {
      setShowLoginModal(true);
    };
  
    const handleLoginModalClose = () => {
      setShowLoginModal(false);
    };
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutModalOpen = () => {
        setShowLogoutModal(true);
    };
  
    const handleLogoutModalClose = () => {
        setShowLogoutModal(false);
    };

    const logoutUser = () => {
        try {
            logout();
            toast.success('You have been logged out.');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong..');
        }
    }

  return (
    <>
    <Row className="py-3 px-4 m-0" style={{background: '#ffffffa8'}}>
        <Col xs={12} md={7} className="d-flex gap-3">
            <Image rounded width={40} height={40} style={{objectFit:'cover'}} src="https://source.unsplash.com/random">
            </Image>
            <Form className="w-100">
                <Form.Control type="search" className="p-2" placeholder="search by artist, art, style, medium">
                </Form.Control>
            </Form>
        </Col>
        <Col xs={5} className='desktop-only'>
            <Navbar className="p-0 w-100">
                <Nav className="p-0 w-100" style={{justifyContent: 'space-between'}}>
                    <Nav.Link href="#home" className="text-dark" style={{fontWeight: '600'}}>Buy</Nav.Link>
                    <Nav.Link href="#features" className="text-dark" style={{fontWeight: '600'}}>Sell</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark" style={{fontWeight: '600'}}>Gallery</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark" style={{fontWeight: '600'}}>Classes</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark" style={{fontWeight: '600'}}>Notifications</Nav.Link>
                    {!auth.currentUser ?
                    <>
                    <Nav.Link className="p-1"><Button onClick={handleLoginModalOpen} variant="light"  className="p-1 px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                        Log In</Button>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-1"><Button onClick={handleLogoutModalOpen} variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
                        Sign Up</Button>
                    </Nav.Link>
                    </> :
                    <>
                    <Nav.Link className="p-1"><Button onClick={logoutUser} variant="light"  className="p-1 px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    Log out</Button>
                    </Nav.Link>
                    <Dropdown align="end">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{borderRadius: '1000px'}}>
                        My Account
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><Image roundedCircle width={40} onClick={() => console.log('test')} height={40}  src="https://source.unsplash.com/random"/>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">View Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Artwork</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </>
                    }
                </Nav>
            </Navbar>
        </Col>
    </Row>
    <Login show={showLoginModal} handleClose={handleLoginModalClose} />
    <Signup show={showLogoutModal} handleClose={handleLogoutModalClose} />
    </>
  )
}

export default Header