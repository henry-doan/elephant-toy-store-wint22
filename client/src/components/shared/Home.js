import { Image, Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Featureditem from '../items/Featureditem';
import NewsletterForm from '../newsletter/NewsletterForm';
import Bitmap from '../images/Bitmap.png';
import color from '../images/color.png';
import Bitmap1 from '../images/Bitmap1.png';

const Home = () => (
  <>
    <Image 
      src='https://images.unsplash.com/photo-1608096281339-5bcae1ec2f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
      alt='home' width='300px'
    />
    <Container>
      <Row>
        <Col>
          <h1>Headline text</h1>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam</p>
          <Row>
            <Col>
              <Link to='/register'>
                <Button>
                  SignUp
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to='/login'>
                <Button>
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col>
          <Image 
            src="https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
            alt='head2' width='300px'
          />
        </Col>
        <Col>
          <h1>Headline text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam</p>
        </Col>
      </Row>
    </Container>
    <br />
    <h1>FAQ</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Featureditem />

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

    <br />
    <br />
    <br />
    <br />
  </>
)

export default Home;