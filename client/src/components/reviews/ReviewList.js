import { Container, Row, Col } from 'react-bootstrap';
import ReviewShow from './ReviewShow';

const ReviewList = ({ reviews, itemId, userId }) => (
  <Container>
    <Row md='4'>
      { reviews.map( r => 
        <Col key={r.id}>
          <ReviewShow 
            {...r}
            itemId = {itemId}
            userId = {userId}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default ReviewList;