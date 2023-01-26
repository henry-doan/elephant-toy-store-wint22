import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';
import { OrderItemConsumer } from '../../providers/OrderItemProvider';
import { OrderConsumer } from '../../providers/OrderProvider';
import CartButton from './CartButton';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';



const ItemShow = ({ id, item_name, description, quantity, category, discount, brand, image, addOrderItem, addOrder, getAllOrders, deleteItem, wishlists, getAllWishlists, addWishlistItem }) => {
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
               <Image 
                src={image} 
                alt={item_name}
                height='200px'
                width='200px'
              />
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
            
                <Link to={`/${id}/review`}>
                  <Button>Reviews</Button>
                </Link>
                
                <CartButton id={id}/>
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

const ConnectedItemConsumer = (props) => (
  <OrderItemConsumer>
    { value => <ConnectedItemShow {...props} {...value} />}
  </OrderItemConsumer>
)

const ConectedOrderConsumer = (props) => (
  <OrderConsumer>
    { value => <ConnectedItemConsumer {...props} {...value} />}
  </OrderConsumer>
)

const ConnectedWishlistItemShow = (props) => (
  <WishlistConsumer>
    { value => <ConectedOrderConsumer {...props} {...value} />}
  </WishlistConsumer>
)

const ConnectedWishlistItemItemShow = (props) => (
  <WishlistItemConsumer>
    { value => <ConnectedWishlistItemShow {...props} {...value} />}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItemItemShow;