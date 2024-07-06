import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, push } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';
import { Col, Row, Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const SingleArt = () => {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [artworkData, setArtworkData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const stripe = useStripe();
  const elements = useElements();
  const Navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const getListing = async () => {
      try {
        const artworkRef = ref(getDatabase(), `artwork/${id}`);
        const snapshot = await get(artworkRef);
        const data = snapshot.val();
        console.log(data);
        setArtworkData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getListing();
  }, [id])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const { token, error } = await stripe.createToken(elements.getElement(CardElement));
  
    if (error) {
      console.error(error);
      return;
    }
    try {
    let response = await fetch('http://localhost:3001/capture-payment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    mode: 'cors',
    body: JSON.stringify({
        tokenId: token.id,
        amount: 400,
    }),
    });

    const result = await response.json();
    console.log('result: ', result);

    if (result.success) {
        try {
            const paymentsRef = ref(getDatabase(), "artwork_payments");
            let data = {
                userId: 0,
                artworkId: 0,
                amount: 400
            };
            await push(paymentsRef, data);
            toast.success("Artwork has been successfully purchased");
            handleClose();
        } catch (error) {
            console.log('Error saving data: ', error);
        }
    }else {
        console.error('Payment failed:', result.error);
    }
    } catch (error) {
        console.error('Error capturing payment:', error);
    }
  };


  return (
    <>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)', overflowX: 'auto' }}>
     <Col xs ={7}>
       <img src={artworkData.images ? artworkData.images[0] : ''} style={{height: "500px", objectFit: 'cover', width: "100%"}} alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" />
     </Col>
     <Col xs={5} className="p-5">
          <h1 className="mb-4" style={{fontWeight: '600'}}>{artworkData.title}</h1>
          <p style={{fontSize: '16px'}}><strong>Artist:</strong> {artworkData.artist}</p>
          <p style={{fontSize: '16px'}}><strong>Year:</strong> {artworkData.year}</p>
          <p style={{fontSize: '16px'}}><strong>Medium:</strong> {artworkData.medium}</p>
          <p style={{fontSize: '16px'}}><strong>Dimensions:</strong> {artworkData.width} x {artworkData.height}</p>
          <p style={{fontSize: '16px'}}><strong>Provenance:</strong> {artworkData.provenance}</p>
          <p style={{fontSize: '16px'}}><strong>Price:</strong> PKR 4000</p>
            <Button variant="primary" className="me-2 w-50 p-4 mt-4 btn-theme" style={{borderRadius: '50px'}} onClick={handleShow}>Purchase</Button>
        </Col>
    </Row>
<Row className='px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)', overflowX: 'auto' }}>
  <Col xs= {6} className="px-4">
      <h2 className="mb-3" style={{fontWeight: '600'}}>About the work</h2>
      <p style={{fontSize: '15px'}}><strong>Materials:</strong> Giclee print on 300gsm Somerset velvet mould-made paper with hand made deckled edges</p>
      <p style={{fontSize: '15px'}}><strong>Size:</strong> 11 4/5 × 8 2/5 in | 29.9 × 21.4 cm</p>
      <p style={{fontSize: '15px'}}><strong>Rarity:</strong> <a href="#">Limited edition</a></p>
      <p style={{fontSize: '15px'}}><strong>Medium:</strong> <a href="#">Print</a></p>
      <p style={{fontSize: '15px'}}><strong>Condition:</strong> Mint Condition</p>
      <p style={{fontSize: '15px'}}><strong>Signature:</strong> Hand-signed by artist, Stored flat inside the original Charleston portfolio with the accompanying hand signed and numbered COA. <a href="#">Read more</a></p>
      <p style={{fontSize: '15px'}}><strong>Certificate of authenticity:</strong> Included (issued by gallery)</p>
      <p style={{fontSize: '15px'}}><strong>Frame:</strong> Not included</p>
  </Col>
  <Col xs={6} className="px-4">
    <h2 className="mb-3" style={{fontWeight: '600'}}>Tunji Adeniyi-Jones</h2>
      <p>British, b. 1992</p>
      <Button variant="primary" className="mb-2">Follow</Button>
      <p>With vibrant swirls of color and an eye towards West African aesthetics, Tunji Adeniyi-Jones paints Black bodies in repose and lush, mystical flora and fauna. The U.K.-born, New York-based artist draws on both his Yoruba heritage and diasporic experiences to inform his beguiling canvases, where he honors his ancestors’ ceremonies and celebrations. Adeniyi-Jones received his MFA from Yale and has exhibited in New York, Los Angeles, Stockholm, and London. His work regularly sells for six figures on the secondary market. Adeniyi-Jones believes that his portrayals of the body can transcend linguistic barriers and present a common language of movement and intimacy.</p>
      <p><strong>High Auction Record:</strong> £302.4k, Phillips, 2021</p>
      <p><strong>Blue Chip:</strong> Represented by internationally recognized galleries.</p>
      <p><strong>Collected by a major museum</strong> Studio Museum in Harlem|ICA Miami</p>
  </Col>
</Row>
{/* <Row  className='m-0 px-4 py-3 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)', overflowX: 'auto' }}>
    <Col xs= {12}>
    <h2>Other works by Tunji Adeniyi-Jones</h2>
    </Col>
</Row> */}
{/* <Row  className='m-0 px-4 pb-5 bg-theme' style={{ background: 'rgb(255 255 255 / 90%)', overflowX: 'auto' }}>
  <Col xs= {3} className="d-flex flex-column gap-1">
    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716602028~exp=1716605628~hmac=066235c94a67c677be55bc0ecb0c8eac42ebcfe882b7c5681d8dc519c9abcb69&w=996" alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" /> 
    <p className="m-0">Tunji Adeniyi-Jones</p>
    <p className="m-0"><em>Poetic Feet</em>, 2022</p>
    <p className="m-0">New Art Editions</p>
    <p className="m-0">€795</p>
  </Col>
  <Col xs= {3} className="d-flex flex-column gap-1">
    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716602028~exp=1716605628~hmac=066235c94a67c677be55bc0ecb0c8eac42ebcfe882b7c5681d8dc519c9abcb69&w=996" alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" /> 
    <p className="m-0">Tunji Adeniyi-Jones</p>
    <p className="m-0"><em>Poetic Feet</em>, 2022</p>
    <p className="m-0">New Art Editions</p>
    <p className="m-0">€795</p>
  </Col>
  <Col xs= {3} className="d-flex flex-column gap-1">
    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716602028~exp=1716605628~hmac=066235c94a67c677be55bc0ecb0c8eac42ebcfe882b7c5681d8dc519c9abcb69&w=996" alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" /> 
    <p className="m-0">Tunji Adeniyi-Jones</p>
    <p className="m-0"><em>Poetic Feet</em>, 2022</p>
    <p className="m-0">New Art Editions</p>
    <p className="m-0">€795</p>
  </Col>
  <Col xs= {3} className="d-flex flex-column gap-1">
    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716602028~exp=1716605628~hmac=066235c94a67c677be55bc0ecb0c8eac42ebcfe882b7c5681d8dc519c9abcb69&w=996" alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" /> 
    <p className="m-0">Tunji Adeniyi-Jones</p>
    <p className="m-0"><em>Poetic Feet</em>, 2022</p>
    <p className="m-0">New Art Editions</p>
    <p className="m-0">€795</p>
  </Col>
</Row> */}

  <Modal show={show} onHide={handleClose} animation={false} centered size="md">
    <Modal.Header closeButton>
      <h5>{artworkData.title}</h5>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
              <Row className=''>
                <Col>
                  <CardElement
                    className="form-control"
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </Col>
              </Row>
            <Button variant="primary" type="submit" className='btn btn-primary mt-3 p-2 w-100'>
              Pay
            </Button>
          </form>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
  </>
  )
}

export default SingleArt