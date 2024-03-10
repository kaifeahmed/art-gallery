import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Button} from 'react-bootstrap';
const HeroCarousel = () => {
  return (
    <Carousel controls={false} variant='dark' indicators={true} fade className='mt-4' style={{ height: '82vh' }}>
    <Carousel.Item className='h-100'>
    <Row className='h-100'>
      <Col xs={6} style={{ background: 'url("https://source.unsplash.com/1920x1080/?modern-art")', borderRadius: '8px', height:'75vh', backgroundSize: 'cover' }}>
      </Col>
      <Col xs={6} className='d-flex justify-content-center align-items-center' style={{borderRadius: '4px', background: 'rgb(255 255 255 / 79%)'}}>
        <div style={{width: '70%'}}>
          <h1 className='text-dark' style={{fontWeight: '600'}}>doloribus asperiores repellat</h1>
          <p style={{fontSize: '1.5rem', color: '#6b6b6b'}}>doloribus asperiores repellat doloribus asperiores repellat doloribus asperiores repellat</p>
          <Button variant='light' className="p-3 w-50 text-dark" style={{borderRadius: '8px', fontWeight: '500', fontSize: '18px', border: '1px solid black'}}>
            Browse
          </Button>
        </div>
      </Col>
    </Row>
    </Carousel.Item>
    <Carousel.Item>
    <Row className='h-100'>
      <Col xs={6} style={{ background: 'url("https://source.unsplash.com/1920x1080/?abstract-art")', borderRadius: '8px', height:'550px', backgroundSize: 'cover' }}>
      </Col>
      <Col xs={6} className='d-flex justify-content-center align-items-center' style={{borderRadius: '4px', background: 'rgb(255 255 255 / 79%)'}}>
        <div style={{width: '70%'}}>
          <h1 className='text-dark' style={{fontWeight: '600'}}>Art Gallery</h1>
          <p style={{fontSize: '1.5rem', color: '#6b6b6b'}}>doloribus asperiores repellat doloribus asperiores repellat doloribus asperiores repellat </p>
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