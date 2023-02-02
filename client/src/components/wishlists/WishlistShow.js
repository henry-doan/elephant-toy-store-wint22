import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import WishlistItemList from '../wishlistitems/WishlistItemList';
import { PurpleBtn } from '../styles/NewsletterStyles';
import { WishCard,WishModal, DuckGroup } from '../styles/WishlistStyles';

const WishlistShow = ({ id, wish_item_quantity, wishlist_name, deleteWishlist, updateWishlist }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <WishCard style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Text className='main-font' >Wishlist Name: {wishlist_name}</Card.Text>
          <PurpleBtn variant="outline-dark" onClick={() => setShow(true)} className='main-bold-font' >
            Show
          </PurpleBtn>
        </Card.Body>
      </WishCard>

      <WishModal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h2>{wishlist_name}</h2>
                <p className='main-Montserrat-font'>Wishlist Item quantity: {wish_item_quantity}</p>
                <Link
                  to={`/${id}/updateWishlist`}
                  state={{
                    id,
                    wish_item_quantity,
                    wishlist_name,
                  }}
                >
                  <PurpleBtn type="submit" className='main-MontserratBold-font'>Edit</PurpleBtn>
                </Link>
                <PurpleBtn type="submit" className='main-MontserratBold-font'
                  onClick={() => deleteWishlist(id)}
                  className="main-bold-font">
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