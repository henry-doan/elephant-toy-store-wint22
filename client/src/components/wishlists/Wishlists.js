import { WishlistConsumer } from "../../providers/WishlistProvider";
import WishlistList from './WishlistList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import WishlistForm from './WishlistForm';
import { Link } from 'react-router-dom';
import { PurpleBtn } from '../styles/NewsletterStyles';


const Wishlists = ({ wishlists, getAllWishlists, msgs, setMsgs  }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllWishlists()
  }, [])

  return (
    <Container>
      <PurpleBtn className='main-MontserratBold-font' onClick={() => setAdd(true)}>
        +
      </PurpleBtn>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="main-MontserratBold-font">Create Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WishlistForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1 className="main-MontserratBold-font">My Wishlists</h1>
      <WishlistList 
        wishlists={wishlists}
      />
    </Container>
  )
}

const ConnectedWishlists = (props) => (
  <WishlistConsumer>
    { value => <Wishlists {...value} {...props} />}
  </WishlistConsumer>
)

export default ConnectedWishlists;