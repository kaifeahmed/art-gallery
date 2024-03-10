import { Col, Row } from "react-bootstrap"
import { IoIosArrowForward } from "react-icons/io";

const Submission = () => {
  return (
    <>
    <Row className='m-0 px-5 gap-3 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 80%)' }}>
        <Col className="d-flex justify-content-between align-items-center">
            <h6>Contact Information</h6>
            <IoIosArrowForward style={{width: '14px'}} />
        </Col>

        <Col className="d-flex justify-content-between align-items-center">
            <h6>Contact Information</h6>
            <IoIosArrowForward style={{width: '14px'}} />
        </Col>

        <Col className="d-flex justify-content-between align-items-center">
            <h6>Contact Information</h6>
            <IoIosArrowForward style={{width: '14px'}} />
        </Col>
        <hr style={{color: "#6a6a6a "}}/>
    </Row>
    </>
  )
}

export default Submission