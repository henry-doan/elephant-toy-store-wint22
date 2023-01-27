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