import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';


const SingleArt = () => {



  return (
    <>
    <Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
     <Col xs ={7}>
     <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716602028~exp=1716605628~hmac=066235c94a67c677be55bc0ecb0c8eac42ebcfe882b7c5681d8dc519c9abcb69&w=996" alt="Artwork by Tunji Adeniyi-Jones" className="img-fluid rounded" />

     </Col>
     <Col xs={5}>
          <h1>Set of 2 Three Red Figures Rising & Flashy Encounter</h1>
          <p><strong>Artist:</strong> Tunji Adeniyi-Jones</p>
          <p><strong>Year:</strong> 2021</p>
          <p><strong>Medium:</strong> Giclee print on 300gsm Somerset velvet mould-made paper</p>
          <p><strong>Dimensions:</strong> 11 4/5 × 8 2/5 in (29.9 × 21.4 cm)</p>
          <p><strong>Edition:</strong> Edition of 40</p>
          <p><strong>Price:</strong> $1,500</p>
            <Button variant="primary" className="me-2">Purchase</Button>
            <Button variant="secondary">Make an Offer</Button>
         
        </Col>
    </Row>
<Row className='m-0 px-4 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)', overflowX: 'auto' }}>
<Col xs= {6}>
    <h2> About the work </h2>
    <p><strong>Materials:</strong> Giclee print on 300gsm Somerset velvet mould-made paper with hand made deckled edges</p>
  <p><strong>Size:</strong> 11 4/5 × 8 2/5 in | 29.9 × 21.4 cm</p>
  <p><strong>Rarity:</strong> <a href="#">Limited edition</a></p>
  <p><strong>Medium:</strong> <a href="#">Print</a></p>
  <p><strong>Condition:</strong> Mint Condition</p>
  <p><strong>Signature:</strong> Hand-signed by artist, Stored flat inside the original Charleston portfolio with the accompanying hand signed and numbered COA. <a href="#">Read more</a></p>
  <p><strong>Certificate of authenticity:</strong> Included (issued by gallery)</p>
  <p><strong>Frame:</strong> Not included</p>
</Col>
</Row>
   
  </>
  )
}

export default SingleArt