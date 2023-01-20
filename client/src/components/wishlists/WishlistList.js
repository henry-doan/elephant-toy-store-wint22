import { Container, Row, Col } from 'react-bootstrap';
import WishlistShow from './WishlistShow';

const WishlistList = ({ wishlists }) => (
  <Container>
    <Row md='4'>
      { wishlists.map( c => 
        <Col key={c.id}>
          <WishlistShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default WishlistList;