import { Card, Row, Col, Container } from 'react-bootstrap';
import { MaxWidthDiv, LeftMaxWidthDiv, BigH1, LightMaxWidthDiv } from '../styles/NewsletterStyles';

const CategoryHeader = () => (
  <>
    <Card className="text-white">
        <Card.Img src='https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' width='70%' height='500px' />
        <Card.ImgOverlay>
          <br />
          <LeftMaxWidthDiv className="d-flex justify-content-start align-items-start, main-MontserratBold-font">
            <BigH1 className='main-MontserratBold-font'> Toy Categories </BigH1>
          </LeftMaxWidthDiv>
          <br/>
          <LightMaxWidthDiv className="d-flex justify-content-start align-items-start, main-MontserratBold-font">
            <Container>
              <Row>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
                <Col>
                  <h4> Toy Store Categories </h4>
                </Col>
              </Row>
            </Container>
          </LightMaxWidthDiv>
        </Card.ImgOverlay>
      </Card>
    <br/>
    <br/>
  </>
)

export default CategoryHeader;