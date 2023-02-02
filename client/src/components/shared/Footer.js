import { FooterContainer, FooterTitles, FooterSocialBTN, FooterTitleSans, FooterSocialCol, } from "../styles/shared";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Facebook from '../../images/Facebook.png';
import Instagram from '../../images/Instagram.png';
import Twitter from '../../images/Twitter.png';
import { Container } from "react-bootstrap";

const Footer = () => (
  <FooterContainer style={{ textAlign: 'center' }}>
    <br>
    </br>
    <br>
    </br>
    <Container>
      <Row className="main-bold-font">
        <Col>
          <FooterTitles>Learning</FooterTitles>
        </Col>
        <Col>
          <FooterTitles>Action</FooterTitles>
        </Col>
        <Col>
          <FooterTitles>Puzzles</FooterTitles>
        </Col>
        <Col>
          <FooterTitles> Outdoor </FooterTitles>
        </Col>
        <Col>
          <FooterTitles> Baby </FooterTitles>
        </Col>
      </Row>
    </Container>
    <br>
    </br>
    <Row style={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
    <Col as={FooterSocialCol}>
        <FooterSocialBTN id="facebook">
          <img src={Facebook} alt='Facebook' height='15px' />
        </FooterSocialBTN>
        </Col>
        <Col as={FooterSocialCol}>
        <FooterSocialBTN>
         <img src={Instagram} alt='Instagram' height='15px' />
        </FooterSocialBTN>
        </Col>
        <Col as={FooterSocialCol}>
        <FooterSocialBTN>
          <img src={Twitter} alt='Twitter' height='15px' />
        </FooterSocialBTN>
      </Col>
    </Row>
    <br>
    </br>
    <br>
    </br>
    <Row>
      <Col>
        <FooterTitleSans>
          © {new Date().getFullYear()} devpointstudios Ltd • Contact • Privacy policy
        </FooterTitleSans>
      </Col>
    </Row>
  </FooterContainer>
)

export default Footer;