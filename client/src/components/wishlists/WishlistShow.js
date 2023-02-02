import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import WishlistItemList from '../wishlistitems/WishlistItemList';
import { PurpleBtn, } from '../styles/NewsletterStyles';
import { WishCard,WishModal, DuckGroup } from '../styles/WishlistStyles';

const WishlistShow = ({ id, wish_item_quantity, wishlist_name, deleteWishlist, updateWishlist }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <WishCard style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Text>Wishlist Name: {wishlist_name}</Card.Text>
          <PurpleBtn variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </PurpleBtn>
        </Card.Body>
      </WishCard>

      <WishModal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className='main-Montserrat-font'>
              <Container>
                <h2>{wishlist_name}</h2>
                <p>Wishlist Item quantity: {wish_item_quantity}</p>
                <Link
                  to={`/${id}/updateWishlist`}
                  state={{
                    id,
                    wish_item_quantity,
                    wishlist_name,
                  }}
                  >
                  <PurpleBtn>Edit</PurpleBtn>
                </Link>
                <PurpleBtn
                  onClick={() => deleteWishlist(id)}
                  >
                  Delete
                </PurpleBtn>
                <DuckGroup>
                  <WishlistItemList wishlistId={id} />
                </DuckGroup>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </WishModal>
      <br />
    </>
  )
}

const ConnectedWishlistShow = (props) => (
  <WishlistConsumer>
    { value => <WishlistShow {...props} {...value} />}
  </WishlistConsumer>
)

export default ConnectedWishlistShow;