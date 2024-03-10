import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
const Footer = () => {
  return (
    <>
    <Row className="py-3 px-4 m-0 footer-div d-flex justify-content-between" style={{background: 'rgb(255 255 255 / 80%)'}}>
    <Col xs={2}>
        <h6 style={{fontSize: '17px'}}>About  Us</h6>
        <div className='mt-3 d-flex flex-column gap-3'>
            <Link style={{textDecoration: 'none', color: 'black'}}>About</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>About</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>About</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>About</Link>
        </div>
    </Col>
    <Col xs={2}>
        <h6 style={{fontSize: '17px'}}>Resources</h6>
        <div className='mt-3 d-flex flex-column gap-3'>
            <Link style={{textDecoration: 'none', color: 'black'}}>Open Source</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Blog</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>The Art Genome Project</Link>
        </div>
    </Col>
    <Col xs={2}>
        <h6 style={{fontSize: '17px'}}>Partnerships</h6>
        <div className='mt-3 d-flex flex-column gap-3'>
            <Link style={{textDecoration: 'none', color: 'black'}}>Artsy for Galleries</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Artsy for Karachi</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Artsy for Lahore</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Artsy for Islamabad</Link>
        </div>
    </Col>
    <Col xs={2}>
        <h6 style={{fontSize: '17px'}}>Support</h6>
        <div className='mt-3 d-flex flex-column gap-3'>
            <Link style={{textDecoration: 'none', color: 'black'}}>About Us</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Meet Our Team</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Help Center</Link>
            <Link style={{textDecoration: 'none', color: 'black'}}>Privacy Policy</Link>
        </div>
    </Col>
    </Row>
    <Row className='px-5 m-0' style={{background: 'rgb(255 255 255 / 80%)'}}>
    <hr className='m-0'/>
    </Row>

    <Row className='px-4 py-3 m-0' style={{background: 'rgb(255 255 255 / 80%)'}}>
        <Col xs={10} className='d-flex gap-2 justify-content-start align-items-center'>
        <Image rounded width={40} height={40} style={{objectFit:'cover', marginRight: '5px'}} src="https://source.unsplash.com/random"/>
        <p className='p-0 m-0' style={{color: '#6a6a6a', fontSize: '14px'}}>© 2024 Art Gallery</p>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>About Us</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Terms of Use</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Privacy Policy</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Security</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Conditions of Sale</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>ACA Seller’s Agreement</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Buyer Guarantee</Link>
        <Link className='p-0' style={{textDecoration: 'none', color: '#6a6a6a', fontSize: '14px'}}>Do not sell my personal information</Link>
        </Col>
        <Col xs={2} className='d-flex justify-content-end align-items-center m-0'>
            <div className='d-flex gap-3'>
            <FcGoogle />
            <FcGoogle />
            <FcGoogle />
            <FcGoogle />
            <FcGoogle />
            <FcGoogle />
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Footer