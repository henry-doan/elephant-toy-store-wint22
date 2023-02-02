import ListGroup from 'react-bootstrap/ListGroup';
import { OrderItemConsumer } from '../../providers/OrderItemProvider';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import { PurpleBtn } from '../styles/NewsletterStyles';


const OrderShow = ({ id, deleteOrderItem, orderId, item_id}) => {
  const [item, setItem] = useState({ item_name: '' , description: '' , quantity: "" , category: "" , discount: "" , brand: "" , image: "" })

  useEffect(() => {
    axios.get(`/api/items/${item_id}`)
    .then(res => setItem(res.data))
    .catch(error => console.log(error))
  },[])
  const {image, item_name } = item

  return(
    <>
      <ListGroup horizontal>
        
        <ListGroup.Item><a href={`/items/${item_id}`}><Image src={image} width='100px'/></a></ListGroup.Item>
        <ListGroup.Item>{item_name}</ListGroup.Item>
        <ListGroup.Item onClick={() => deleteOrderItem(id, orderId)}><PurpleBtn>Remove Item</PurpleBtn></ListGroup.Item>
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
