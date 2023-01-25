import { Container, Row, Col } from 'react-bootstrap';
import NewsletterShow from './NewsletterShow';

const NewsletterList = ({ newsletters }) => (
  <Container>
    <Row md='4'>
      { newsletters.map( n => 
        <Col key={n.id}>
          <NewsletterShow 
            {...n}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default NewsletterList;