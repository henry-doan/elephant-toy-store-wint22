import { Container, Row, Col } from 'react-bootstrap';
import ReviewShow from './ReviewShow';

const ReviewList = ({ reviews }) => (
  <Container>
    <Row md='4'>
      { items.map( c => 
        <Col key={c.id}>
          <ReviewShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default ReviewList;