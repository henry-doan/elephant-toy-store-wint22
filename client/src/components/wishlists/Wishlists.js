import { WishlistConsumer } from "../../providers/WishlistProvider";
import WishlistList from './WishlistList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import WishlistForm from './WishlistForm';
import { Link } from 'react-router-dom';
import {GreyBackground, addButton, ButtonSpace} from '../styles/WishlistStyles';

const Wishlists = ({ wishlists, getAllWishlists, msgs, setMsgs  }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllWishlists()
  }, [])

  return (
   <GreyBackground>
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
      <h1>My Wishlists</h1>
      <ButtonSpace>
      <addButton onClick={() => setAdd(true)}>
        Add Wishlist
      </addButton>
      </ButtonSpace>
      <WishlistList 
        wishlists={wishlists}
        />
   </GreyBackground> 
  )
}

const ConnectedWishlists = (props) => (
  <WishlistConsumer>
    { value => <Wishlists {...value} {...props} />}
  </WishlistConsumer>
)

export default ConnectedWishlists;