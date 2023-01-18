import { ItemConsumer } from "../../providers/ItemsProvider";
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import ItemForm from './ItemForm';

const Items = ({ items, getAllItems, msgs, setMsgs  }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllItems()
  }, [])

  return (
    <Container>

      {/* <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal> */}
      <h1>Toys</h1>
      <ItemList 
        items={items}
      />
    </Container>
  )
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    { value => <Items {...value} {...props} />}
  </ItemConsumer>
)

export default ConnectedItems;