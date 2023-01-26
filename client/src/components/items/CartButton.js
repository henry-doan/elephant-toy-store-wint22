import { useState, useEffect } from "react";
 import axios from "axios";
 import Dropdown from 'react-bootstrap/Dropdown';
 import DropdownButton from 'react-bootstrap/DropdownButton';
 import { OrderItemConsumer } from "../../providers/OrderItemProvider";


 const CartButton = ({id, addOrderItem}) => {
   const [orders, setOrders] = useState([])
   const [value, setValue] = useState(0)


   const handleSelect = (e) => {
     console.log(e)
     setValue(e)
     addOrderItem({item_id: id}, e)
   }

   useEffect(() => {
     axios.get(`/api/orders`)
     .then (res => setOrders(res.data))
     .catch (err => console.log(err))
   }, [])

   function GetOrderNumbers() {
     return (
       <>
         {orders.map( o => <Dropdown.Item key={o.id} eventKey={o.id}>{o.order_number}</Dropdown.Item> )}
       </>
     )
   }

   return (
     <>
       <DropdownButton title='cart' onSelect={handleSelect}>
       {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
       {GetOrderNumbers()}
       </DropdownButton>
     </>
   )
 }

 const ConnectedCartButton = (props) => (
   <OrderItemConsumer>
     {value => <CartButton {...props} {...value} />}
   </OrderItemConsumer>
 )

 export default ConnectedCartButton;