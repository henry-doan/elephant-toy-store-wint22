import { Container, Row, Col } from 'react-bootstrap';
import OrderShow from './OrderShow';

const OrderList = ({ orders }) => (
  <Container>
    <Row md='4'>
      { orders.map( c => 
        <Col key={c.id}>
          <OrderShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default OrderList;