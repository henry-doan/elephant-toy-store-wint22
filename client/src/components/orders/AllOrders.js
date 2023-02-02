import OrderList from "./OrderList";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from "react-bootstrap";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([])

  useEffect( () => {
    axios.get('/api/allOrders')
    .then( res => setAllOrders(res.data))
    .catch( err => console.log(err))
  }, [])

  return (
    <Container>
      <h1>All Orders</h1>
      <OrderList 
        orders={allOrders}
      />
    </Container>
  )
}



export default AllOrders;