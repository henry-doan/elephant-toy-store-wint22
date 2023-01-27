<<<<<<< HEAD
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
 import { useState } from 'react';
 import { useParams } from 'react-router-dom';
 import { OrderConsumer } from '../../providers/OrderProvider';

<<<<<<< HEAD
 const OrderShow = ({ id, deleteOrderItem}) => {
   const [showing, setShow] = useState(false)
=======
const OrderShow = ({ id, deleteOrderItem}) => {
  const [showing, setShow] = useState(false)
  
  const { orderId } = useParams()
  // const { itemId } = useParams()
>>>>>>> 98466f3 (item linked to cart)

   const { orderId } = useParams()
   // const { itemId } = useParams()

   return(
     <>
       <Card style={{ width: '15rem' }}>
         <Card.Body>
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
                 <Button
                   onClick={() => deleteOrderItem(id)}
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


 const ConnectedOrderShow = (props) => (
   <OrderConsumer>
     { value => <OrderShow {...props} {...value} />}
   </OrderConsumer>
 )

 export default ConnectedOrderShow;
=======
import ListGroup from 'react-bootstrap/ListGroup';
import { OrderItemConsumer } from '../../providers/OrderItemProvider';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';



const OrderShow = ({ id, deleteOrderItem, orderId, addOrderitem, item_id}) => {
  const [item, setItem] = useState({ item_name: '' , description: '' , quantity: "" , category: "" , discount: "" , brand: "" , image: "" })

  useEffect(() => {
    axios.get(`/api/items/${item_id}`)
    .then(res => setItem(res.data))
    .catch(error => console.log(error))
  },[])
  const {image, item_name } = item

  return(
    <>
{/* <a href={`/items/${item_id}`}></a> */}
      <ListGroup horizontal>
        <ListGroup.Item><Image src={image} width='100px'/></ListGroup.Item>
        <ListGroup.Item>{item_name}</ListGroup.Item>
        <ListGroup.Item onClick={() => deleteOrderItem(id, orderId)}>-</ListGroup.Item>
      </ListGroup>
    </>
  )
}

const ConnectedOrderItemShow = (props) => (
  <OrderItemConsumer>
    { value => <OrderShow {...props} {...value} />}
  </OrderItemConsumer>
)

export default ConnectedOrderItemShow;
>>>>>>> 6918dbf (order functionality)
