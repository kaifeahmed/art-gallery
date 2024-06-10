import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, get, set, push } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';
import { Col, Row, Button } from 'react-bootstrap';


const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const Navigate = useNavigate();
  const auth = useAuth();


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
    <Row className='card p-4'>
      <Col>
        <form onSubmit={handleSubmit} className='mt-4'>
            <Row className='mt-3'>
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
          <Button variant="primary" type="submit" className='btn btn-primary m-1'>
            Pay
          </Button>
        </form>
      </Col>
      
    </Row>
    </>
    
  );
};

export default PaymentForm;
