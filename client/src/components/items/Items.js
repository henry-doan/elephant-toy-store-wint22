import { ItemConsumer } from "../../providers/ItemsProvider";
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import ItemForm from './ItemForm';
import Filter from "./Filter";
import { AuthConsumer } from "../../providers/AuthProvider";

const Items = ({ items, getAllItems, msgs, setMsgs, user  }) => {
  const [adding, setAdd] = useState(false)
  const [filter, setFilter] = useState("ALL")

  useEffect( () => {
    getAllItems()
  }, [])

  const ItemFilter = () => {
    switch(filter) {
      case 'Disney':
        return items.filter( t => t.brand === "Disney")
      case 'Lego':
        return items.filter( t => t.brand === "Lego")
      case 'Barbie':
        return items.filter( t => t.brand === "Barbie")
      case 'Learning':
        return items.filter( t => t.category === "Learning")
      case 'Sports':
        return items.filter( t => t.category === "Sports")
      case 'Art':
        return items.filter( t => t.category === "Art")
      default: 
        return items
  }
}

  return (
    <Container>
      { user.admin ? 
        <Button variant="primary" onClick={() => setAdd(true)}>
          +
        </Button>
        :
        <></>
      }
      <Filter 
      filter={filter}
      setFilter={setFilter}
      />
        
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>Toys</h1>
      <ItemList 
        items={ItemFilter()}
      />
    </Container>
  )
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    { value => <Items {...value} {...props} />}
  </ItemConsumer>
)

const ConnectedAuthItemConsumer = (props) => (
  <AuthConsumer>
    { value => <ConnectedItems {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedAuthItemConsumer;