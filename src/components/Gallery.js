import { Row, Col, Button} from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Gallery = () => {
    const artPieces = [
        {
          id: '1',
          featured_image: 'https://picsum.photos/1920/1080?artwork',
        },
        {
          id: '2',
          featured_image: 'https://picsum.photos/1920/1080?art-painting',
        },
        {
          id: '3',
          featured_image: 'https://picsum.photos/1920/1080?fine-art',
        },
        {
          id: '4',
          featured_image: 'https://picsum.photos/1920/1080?modern-art',
        },
        {
          id: '5',
          featured_image: 'https://source.unsplash.com/1500x1000/?abstract-art',
        },
        {
          id: '6',
          featured_image: 'https://source.unsplash.com/1500x1000/?canvas-art',
        },
        {
          id: '7',
          featured_image: 'https://source.unsplash.com/1500x1000/?contemporary-art',
        },
        {
          id: '8',
          featured_image: 'https://source.unsplash.com/1000x1500/?artistic',
        },
        {
          id: '9',
          featured_image: 'https://source.unsplash.com/1000x1500/?art-gallery',
        },
        {
          id: '10',
          featured_image: 'https://source.unsplash.com/1000x1500/?art-exhibition',
        },
        {
          id: '11',
          featured_image: 'https://source.unsplash.com/1000x1500/?creative-art',
        },
        {
          id: '12',
          featured_image: 'https://source.unsplash.com/1000x1500/?modern-painting',
        },
      ];
      
       
      
      const itemHeights = Array.from({ length: artPieces.length }, () => Math.floor(Math.random() * (450 - 350 + 1)) + 350);

  return (
    <>
      <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 79%)', overflowX: 'auto' }}>
        <Row>
            <Col xs={10}>
            <h3 style={{marginBottom: '40px'}}>Artwork by Artists on Art Gallery</h3>
            </Col>
            <Col xs={2}>
            <Button variant="dark"  className="p-1 px-4" style={{borderRadius: '1000px'}}>
            View Gallery</Button>
            </Col>
        </Row>
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
        <Masonry columnsCount={4} gutter="10px">
        {artPieces.map((artist, index) => (
            <div style={{
                borderRadius: '8px',
                marginBottom: '5px',
                background: `url(${artist.featured_image}) no-repeat fixed`,
                backgroundSize: 'cover',
                height: `${itemHeights[index]}px`,
                backgroundAttachment: index % 2 === 0 ? 'fixed' : 'scroll', // Apply 'fixed' for even indices
              }}>
            {/* Content inside the container */}
            </div>        
        ))}
        </Masonry>
        </ResponsiveMasonry>
      </Row>
    </>
  );
};

export default Gallery;
