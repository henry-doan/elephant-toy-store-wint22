import { useState, useEffect } from 'react';
import { OrderConsumer } from '../../providers/OrderProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const OrderForm = ({ setAdd, addOrder, updateOrder }) => {
  const [order, setOrder] = useState({ order_quantity: 0, order_cost: 0, order_number: 0, est_shipping: '', address: '', processed: false, })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { order_quantity, order_cost, order_number, est_shipping, address, processed, } = location.state
      setOrder({ order_quantity, order_cost, order_number, est_shipping, address, processed, })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateOrder(id, order)
    } else {
      addOrder(order)
      setAdd(false)
    }
    setOrder({ order_quantity: 0, order_cost: 0, order_number: 0, est_shipping: '', address: '', processed: false })
  }

  return(
    <>
      { id ? <h1>Update Order</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            name='address'
            value={order.address}
            onChange={(e) => setOrder({ ...order, address: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Order quantity</Form.Label>
          <Form.Control 
            name='order_quantity'
            value={order.order_quantity}
            onChange={(e) => setOrder({ ...order, order_quantity: e.target.value})}
            type='integer'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Order Cost</Form.Label>
          <Form.Control 
            name='order_cost'
            value={order.order_cost}
            onChange={(e) => setOrder({ ...order, order_cost: e.target.value})}
            type='integer'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Order number</Form.Label>
          <Form.Control 
            name='order_number'
            value={order.order_number}
            onChange={(e) => setOrder({ ...order, order_number: e.target.value})}
            type='integer'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>shipping</Form.Label>
          <Form.Control 
            name='est_shipping'
            value={order.est_shipping}
            onChange={(e) => setOrder({ ...order, est_shipping: e.target.value})}
            type='date'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Processed</Form.Label>
          <Form.Check 
            type="checkbox"
            name='complete'
            value={order.processed}
            onChange={(e) => setOrder({...order, processed: e.value.checked })}
          />
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedOrderForm = (props) => (
  <OrderConsumer>
    { value => <OrderForm {...props} {...value} />}
  </OrderConsumer>
)

export default ConnectedOrderForm;