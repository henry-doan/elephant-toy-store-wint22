import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ItemContext = React.createContext();
export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllItems = () => {
    axios.get('/api/items')
      .then( res => setItems(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addItem = (item) => {
    axios.post('/api/items', { item })
      .then( res => setItems([...items, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateItem = (id, item) => {
    axios.put(`/api/items/${id}`, { item })
      .then(res => {
        const newUpdatedItems = items.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setItems(newUpdatedItems)
        navigate('/items')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => setItems( items.filter(c => c.id !== id)))
      navigate('/items')
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <ItemContext.Provider value={{
      items, 
      getAllItems,
      msgs,
      setMsgs,
      addItem,
      updateItem,
      deleteItem,
    }}>
      { children }
    </ItemContext.Provider>
  )
}

export default ItemProvider;