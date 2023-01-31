import { Card, Container, Row } from 'react-bootstrap';
import Storm from '../images/Storm.png';
import { InversePurpleBtn } from '../styles/NewsletterStyles';
import { Link } from 'react-router-dom';

const CategoryPromo = () => {
  return (
    <Container>
      <Card className="text-white">
        <Card.Img src={Storm} alt="Storm Trooper" />
        <Card.ImgOverlay>
          <div className="d-flex align-items-end" style={{ height: "35%" }}>
            <Card.Title>Converse</Card.Title>
          </div>
          <div className="d-flex align-items-center" style={{ height: "10%" }}>
            <Card.Text>
              Find the toys you've always wanted as a child.
            </Card.Text>
          </div>
          <div className="d-flex align-items-start" style={{ height: "55%" }}>
            <Link to='/items'>
              <InversePurpleBtn type="submit">
                Shop Brand
              </InversePurpleBtn>
            </Link>
          </div>

        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default CategoryPromo;