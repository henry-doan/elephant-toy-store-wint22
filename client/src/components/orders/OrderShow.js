import { Modal, Container } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { OrderConsumer } from '../../providers/OrderProvider';
import OrderItems from '../orderitem/OrderItems';
import { PurpleBtn } from '../styles/NewsletterStyles';

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
      <p>est_shipping: { processed ? <Moment format='MM-DD-YY'>{shipping}</Moment> : 'Not yet Shipped' }</p>
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
        <PurpleBtn>Edit</PurpleBtn>
      </Link>
      <PurpleBtn
        onClick={() => deleteOrder(id)}
      >
        Delete
      </PurpleBtn>

      <Modal show={showing} onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered
      >
        <Modal.Header closeButton> 
          <Modal.Title
          id="example-custom-modal-styling-title">
            Items in Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderItems 
          orderId={id}
          />
        </Modal.Body>
      </Modal>
      <PurpleBtn onClick={() => setShow(true)}> Order Items </PurpleBtn>
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