import { Row, Col, Button} from 'react-bootstrap';

const CuratedPicks = () => {
  const curatedArt = [
    {
      id: '1',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '2',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '3',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '4',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '4',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '4',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '4',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
    {
      id: '4',
      artist: 'Nimah Gobir',
      genre: 'Artsy Curatorial',
      title: 'Italian Dream',
      featured_image: 'https://source.unsplash.com/random',
      price: '2000'
    },
  ];

  return (
    <>
      <Row className='m-0 px-4 py-5 bg-theme' style={{ background: '#ffffffa8', overflowX: 'auto' }}>
        <Row>
            <Col xs={10}>
            <h3 style={{ }}>Curators’ Picks: Emerging</h3>
            <p style={{fontSize: '1.7rem', marginBottom: '40px', fontWeight: '600', color: '#6b6b6b'}}>The best works by rising talents on Art Gallery, all available now.</p>
            </Col>
            <Col xs={2}>
            <Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
            View All Works</Button>
            </Col>
        </Row>
        <Row style={{flexWrap: 'nowrap', overflow: 'auto'}}>
        {curatedArt.map((art, index) => (
          <Col key={art.id} xs={2}>
            <div
              style={{
                background: `url("${art.featured_image}")`,
                height: '250px',
                borderRadius: '8px',
                backgroundSize: 'cover',
              }}
            ></div>
            <p className='mt-2' style={{fontSize: '16px', fontWeight: '600' }}>{art.artist}</p>
            <p style={{ marginTop: '-17px', fontSize: '16px', fontStyle:'italic', color: '#6b6b6b', fontWeight: '600' }}>{art.genre}</p>
            <p style={{ marginTop: '-17px', fontSize: '16px', fontWeight: '600', color: '#6b6b6b' }}>{art.title}</p>
            <p style={{ marginTop: '-17px', fontSize: '16px', fontWeight: '600' }}>PKR {art.price}</p>
          </Col>
        ))}
        </Row>
      </Row>
    </>
  );
};

export default CuratedPicks;
