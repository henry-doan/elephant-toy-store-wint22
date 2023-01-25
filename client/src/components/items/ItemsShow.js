import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';

const ItemShow = ({ deleteItem }) => {
  const [showing, setShow] = useState(false)
  const { id } = useParams()
  const location = useLocation()
  const { item_name, description, quantity, category, discount, brand } = location.state

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

export default ConnectedItemShow;