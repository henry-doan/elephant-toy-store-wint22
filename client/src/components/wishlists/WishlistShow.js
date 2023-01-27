import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistConsumer } from '../../providers/WishlistProvider';

const WishlistShow = ({ id, wish_item_quantity, wish_total, wishlist_name, deleteWishlist, updateWishlist }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Text>Address: {wishlist_name}</Card.Text>
          <Card.Text>Wishlist Total: ${wish_total}</Card.Text>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h2>{wishlist_name}</h2>
                <p>wish_total: {wish_total}</p>
                <p>Wishlist Item quantity: {wish_item_quantity}</p>
                <Link
                  to={`/${id}/updateWishlist`}
                  state={{
                    id,
                    wish_total,
                    wish_item_quantity,
                    wishlist_name,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteWishlist(id)}
                >
                  Delete
                </Button>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
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