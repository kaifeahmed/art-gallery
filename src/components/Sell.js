import React from 'react'
import {Col, Row, Button, Image} from 'react-bootstrap'
const Sell = () => {
    const lastSoldArt = [
        {
          id: '1',
          artist: 'Nimah Gobir',
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
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 79%)' }}>
        <Col xs={12} md={5} className='d-flex flex-column gap-4'>
            <h1 style={{fontSize: '102px', lineHeight: '108px', letterSpacing: '-0.01em'}}>Sell art from your collection</h1>
            <p style={{fontSize: '27px', lineHeight: '40px', letterSpacing: '-0.01em'}}>With our global reach and art market expertise, our specialists will find the right buyer for your work.</p>
        <Row>
            <Col className='d-flex gap-3'>
                <Button variant="dark" className='py-3 px-5' style={{ borderRadius: '1000px', border: '1px solid black', width: '100%' }}>
                Start Selling
                </Button>
                <Button variant="light" className='py-3 px-5' style={{ borderRadius: '1000px', border: '1px solid black', width: '100%' }}>
                Get in Touch
                </Button>
            </Col>
        </Row>
        </Col>

        <Col xs={7}>
            <Image className='w-100' src="https://d7hftxdivxxvm.cloudfront.net/?height=833&quality=80&resize_to=fit&src=https%3A%2F%2Ffiles.artsy.net%2Fimages%2Fcontent-card-swa-landing-page.jpg&width=1104"></Image>
        </Col>
    </Row>

    <Row className='m-0 px-4 bg-theme gap-3' style={{ background: 'rgb(255 255 255 / 79%)', padding:'90px' }}>
        <Col className='d-flex flex-column gap-3'>
            <Image src="https://files.artsy.net/images/DollarCircleIcon_1.svg" width={50}/>
            <h1 style={{fontSize: '37px', lineHeight: '48px', fontWeight: '500', letterSpacing: '-0.01em'}}>Earn more from your sale</h1>
            <p style={{fontSize: '16px', marginTop: '-17px', fontWeight: '500', color: '#6a6a6a', lineHeight: '26px'}}>lower fees than traditional auction houses and dealers, you take home more of the final sale price.</p>
        </Col>
        <Col className='d-flex flex-column gap-3'>
            <Image src="https://files.artsy.net/images/StarCircleIcon_1.svg" width={50}/>
            <h1 style={{fontSize: '37px', lineHeight: '48px', fontWeight: '500', letterSpacing: '-0.01em'}}>Tap into our expertise</h1>
            <p style={{fontSize: '16px', marginTop: '-17px', fontWeight: '500', color: '#6a6a6a', lineHeight: '26px'}}>Our team has a wealth of experience in the secondary art market. A dedicated specialist will be with you every step of the way..</p>
        </Col>
        <Col className='d-flex flex-column gap-3'>
            <Image src="https://files.artsy.net/images/GlobeNetworkCircleIcon_1.svg" width={50}/>
            <h1 style={{fontSize: '37px', lineHeight: '48px', fontWeight: '500', letterSpacing: '-0.01em'}}>Reach a global network</h1>
            <p style={{fontSize: '16px', marginTop: '-17px', fontWeight: '500', color: '#6a6a6a', lineHeight: '26px'}}>With the world’s largest network of collectors, we match your work with the most interested buyers in over 190 countries.</p>
        </Col>
    </Row>

    <Row className='m-0 px-4 bg-theme-secondary gap-3' style={{padding: '100px'}}>
        <h1 className='text-light' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>A sales strategy tailored to your artwork</h1>
        <p className='text-light' style={{fontSize: '16px'}}>A dedicated specialist works with you to select the best sales option for your artwork.</p>

        <Col>
            <Row>
                <Col>
                <div style={{background: 'url("https://source.unsplash.com/1920x1080/?modern-art"', borderRadius: '8px', width: '100%', height: '420px', backgroundSize: 'cover'}}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 className='text-light' style={{fontSize: '34px', fontWeight: '500', lineHeight: '70px', letterSpacing: '0.01em'}}>Auctions</h1>
                <p className='text-light' style={{fontSize: '16px'}}>Our curated auctions provide you with multiple opportunities to reach the widest audience and successfully achieve your artwork’s full potential.</p>
                </Col>
            </Row>
        </Col>
        <Col>
            <Row>
                <Col>
                <div style={{background: 'url("https://source.unsplash.com/1920x1080/?oil-painting"', borderRadius: '8px', width: '100%', height: '420px', backgroundSize: 'cover'}}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 className='text-light' style={{fontSize: '34px', fontWeight: '500', lineHeight: '70px', letterSpacing: '0.01em'}}>Online marketplace
                </h1>
                <p className='text-light' style={{fontSize: '16px'}}>When your work is listed directly on Artsy.net—the world’s largest online art marketplace—it reaches over 3 million art lovers.</p>
                </Col>
            </Row>
        </Col>
        <Col>
            <Row>
                <Col>
                <div style={{background: 'url("https://source.unsplash.com/1920x1080/?water-color"', borderRadius: '8px', width: '100%', height: '420px', backgroundSize: 'cover'}}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 className='text-light' style={{fontSize: '34px', fontWeight: '500', lineHeight: '70px', letterSpacing: '0.01em'}}>Private sales</h1>
                <p className='text-light' style={{fontSize: '16px'}}>We offer tailored and discreet sales arrangements for our collectors’ highest value and most sensitive artworks.</p>
                </Col>
            </Row>
        </Col>
    </Row>

    <Row className='m-0 px-4 bg-theme gap-3' style={{ background: 'rgb(255 255 255 / 79%)', padding:'120px' }}>
        <h1 className='text-dark' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>How it works</h1>
        <Col className='mt-5'>
            <h1 className='text-dark' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>01</h1>
            <h4 className='text-dark mt-4 mb-3' style={{fontSize: '38px', fontWeight: '500', lineHeight: '40px', letterSpacing: '0.01em'}}>Submit your artwork</h4>
            <p style={{fontSize: '18px', color: 'black'}}>
                Enter the artist’s name on the submission page. If the artist is in our database, you’ll be able to upload images and artwork details.
            </p>
        </Col>
        <Col className='mt-5'>
            <h1 className='text-dark' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>02</h1>
            <h4 className='text-dark mt-4 mb-3' style={{fontSize: '34px', fontWeight: '500', lineHeight: '40px', letterSpacing: '0.01em'}}>Meet your expert</h4>
            <p style={{fontSize: '18px', color: 'black'}}>
                One of our specialists will review your submission and determine the best sales option.
            </p>
        </Col>
        <Col className='mt-5'>
            <h1 className='text-dark' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>03</h1>
            <h4 className='text-dark mt-4 mb-3' style={{fontSize: '34px', fontWeight: '500', lineHeight: '40px', letterSpacing: '0.01em'}}>Get a sales option</h4>
            <p style={{fontSize: '18px', color: 'black'}}>
                Review your tailored sales strategy and price estimate. We’ll select the best way to sell your work—either at auction, through private sale, or a direct listing on Artsy.
            </p>
        </Col>
        <Col className='mt-5'>
            <h1 className='text-dark' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>04</h1>
            <h4 className='text-dark mt-4 mb-3' style={{fontSize: '34px', fontWeight: '500', lineHeight: '40px', letterSpacing: '0.01em'}}>
                Sell your work
            </h4>
            <p style={{fontSize: '18px', color: 'black'}}>
                Keep your work until it sells, then let our team handle the logistics. No costly presale insurance, shipping, or handling fees.
            </p>
        </Col>
        <Row>
            <Col>
            <Button variant="dark" className='py-3 blue-button' style={{borderRadius: '1000px', width: '23%'}}>Get Started</Button>
            </Col>
        </Row>
    </Row>
    
    <Row className='m-0 px-4 bg-theme-secondary justify-content-between' style={{padding: '120px'}}>
        <Col xs={5} className='d-flex flex-column gap-4'>
            <h1 className='text-light' style={{fontSize: '60px', lineHeight: '80px', letterSpacing: '-0.01em'}}>Interested in selling multiple artworks?
Speak with our team.</h1>
        <Row>
            <Col className='d-flex gap-3'>
                <Button variant="light" className='py-3 px-5' style={{ borderRadius: '1000px', border: '1px solid black', width: '50%' }}>
                Get in Touch
                </Button>            </Col>
        </Row>
        </Col>

        <Col xs={6}>
            <Image className='w-100' src="https://d7hftxdivxxvm.cloudfront.net/?height=420&quality=80&resize_to=fit&src=https%3A%2F%2Ffiles.artsy.net%2Fimages%2FSWA-landing-FAQ-section-speak-to-the-team-image-x2.jpg&width=949"></Image>
            <p className='text-light mt-2' style={{fontSize: '13px', fontStyle: 'italic'}}>Janet Fish, Daffodils, 1995. Malik Roberts, Untitled | Blue, 2022. Robert Colescott, Les Demoiselles d’Alabama: Vestidas, 1985. Hunt Slonem, Peacock St Mary’s, 2010-2020. Vik Muniz, Metachrome (Interior with Egyptian Curtain, after Matisse), 2016.</p>
        </Col>
    </Row>

    
    <Row className='m-0 px-4 bg-theme gap-3' style={{ background: 'rgb(255 255 255 / 79%)', padding:'120px', paddingBottom: '0' }}>
        <h1 className='text-dark mb-5' style={{fontSize: '57px', lineHeight: '70px', letterSpacing: '-0.01em'}}>Previously sold on Artsy</h1>
        <Row style={{flexWrap: 'nowrap', overflow: 'auto'}}>
        {lastSoldArt.map((art, index) => (
            <>
          <Col key={art.id} xs={4}>
            <div
              style={{
                background: `url("${art.featured_image}")`,
                height: '400px',
                borderRadius: '8px',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='d-flex justify-content-between w-100'>
            <div >
                <p className='mt-2' style={{fontSize: '22px', fontWeight: '600' }}>{art.artist}</p>
                <p style={{ marginTop: '-17px', fontSize: '17px', fontWeight: '400', color: '#6b6b6b' }}>{art.title}</p>
                <p style={{ marginTop: '-17px', fontSize: '18px', fontWeight: '600' }}>PKR {art.price}</p>
            </div>
            <div className='d-flex justify-content-end align-items-start mt-2'>
            <Button variant="dark" className='py-2 px-5' style={{ borderRadius: '1000px', border: '1px solid black' }}>
                View Art
            </Button>
            </div>    
          </div>
          </Col>
          </>
        ))}
        </Row>
    </Row>

    <Row className='m-0 px-4 bg-theme gap-3' style={{ background: 'rgb(255 255 255 / 100%)', padding:'160px'}}>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-dark text-center' style={{fontSize: '57px', lineHeight: '70px', width: '80%', letterSpacing: '-0.01em'}}>
            Sell with Artsy is the simple, contemporary way to sell art from your collection.    
            </h1>
            <Button variant="dark" className='py-3 blue-button px-5 mt-5' style={{ borderRadius: '1000px', border: '1px solid black', width: '25%' }}>
                Start Selling
            </Button>
        </Col>
    </Row>
    </>
  )
}

export default Sell