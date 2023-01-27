import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => (
  <Container>
    <Row md='4'>
      { items.map( c => 
        <Col key={c.id}>
          <Link to={`/items/${c.id}`} state={{ ...c}}>
            <Card style={{ width: '10rem' }}>
              <Card.Img variant='top' src={c.image}/>
              <Card.Body>
                <Card.Title>{c.item_name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      )}
    </Row>
  </Container>
)

export default ItemList;