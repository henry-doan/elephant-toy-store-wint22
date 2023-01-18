import { useState, useEffect } from 'react';
import { ItemConsumer } from '../../providers/ItemsProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const ItemForm = ({ setAdd, addItem, updateItem }) => {
  const [item, setItem] = useState({ item_name: '', description: '', cost: 0, quantity: 0, category: '', discount: 0, brand: ''  })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { item_name, description, quantity, category, discount, brand } = location.state
      setItem({ item_name, description, quantity, category, discount, brand })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateItem(id, item)
    } else {
      addItem(item)
      setAdd(false)
    }
    setItem({ item_name: '', description: '', cost: 0, quantity: 0, category: '', discount: 0, brand: ''})
  }

  return(
    <>
      { id ? <h1>Update Item</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='item_name'
            value={item.item_name}
            onChange={(e) => setItem({ ...item, item_name: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>quantity</Form.Label>
          <Form.Control 
            name='quantity'
            value={item.quantity}
            onChange={(e) => setItem({ ...item, quantity: e.target.value})}
            type='integer'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='description'
            value={item.description}
            onChange={(e) => setItem({ ...item, description: e.target.value})}
            es='textbox'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>category</Form.Label>
          <Form.Control 
            name='category'
            value={item.category}
            onChange={(e) => setItem({ ...item, category: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Discount</Form.Label>
          <Form.Control 
            name='discount'
            value={item.discount}
            onChange={(e) => setItem({ ...item, discount: e.target.value})}
            type='float'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cost</Form.Label>
          <Form.Control 
            name='cost'
            value={item.cost}
            onChange={(e) => setItem({ ...item, cost: e.target.value})}
            type='float'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control 
            name='brand'
            value={item.brand}
            onChange={(e) => setItem({ ...item, brand: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedItemForm = (props) => (
  <ItemConsumer>
    { value => <ItemForm {...props} {...value} />}
  </ItemConsumer>
)

export default ConnectedItemForm;