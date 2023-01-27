import { Container, Row, Col } from 'react-bootstrap';
import OrderItemShow from './OrderItemShow';

const OrderItemList = ({ orderItems, orderId }) => (
  <Container>
    { orderItems.map( c => 
      <Row md='4'>
        <Col key={c.id}>
          <OrderItemShow 
            {...c}
            orderId = {orderId}
          />
        </Col>
      </Row>
    )}
  </Container>
)

export default OrderItemList;