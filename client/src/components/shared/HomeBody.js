import { Row, Col, Image, Container, Modal } from "react-bootstrap";
import NewsletterForm from "../newsletter/NewsletterForm";
import Bitmap from '../images/Bitmap.png';
import color from '../images/color.png';
import Bitmap1 from '../images/Bitmap1.png';
import { PurpleBtn } from "../styles/NewsletterStyles";
import { useState } from 'react';

const HomeBody = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return(
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <Row>
              <Image 
                src={color}
                alt='home' 
                width='90%'
                height='50%'
              />
            </Row>
            <br />
            <Row>
              <Image 
                src={Bitmap1}
                alt='home' 
                width='90%'
                height='50%'
              />
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              <Image 
                src={Bitmap}
                alt='home' 
                width='100%'
                height='62%'
              />
            </Row>
            <Row className="justify-content-md-center">
              <Col xs lg="2"></Col>
              <Col md="auto" className="text-center">
                <br/>
                <h1>Let the games begin</h1>
                <h6>Sign Up for our Newsletter!</h6>
                <PurpleBtn type="button" onClick={() => setShowSubscribe(true)}>
                  Subscribe
                </PurpleBtn>
                <Modal show={showSubscribe} onHide={() => setShowSubscribe(false)}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <NewsletterForm setShowSubscribe={setShowSubscribe}/>
                  </Modal.Body>
                </Modal>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeBody;