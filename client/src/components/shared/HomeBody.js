import { Row, Col, Image, Container } from "react-bootstrap";
import NewsletterForm from "../newsletter/NewsletterForm";
import Bitmap from '../images/Bitmap.png';
import color from '../images/color.png';
import Bitmap1 from '../images/Bitmap1.png';

const HomeBody = () => (
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
            <Col md="auto">
              <NewsletterForm/>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
)

export default HomeBody;