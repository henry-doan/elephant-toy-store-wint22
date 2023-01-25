import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemConsumer } from '../../providers/ItemsProvider';
import { OrderItemConsumer } from '../../providers/OrderItemProvider';
import { OrderConsumer } from '../../providers/OrderProvider';
import CartButton from './CartButton';



const ItemShow = ({ id, item_name, description, quantity, category, discount, brand, deleteItem, image, addOrderItem, addOrder, getAllOrders }) => {
  const [showing, setShow] = useState(false)
  // const [value, setValue] = useState(0)
  // const handleSelect = (e) => {
  //   console.log(e)
  //   setValue(e)
  //   addOrderItem({item_id: id}, e)
  // }
  
  // function GetOrderNumbers() {
  //   const [orders, setOrders] = useState([])
  //   useEffect(() => {
  //     axios.get(`/api/orders`)
  //     .then (res => setOrders(res.data))
  //     .catch (err => console.log(err))
  //   }, [])
  //   return (
  //   <>
  //   {orders.map( o => <Dropdown.Item key={o.id} eventKey={o.id}>{o.order_number}</Dropdown.Item> )}
  //   </>
  //   )
  // }

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={image} height='140px' />
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
                    brand,
                    image
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button onClick={() => deleteItem(id)}>Delete</Button>
                <Link to={`/${id}/review`}>
                  <Button>Reviews</Button>
                </Link>
                <CartButton id={id}/>
              </Container>
            </Col>
            <Col>
              <Image 
                src={image} 
                alt={item_name}
                height='200px'
                width='200px'
              />
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


export default ConectedOrderConsumer;