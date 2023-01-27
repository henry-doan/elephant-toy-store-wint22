import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { OrderConsumer } from '../../providers/OrderProvider';
import OrderItems from '../orderitem/OrderItems';

const OrderShow = ({ id, order_quantity, order_cost, order_number, est_shipping, address, processed, deleteOrder, updateOrder }) => {
  const [showing, setShow] = useState(false)
  
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  const shipping = randomDate(new Date(2023, 20, 1), new Date());

  return(
    <>
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
        
       <Modal show={showing} onHide={() => setShow(false)}>
       <Modal.Header closeButton> Items in Order
         </Modal.Header>
         <Modal.Body>
         <OrderItems />
         </Modal.Body>
       </Modal>

       <Button onClick={() => setShow(true)}> Order Items </Button>
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
