import { useState, useEffect} from 'react'
import { Col } from 'react-bootstrap';
import { getAllArtWork } from './utils';

const AllArtwork = () => {
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
    {artworkListings.map((artwork) => (
      <Col xs={4} key={artwork.id} className='mb-4'>
        <a href={'/single-art/'+artwork.id}>
          <div style={{ background: `url('${artwork.images[0]}') no-repeat center/cover`, height: '280px' }}></div>
          <div className='d-flex flex-column gap-0 mt-2'>
            <h6 className='m-0'>{artwork.title}</h6>
  /          <p className='m-0' style={{ fontStyle: 'italic' }}>{artwork.artist}, {artwork.year}</p>
            <p className='m-0' style={{ fontSize: '14px' }}>{artwork.provenance}</p>
            <p className='m-0' style={{ fontWeight: 'bold', fontSize: '14px' }}>{artwork.medium}</p>
          </div>
        </a>
      </Col>
    ))}
  </>
  )
}

export default AllArtwork