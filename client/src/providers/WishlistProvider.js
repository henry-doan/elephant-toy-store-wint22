import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WishlistContext = React.createContext();
export const WishlistConsumer = WishlistContext.Consumer;

const WishlistProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllWishlists = () => {
    axios.get('/api/wishlists')
      .then( res => setWishlists(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addWishlist = (wishlist) => {
    axios.post('/api/wishlists', { wishlist })
      .then( res => setWishlists([...wishlists, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateWishlist = (id, wishlist) => {
    axios.put(`/api/wishlists/${id}`, { wishlist })
      .then(res => {
        const newUpdatedWishlists = wishlists.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setWishlists(newUpdatedWishlists)
        navigate('/wishlists')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteWishlist = (id) => {
    axios.delete(`/api/wishlists/${id}`)
      .then( res => setWishlists( wishlists.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <WishlistContext.Provider value={{
      wishlists, 
      getAllWishlists,
      msgs,
      setMsgs,
      addWishlist,
      updateWishlist,
      deleteWishlist,
    }}>
      { children }
    </WishlistContext.Provider>
  )
}

export default WishlistProvider;