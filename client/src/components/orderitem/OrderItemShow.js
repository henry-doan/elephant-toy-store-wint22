import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
 import { useState } from 'react';
 import { useParams } from 'react-router-dom';
 import { OrderConsumer } from '../../providers/OrderProvider';

 const OrderShow = ({ id, deleteOrderItem}) => {
   const [showing, setShow] = useState(false)

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
