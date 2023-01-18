import { Container, Row, Col } from 'react-bootstrap';
import ItemShow from './ItemsShow';

const ItemList = ({ items }) => (
  <Container>
    <Row md='4'>
      { items.map( c => 
        <Col key={c.id}>
          <ItemShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default ItemList;