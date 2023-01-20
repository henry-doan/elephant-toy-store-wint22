import { WishlistItemConsumer } from "../../providers/WishlistItemProvider";
import WishlistItemList from './WishlistItemList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import WishlistItemForm from './WishlistItemForm';
import { Link } from 'react-router-dom';

const WishlistItems = ({ wishlistitems, getAllWishlistItems, msgs, setMsgs  }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllWishlistItems()
  }, [])

  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Wishlist Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WishlistItemForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>My Wishlist Items</h1>
      <WishlistItemList 
        wishlistitems={wishlistitems}
      />
    </Container>
  )
}

const ConnectedWishlistItems = (props) => (
  <WishlistItemConsumer>
    { value => <WishlistItems {...value} {...props} />}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItems;