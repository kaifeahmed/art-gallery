import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, push } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';
import { Col, Row, Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const SingleCourse = () => {
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
        const artworkRef = ref(getDatabase(), `courses/${id}`);
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
            const paymentsRef = ref(getDatabase(), "course_payments");
            let data = {
                userId: 0,
                courseId: id,
                amount: artworkData.price
            };
            await push(paymentsRef, data);
            toast.success("COurse has been successfully purchased");
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
       <img src={artworkData.images ? artworkData.images[0] : ''} alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" />
     </Col>
     <Col xs={5} className="p-5">
          <h1 className="mb-4" style={{fontWeight: '600'}}>{artworkData.title}</h1>
          <p style={{fontSize: '16px'}}>{artworkData.description}</p>
          <p style={{fontSize: '16px'}}><strong>Price:</strong> PKR {artworkData.price}</p>
            <Button variant="primary" className="me-2 w-50 p-4 mt-4 btn-theme" style={{borderRadius: '50px'}} onClick={handleShow}>Enroll Now</Button>
        </Col>
    </Row>

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

export default SingleCourse;