import { Row, Col } from "react-bootstrap"

const ContactUs = () => {
  return (
    <>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)' }}>
        <Col xs={4}>
            <h1>Contact Us</h1>
        </Col>
        <Col xs={4}>
            <p style={{fontSize: '14px', fontWeight: '400'}}>General</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For general questions and feedback, please visit our Help Center or contact support@artgallery.net.</p>
            
            <p className="mt-5" style={{fontSize: '14px', fontWeight: '400'}}>Communications Team</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For members of the media interested in reaching Artsy's communications team, contact press@artsy.net.</p>
                        
            <p className="mt-5" style={{fontSize: '14px', fontWeight: '400'}}>Privacy</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For personal data requests, contact privacy@artsy.net.</p>
        </Col>
        <Col xs={4}>
            <p style={{fontSize: '14px', fontWeight: '400'}}>Advisory Team</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For questions about bidding on artworks in auctions through Artsy, contact specialist@artsy.net. For questions about buying artworks through galleries on Artsy, contact inquiries@artsy.net.</p>
            
            <p className="mt-5" style={{fontSize: '14px', fontWeight: '400'}}>Images</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For questions about images published on the site, contact images@artsy.net.</p>
                        
            <p className="mt-5" style={{fontSize: '14px', fontWeight: '400'}}>Editorial</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>For pitches and story ideas, contact pitches@artsy.net.
                <br/>For comments and questions, contact comments@artsy.net.
                <br/>For questions about The Artsy Podcast, contact podcast@artsy.net.
            </p>
        </Col>
    </Row>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)' }}>
        <Col xs={4}>
            <h3>Meet The Team</h3>
        </Col>
        <Col xs={2}>
            <p style={{fontSize: '14px', fontWeight: '400'}}>Developer/Lead</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>Kaife Ahmed</p>                        
        </Col>
        <Col xs={2}>
            <p style={{fontSize: '14px', fontWeight: '400'}}>UI/UX</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>Abdul Hadi</p>
        </Col>
        <Col xs={2}>
            <p style={{fontSize: '14px', fontWeight: '400'}}>Content Writing</p>
            <p style={{fontWeight: '600', marginTop: '-15px'}}>Hiba Imam</p>
        </Col>
    </Row>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)' }}>
        <Col xs={4}>
            <h3>Address</h3>
        </Col>
        <Col xs={8}>
            <p style={{fontWeight: '600'}}>401 Broadway, 24th Floor, New York, NY 10013</p>                        
        </Col>
    </Row>
    </>
  )
}

export default ContactUs