import { useState, useEffect } from 'react';
import { OrderConsumer } from '../../providers/OrderProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const OrderForm = ({ setAdd, addOrder, updateOrder, user }) => {
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

  const AdminOrderForm = () => {
    if (user)
    return (
      <>
        {user.admin ?
          <>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Processed</Form.Label>
              <Form.Check 
                type="checkbox"
                name='complete'
                value={order.processed}
                onChange={(e) => setOrder({...order, processed: e.target.checked })}
              />
            </Form.Group>
          </>
          :
          <>
          </>
        }
      </>
    )
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
            <Form.Label>Order number</Form.Label>
            <Form.Control 
              name='order_number'
              value={order.order_number}
              onChange={(e) => setOrder({ ...order, order_number: e.target.value})}
              type='integer'
              required
            />
          </Form.Group>
          {AdminOrderForm() }
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

const ConnectedAuthOrderForm = (props) => (
  <AuthConsumer>
    { value => <ConnectedOrderForm {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedAuthOrderForm;