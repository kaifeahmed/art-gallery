import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Button} from 'react-bootstrap';
const HeroCarousel = () => {
  return (
    <Carousel fade className='mt-4' style={{ height: '82vh' }}>
    <Carousel.Item>
    <Row className='h-100'>
      <Col xs={6} style={{ background: 'url("https://source.unsplash.com/random")', borderRadius: '8px', height:'550px', backgroundColor: 'red', backgroundSize: 'cover' }}>
      </Col>
      <Col xs={6} className='d-flex justify-content-center align-items-center' style={{borderRadius: '4px', background: '#ffffffa8'}}>
        <div style={{width: '70%'}}>
          <h1 className='text-dark '>doloribus asperiores repellat</h1>
          <p style={{fontSize: '1.5rem', color: '#6b6b6b'}}>doloribus asperiores repellat doloribus asperiores repellat doloribus asperiores repellat</p>
          <Button variant='light' className="p-3 w-50 text-dark" style={{borderRadius: '8px', fontWeight: '500', fontSize: '18px', border: '1px solid black'}}>
            Browse
          </Button>
        </div>
      </Col>
    </Row>
    </Carousel.Item>
  </Carousel>
  )
}

export default HeroCarousel