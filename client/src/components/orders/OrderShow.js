import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { OrderConsumer } from '../../providers/OrderProvider';

const OrderShow = ({ id, order_quantity, order_cost, order_number, est_shipping, address, processed, deleteOrder, updateOrder }) => {
  const [showing, setShow] = useState(false)
  
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  const shipping = randomDate(new Date(2023, 20, 1), new Date());

  return(
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>Order Number: {order_number}</Card.Title>
          <Card.Text>Address: {address}</Card.Text>
          <Card.Text>Processed: { processed ? " order is shipped" : " Not Shipped yet" }</Card.Text>
          <Card.Text>Order Total: ${order_cost}</Card.Text>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h1>{order_number}</h1>
                <h2>{address}</h2>
                <p>processed:
                  { processed ? " order is shipped" : " Not Shipped yet" }
                </p>
                <p>order_cost: {order_cost}</p>
                <p>est_shipping: { processed ? <Moment format='MM-DD-YY'>{shipping}</Moment> : 'Not yet Shipped' }</p>
                <p>order quantity: {order_quantity}</p>
                <Link
                  to={`/${id}/updateOrder`}
                  state={{
                    id,
                    order_number,
                    processed,
                    est_shipping,
                    order_cost,
                    order_quantity,
                    address,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteOrder(id)}
                >
                  Delete
                </Button>
                {/* <Link
                  to={`/${id}/items`}
                >
                  <Button>Items</Button>
                </Link> */}
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <br />
    </>
  )
}


const ConnectedOrderShow = (props) => (
  <OrderConsumer>
    { value => <OrderShow {...props} {...value} />}
  </OrderConsumer>
)

export default ConnectedOrderShow;