import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';

const ItemShow = ({ id, item_name, description, quantity, category, discount, brand, deleteItem }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Body>
          <Card.Title>{item_name}</Card.Title>
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
                  <Button>Notes</Button>
                </Link>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <br />
    </>
  )
}

const ConnectedItemShow = (props) => (
  <ItemConsumer>
    { value => <ItemShow {...props} {...value} />}
  </ItemConsumer>
)

export default ConnectedItemShow;