import React from 'react'
import FeaturedArt from './FeaturedArt';
import { Col, Row, Button } from 'react-bootstrap';
const Marketplace = () => {
    const artworkGenre = [
        {
          id: '1',
          title: 'Contemporary Art',
          featured_image: 'https://source.unsplash.com/random',
        },
        {
          id: '1',
          title: 'Painting',
          featured_image: 'https://source.unsplash.com/random',
        },
        {
          id: '1',
          title: 'Street Art',
          featured_image: 'https://source.unsplash.com/random',
        },
        {
          id: '1',
          title: 'Nimah Gobir',
          featured_image: 'https://source.unsplash.com/random',
        },
        {
          id: '1',
          title: 'Nimah Gobir',
          featured_image: 'https://source.unsplash.com/random',
        },
        {
          id: '1',
          title: 'Nimah Gobir',
          featured_image: 'https://source.unsplash.com/random',
        },
      ];
  return (
    <>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
      <Col xs={10}>
        <h1>Collect art and design online</h1>
        </Col>
      <Col xs={2}>
      <Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
        Browse by Genre</Button>
      </Col>
    </Row>
    <FeaturedArt  />

    
    </>
  )
}

export default Marketplace