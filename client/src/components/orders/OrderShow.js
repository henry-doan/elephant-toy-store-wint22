import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { OrderConsumer } from '../../providers/OrderProvider';

const OrderShow = ({ id, order_quantity, order_cost, order_number, est_shipping, address, processed, deleteOrder }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
      </Card>
      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h1>{order_number}</h1>
                <h2>{order_cost}</h2>
                <h2>{address}</h2>
                <h2>{processed}</h2>
                <p>order_quantity: {order_quantity}</p>
                <p>est_shipping: { est_shipping ? <Moment format='MM-DD-YY'>{est_shipping}</Moment> : "Not Shipped yet" }</p>
                <Link
                  to={`/${id}/updateOrder`}
                  state={{
                    id,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteOrder(id)}
                >
                  Delete
                </Button>
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