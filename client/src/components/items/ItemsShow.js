import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';

const ItemShow = ({ deleteItem, wishlists, getAllWishlists, addWishlistItem }) => {
  const [showing, setShow] = useState(false)
  const { id } = useParams()
  const location = useLocation()
  const { item_name, description, quantity, category, discount, brand } = location.state

  useEffect( () => {
    getAllWishlists()
  },[])

  const addtoWishlist = (wishlistId) => {
    addWishlistItem(wishlistId, {item_id: id})
    setShow(false)
  }

  return(
    <>
      <Row>
        <Col>
          <Container>
            {/* add item image */}
            <h1>{item_name}</h1>
            <Link
              to={`/${id}/updateItem`}
              state={{
                id,
                item_name,
                description,
                quantity,
                category,
                discount,
                brand
              }}
            >
              <Button>Edit</Button>
            </Link>
            <Button
              onClick={() => deleteItem(id)}
            >
              Delete
            </Button>
            <Link
              to={`/${id}/review`}
            >
              <Button>Reviews</Button>
            </Link>
            <Button variant="primary" onClick={() => setShow(true)}>
              Add to Wishlists!
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Which Wishlist is Prefered?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {
                    wishlists.map(  wl => 
                      <p>
                        {wl.wishlist_name}
                        <Button onClick={() => addtoWishlist(wl.id)}>
                            +
                        </Button>
                      </p>
                      )
                  }
              </Modal.Body>
            </Modal>
          </Container>
        </Col>
      </Row>
      <br />
    </>
  )
}

const ConnectedItemShow = (props) => (
  <ItemConsumer>
    { value => <ItemShow {...props} {...value} />}
  </ItemConsumer>
)

const ConnectedWishlistItemShow = (props) => (
  <WishlistConsumer>
    { value => <ConnectedItemShow {...props} {...value} />}
  </WishlistConsumer>
)

const ConnectedWishlistItemItemShow = (props) => (
  <WishlistItemConsumer>
    { value => <ConnectedWishlistItemShow {...props} {...value} />}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItemItemShow;