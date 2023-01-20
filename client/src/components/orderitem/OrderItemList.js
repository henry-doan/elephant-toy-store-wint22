import { Container, Row, Col } from 'react-bootstrap';
import OrderItemShow from './OrderItemShow';

const OrderItemList = ({ orderItem }) => (
  <Container>
    <Row md='4'>
      { orderItem.map( c => 
        <Col key={c.id}>
          <OrderItemShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default OrderItemList;