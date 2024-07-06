import { useState } from "react";
import {Col, Row, Image, Form, Navbar, Nav, Button, Dropdown} from "react-bootstrap"
import Login from './Login';
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import Signup from "./Signup";
import { Link } from "react-router-dom";

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
    <Row className="py-3 px-4 m-0" style={{background: 'rgb(255 255 255 / 90%)'}}>
        <Col xs={12} md={7} className="d-flex gap-3">
            <Link to="/"><Image rounded width={40} height={40} style={{objectFit:'cover'}} src="https://picsum.photos/1920/1080"/></Link>
            <Form className="w-100">
                <Form.Control type="search" className="p-2" placeholder="search by artist, art, style, medium">
                </Form.Control>
            </Form>
        </Col>
        <Col xs={5} className='only-desktop'>
            <Navbar className="p-0 w-100">
                <Nav className="p-0 w-100" style={{justifyContent: 'space-between'}}>
                    <Link to="/marketplace" className="text-dark" style={{fontWeight: '600'}}>Buy</Link>
                    <Link to="/marketplace/sell" className="text-dark" style={{fontWeight: '600'}}>Sell</Link>
                    <Link to="/marketplace" className="text-dark" style={{fontWeight: '600'}}>Gallery</Link>
                    <Link to="/classes" className="text-dark" style={{fontWeight: '600'}}>Classes</Link>
                    <Link to="/announcements" className="text-dark" style={{fontWeight: '600'}}>Announcements</Link>
                    {!auth.currentUser ?
                    <>
                    <Nav.Link className="p-1"><Button onClick={handleLoginModalOpen} variant="light"  className="p-1 blue-button px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                        Log In</Button>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-1"><Button onClick={handleLogoutModalOpen} variant="dark"  className="p-1 blue-button  px-4" style={{borderRadius: '1000px'}}>
                        Sign Up</Button>
                    </Nav.Link>
                    </> :
                    <>
                    <Nav.Link className="p-1"><Button onClick={logoutUser} variant="light"  className="p-1 red-button  px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    Log out</Button>
                    </Nav.Link>
                    <Dropdown align="end">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{borderRadius: '1000px'}}>
                        My Account
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="d-flex flex-column gap-2" href="#/action-1">
                            <Image roundedCircle width={40} onClick={() => console.log('test')} height={40}  src="https://picsum.photos/1920/1080"/>
                            <h6 style={{fontSize: '17px', fontWeight: '700'}}>Kaif Ahmed</h6>
                        </Dropdown.Item>
                        <Dropdown.Item href="/dashboard/my-courses" className="text-center w-100">Dashboard</Dropdown.Item>
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