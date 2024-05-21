import { useState, useEffect} from 'react'
import FeaturedClasses from './FeaturedClasses';
import { Col, Row, Button } from 'react-bootstrap';
import AllClasses from './AllClasses';

const Classes = () => {

  return (
    <>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
      <Col xs={10}>
        <h1>Paint as you learn</h1>
        </Col>
      <Col xs={2}>
      <Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
        Browse by Type</Button>
      </Col>
    </Row>

    <FeaturedClasses  />

 <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
    <AllClasses/>
  </Row>
  </>
  )
}

export default Classes