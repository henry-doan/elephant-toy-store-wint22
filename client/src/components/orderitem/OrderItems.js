import { OrderItemConsumer } from "../../providers/OrderItemProvider";
import OrderItemList from './OrderItemList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';

const OrderItems = ({ orderItems, getAllOrderItems, msgs, setMsgs }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllOrderItems()
  }, [])

  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
      </Modal>
      <h1>My Order Stuff</h1>
      <OrderItemList 
        orderItems={orderItems}
      />
    </Container>
  )
}

const ConnectedOrderItems = (props) => (
  <OrderItemConsumer>
    { value => <OrderItems {...value} {...props} />}
  </OrderItemConsumer>
)

export default ConnectedOrderItems;