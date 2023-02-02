import { OrderConsumer } from "../../providers/OrderProvider";
import OrderList from './OrderList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import OrderForm from './OrderForm';
import { PurpleBtn } from "../styles/NewsletterStyles";

const Orders = ({ orders, getAllOrders }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllOrders()
  }, [])

  return (
    <Container>
      <PurpleBtn variant="primary" onClick={() => setAdd(true)}>
        Add Order
      </PurpleBtn>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='main-MontserratBold-font'>Create Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>My Orders</h1>
      <OrderList 
        orders={orders}
      />
    </Container>
  )
}

const ConnectedOrders = (props) => (
  <OrderConsumer>
    { value => <Orders {...value} {...props} />}
  </OrderConsumer>
)

export default ConnectedOrders;