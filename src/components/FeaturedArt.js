import { Row, Col } from 'react-bootstrap';

const FeaturedArt = () => {
  const featuredArt = [
    {
      id: '1',
      genre: 'Artsy Curatorial',
      title: 'Women Artists of Contemporary Cubism',
      featured_image: 'https://source.unsplash.com/random',
    },
    {
      id: '2',
      genre: 'Artsy Curatorial',
      title: 'Women Artists of Contemporary Cubism',
      featured_image: 'https://source.unsplash.com/random',
    },
    {
      id: '3',
      genre: 'Artsy Curatorial',
      title: 'Women Artists of Contemporary Cubism',
      featured_image: 'https://source.unsplash.com/random',
    },
    {
      id: '4',
      genre: 'Artsy Curatorial',
      title: 'Women Artists of Contemporary Cubism',
      featured_image: 'https://source.unsplash.com/random',
    },
  ];

  return (
    <>
      <Row className='m-0 px-4 py-5 bg-theme' style={{background: 'rgb(255 255 255 / 79%)'}}>
        <h3 style={{marginBottom: '40px', fontWeight: '600'}}>Featured</h3>
        {featuredArt.map((art, index) => (
          <Col key={art.id} xs={3}>
            <div style={{background: `url("${art.featured_image}")`,backgroundSize: 'cover', height: '250px', borderRadius: '8px'}}></div>
            <p className='mt-2'>{art.genre}</p>
            <p style={{marginTop: '-17px', fontSize: '24px', fontWeight: '600'}}>{art.title}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedArt;
