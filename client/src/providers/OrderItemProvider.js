import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const OrderItemContext = React.createContext();
export const OrderItemConsumer = OrderItemContext.Consumer;

const OrderItemProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([])
  const [msgs, setMsgs] = useState()

  
  const getAllOrderItems = (orderId) => {
    axios.get(`/api/orders/${orderId}/order_items`)
      .then( res => setOrderItems(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addOrderItem = (orderItem, orderId) => {
    axios.post(`/api/orders/${orderId}/order_items`, { orderItem })
      .then( res => setOrderItems([...orderItems, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateOrderItem = (id, orderItem, orderId) => {
    axios.put(`/api/orders/${orderId}/order_items/${id}`, { orderItem })
      .then(res => {
        const newUpdatedOrderItems = orderItems.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setOrderItems(newUpdatedOrderItems)
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteOrderItem = (id, orderId) => {
    axios.delete(`/api/orders/${orderId}/order_items/${id}`)
      .then( res => setOrderItems( orderItems.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <OrderItemContext.Provider value={{
      orderItems, 
      getAllOrderItems,
      msgs,
      setMsgs,
      addOrderItem,
      updateOrderItem,
      deleteOrderItem,
    }}>
      { children }
    </OrderItemContext.Provider>
  )
}

export default OrderItemProvider;
