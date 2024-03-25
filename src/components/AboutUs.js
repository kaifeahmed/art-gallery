import { Row, Col, Button } from "react-bootstrap"
import CuratedPicks from "./CuratedPicks"

const AboutUs = () => {
  return (
    <>
    <Row className='m-0 py-5 bg-theme align-items-center' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://source.unsplash.com/1200x900/?dark-art')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', minHeight: '45vh'}}>
        <Col>
            <h1 className="text-light px-4" style={{fontSize: '54px'}}>The Future Of Art Collecting</h1>
            <p className='text-light mt-2' style={{fontSize: '13px', textAlign: 'end'}}>Detail of Cassi Namoda, A Strange Song, 2022. Detail of Alex Katz, Day Lily 1, 1969.</p>
        </Col>
    </Row>

    <Row className='m-0 px-4 py-5 justify-content-center bg-theme' style={{ background: 'rgb(255 255 255 / 85%)', overflowX: 'auto' }}>
        <Col xs={9}>
            <h3 className="text-dark px-4 text-center" style={{fontSize:'38px'}}>Artsy is for art collecting.</h3>
            <p   className='mt-3 text-center' style={{fontSize: '24px', color: 'black'}}>As the leading marketplace for art by the world’s emerging and established artists, we’ve made it easy for new and experienced collectors to discover, buy, and sell art—and so much more. Everything you’ll ever need to collect art, you’ll find on Artsy.</p>
        </Col>
    </Row>
    
    <Row className='m-0 px-4 py-2 bg-theme' style={{ background: 'rgb(255 255 255 / 85%)'}}>
        <Col xs={6} style={{minHeight: '500px'}}>
            <div className="d-flex justify-content-end align-items-end" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://source.unsplash.com/1200x900/?creative-art')", height: '70vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
                <p className='text-light mt-2 px-4 text-end' style={{fontSize: '16px', fontStyle: 'italic', fontWeight: '600'}}>Angela Heisch, Diving for Pearls, 2021</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Find the art you want</h1>
                    <p className="text-dark" style={{fontWeight: '600', marginTop: '-5px'}}>Be the first to know when the art you’re looking for is available with custom alerts.</p>
                </div>
                <Button variant="light"  className="py-3 black-button px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    View
                </Button>              
            </div>
        </Col>
        <Col xs={6} style={{minHeight: '500px'}}>
            <div className="d-flex justify-content-end align-items-end" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://source.unsplash.com/1200x900/?moderns-art')", height: '70vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
                <p className='text-light mt-2 px-4 text-end' style={{fontSize: '16px', fontStyle: 'italic', fontWeight: '600'}}>Angela Heisch, Diving for Pearls, 2021</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Buy art with ease</h1>
                    <p className="text-dark" style={{fontWeight: '600', marginTop: '-5px'}}>Be the first to know when the art you’re looking for is available with custom alerts.</p>
                </div>
                <Button variant="light"  className="py-3 black-button px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    View
                </Button>              
            </div>
        </Col>
        <Col xs={6} style={{minHeight: '500px'}}>
            <div className="d-flex justify-content-end align-items-end" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://source.unsplash.com/1200x900/?oil-art')", height: '70vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
                <p className='text-light mt-2 px-4 text-end' style={{fontSize: '16px', fontStyle: 'italic', fontWeight: '600'}}>Angela Heisch, Diving for Pearls, 2021</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Discover New Talents</h1>
                    <p className="text-dark" style={{fontWeight: '600', marginTop: '-5px'}}>Be the first to know when the art you’re looking for is available with custom alerts.</p>
                </div>
                <Button variant="light"  className="py-3 black-button px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    View
                </Button>              
            </div>
        </Col>
        <Col xs={6} style={{minHeight: '500px'}}>
            <div className="d-flex justify-content-end align-items-end" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://source.unsplash.com/1200x900/?street-art')", height: '70vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
                <p className='text-light mt-2 px-4 text-end' style={{fontSize: '16px', fontStyle: 'italic', fontWeight: '600'}}>Angela Heisch, Diving for Pearls, 2021</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Enroll in classes</h1>
                    <p className="text-dark" style={{fontWeight: '600', marginTop: '-5px'}}>Be the first to know when the art you’re looking for is available with custom alerts.</p>
                </div>
                <Button variant="light"  className="py-3 black-button px-4" style={{borderRadius: '1000px',  border: '1px solid black'}}>
                    View
                </Button>              
            </div>
        </Col>
    </Row>
    <CuratedPicks/>
    </>
  )
}

export default AboutUs