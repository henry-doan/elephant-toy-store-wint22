import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const OrderContext = React.createContext();
export const OrderConsumer = OrderContext.Consumer;

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllOrders = () => {
    axios.get('/api/orders')
      .then( res => setOrders(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addOrder = (order) => {
    axios.post('/api/orders', { order })
      .then( res => setOrders([...orders, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateOrder = (id, order) => {
    axios.put(`/api/orders/${id}`, { order })
      .then(res => {
        const newUpdatedOrders = orders.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setOrders(newUpdatedOrders)
        navigate('/cart')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteOrder = (id) => {
    axios.delete(`/api/orders/${id}`)
      .then( res => setOrders( orders.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <OrderContext.Provider value={{
      orders, 
      getAllOrders,
      msgs,
      setMsgs,
      addOrder,
      updateOrder,
      deleteOrder,
    }}>
      { children }
    </OrderContext.Provider>
  )
}

export default OrderProvider;