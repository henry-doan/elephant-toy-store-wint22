import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';
import { Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { OrderItemConsumer } from '../../providers/OrderItemProvider';
import { OrderConsumer } from '../../providers/OrderProvider';
import CartButton from './CartButton';
// import { ReviewConsumer } from '../../providers/ReviewProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { PurpleBtn } from '../styles/NewsletterStyles';

const ItemShow = ({ deleteItem, wishlists, getAllWishlists, addWishlistItem, user }) => {
  const [showing, setShow] = useState(false)
  const { id } = useParams()
  const location = useLocation()
  const { item_name, description, quantity, category, discount, brand, image } = location.state

  useEffect( () => {
    getAllWishlists()
  },[])


  const addtoWishlist = (wishlistId) => {
    addWishlistItem(wishlistId, {item_id: id})
    setShow(false)
  }

  const AdminItems = () => {
    if (user)
    return (
      <>
        {user.admin ?
        <>
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
              <PurpleBtn>Edit</PurpleBtn>
            </Link>
            <PurpleBtn
              onClick={() => deleteItem(id)}
            >
              Delete
            </PurpleBtn>
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
              to={`/items/${id}/reviews`}
            >
              <PurpleBtn>Reviews</PurpleBtn>
            </Link>
            <CartButton id={id}/>
            <PurpleBtn variant="primary" onClick={() => setShow(true)}>
              Add to Wishlists!
            </PurpleBtn>
            { AdminItems() }

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Which Wishlist is Prefered?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {
                    wishlists.map(  wl => 
                      <p>
                        {wl.wishlist_name}
                        <PurpleBtn onClick={() => addtoWishlist(wl.id)}>
                            +
                        </PurpleBtn>
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

const ConnectedItemConsumer = (props) => (
  <OrderItemConsumer>
    { value => <ConnectedWishlistItemItemShow {...props} {...value} />}
  </OrderItemConsumer>
)

const ConectedOrderConsumer = (props) => (
  <OrderConsumer>
    { value => <ConnectedItemConsumer {...props} {...value} />}
  </OrderConsumer>
)

const ConnectedAuthConsumer = (props) => (
  <AuthConsumer>
    { value => <ConectedOrderConsumer {...props} {...value} />}
  </AuthConsumer>
)



export default ConnectedAuthConsumer;