import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getAllArtWork } from './utils';
const FeaturedArtHome = ({}) => {
  const [featuredArt, setFeaturedArt] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listings = await getAllArtWork();
        console.log('listings');
        console.log(listings);
        setFeaturedArt(listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);
  return (
    <>
      <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 79%)' }}>
        <h3 style={{marginBottom: '40px', fontWeight: '600'}}>Featured Artwork</h3>
        {featuredArt.map((art, index) => (
          <Col key={art.id} xs={3}>
            <div style={{background: `url("${art.featured_image}")`,backgroundSize: `250px`, height: `250px`, borderRadius: '8px'}}></div>
            <p className='mt-2'>{art.genre}</p>
            <p style={{marginTop: '-17px', fontSize: '24px', fontWeight: '600'}}>{art.title}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedArtHome;
