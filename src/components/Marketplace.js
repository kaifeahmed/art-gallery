import { useState, useEffect} from 'react'
import FeaturedArt from './FeaturedArt';
import { Col, Row, Button } from 'react-bootstrap';
import { getAllArtWork } from './utils';

const Marketplace = () => {
  const [artworkListings, setArtworkListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listings = await getAllArtWork();
        console.log('listings');
        console.log(listings);
        setArtworkListings(listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

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

 <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
    {artworkListings.map((artwork) => (
      <Col xs={4} key={artwork.id} className='mb-4'>
        <div style={{ background: `url('${artwork.images[0]}') no-repeat center/cover`, height: '280px' }}></div>
        <div className='d-flex flex-column gap-0 mt-2'>
          <h6 className='m-0'>{artwork.title}</h6>
/          <p className='m-0' style={{ fontStyle: 'italic' }}>{artwork.artist}, {artwork.year}</p>
          <p className='m-0' style={{ fontSize: '14px' }}>{artwork.provenance}</p>
          <p className='m-0' style={{ fontWeight: 'bold', fontSize: '14px' }}>{artwork.medium}</p>
        </div>
      </Col>
    ))}
  </Row>
  </>
  )
}

export default Marketplace