import { OrderItemConsumer } from "../../providers/OrderItemProvider";
import OrderItemList from './OrderItemList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const OrderItems = ({ orderItems, getAllOrderItems, orderId }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllOrderItems(orderId)
  }, [])

  return (
    <Container className="main-MontserratBold-font">
      <h1>My Order Stuff</h1>
      <OrderItemList 
        orderItems = {orderItems}
        orderId = {orderId}
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
