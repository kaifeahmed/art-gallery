import { Row, Col, Button} from 'react-bootstrap';

const TrendingArtists = () => {
  const trendingArtists = [
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
    {
      id: '1',
      artist: 'Nimah Gobir',
      nationality: 'Pakistani',
      born: '1968',
      featured_image: 'https://picsum.photos/1920/1080',
    },
  ];

  return (
    <>
      <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
        <Row>
            <Col xs={10}>
            <h3 style={{marginBottom: '40px'}}>Trending Artists on Art Gallery</h3>
            </Col>
            <Col xs={2}>
            <Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
            View All Artists</Button>
            </Col>
        </Row>
        <Row className='mb-5 pb-2' style={{flexWrap: 'nowrap', overflow: 'auto'}}>
        {trendingArtists.map((artist, index) => (
          <Col key={artist.id} xs={3}>
            <div
              style={{
                background: `url("${artist.featured_image}")`,
                height: '250px',
                borderRadius: '8px',
                backgroundSize: 'cover',
              }}
            ></div>
            <Row>
            <Col>
                <p className='mt-2' style={{fontSize: '16px', fontWeight: '600' }}>{artist.artist}</p>
                <p className='mb-3' style={{ marginTop: '-20px', fontSize: '14px', fontStyle:'italic', color: '#6b6b6b', fontWeight: '400' }}>{artist.nationality}, b. {artist.born}</p>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
            <Button variant="light"  className="p-1 px-4" style={{borderRadius: '1000px', color: 'black', fontWeight: '500', border: '1px solid black', width: '80%'}}>
            Visit</Button>
            </Col>
            </Row>
          </Col>
        ))}
        </Row>
      </Row>
    </>
  );
};

export default TrendingArtists;
