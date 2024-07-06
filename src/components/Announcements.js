import { useState, useEffect} from 'react'
import FeaturedArt from './FeaturedArt';
import { Col, Row, Button } from 'react-bootstrap';
import { getAllAnnouncements } from './utils';
import AllArtwork from './AllArtwork';

const Announcements = () => {
  const [artworkListings, setArtworkListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listings = await getAllAnnouncements();
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
    <Row className='m-0 px-4 py-5 bg-theme gap-3 justify-content-between' style={{ background: 'rgb(255 255 255 / 79%)' }}>
        <h3 style={{marginBottom: '40px', fontWeight: '600'}}>Announcements</h3>
        {artworkListings.map((art, index) => (
          <Col key={art.id} xs={5} className='d-flex gap-3'>
            <div style={{background: `url("${art.images[0]}")`,backgroundSize: `cover`, width: "100%", height: `140px`, borderRadius: '8px'}}></div>
            <div>
                <h3 className='mt-2'>{art.title}</h3>
                <p className='mt-2'>{art.description}</p>
            </div>
          </Col>
        ))}
    </Row>
  </>
  )
}

export default Announcements