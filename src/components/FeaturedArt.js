import { Row, Col } from 'react-bootstrap';
import { getAllArtWork } from './utils';
import { useState, useEffect} from 'react'

const FeaturedArt = ({}) => {

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
      <Row className='m-0 px-4 bg-theme' style={{ background: 'rgb(255 255 255 / 79%)' }}>
        <h3 style={{marginBottom: '40px', fontWeight: '600'}}>Featured Artwork</h3>
        {featuredArt.map((art, index) => (
          <Col key={art.id} xs={2}>
            <div style={{background: `url("${art.images[0]}")`,backgroundSize: `140px`, height: `140px`, borderRadius: '8px'}}></div>
            <p className='mt-2'>{art.medium}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedArt;
