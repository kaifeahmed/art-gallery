import { useState, useEffect} from 'react'
import FeaturedArt from './FeaturedArt';
import { Col, Row, Button } from 'react-bootstrap';
import { getAllArtWork } from './utils';
import AllArtwork from './AllArtwork';

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
    <AllArtwork/>
  </Row>
  </>
  )
}

export default Marketplace