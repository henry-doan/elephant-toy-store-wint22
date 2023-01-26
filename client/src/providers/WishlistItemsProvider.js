import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WishlistItemContext = React.createContext();
export const WishlistItemConsumer = WishlistItemContext.Consumer;

const WishlistItemProvider = ({children}) => {
  const [wishlistitems, setWishlistItems] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()


  const getAllWishlistItems = (wishlistId) => {
    axios.get(`/api/wishlists/${wishlistId}/wishlist_items`)
      .then( res => setWishlistItems(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addWishlistItem = (wishlistId, wishlistitem) => {
    axios.post(`/api/wishlists/${wishlistId}/wishlist_items`, { wishlistitem })
      .then( res => setWishlistItems([...wishlistitems, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

   const updateWishlistItem = (wishlistId, id, wishlistitem) => {
    axios.put(`/api/wishlists/${wishlistId}/wishlist_items/${id}`, { wishlistitem })
      .then( res => {
        const newUpdatedWishListItems = wishlistitems.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setWishlistItems(newUpdatedWishListItems) })
        navigate('/wishlists')
        .catch( err => {
          console.log(err)
          setMsgs({ msg: err.response.data.errors })
        })
    }

  const deleteWishlistItem = (wishlistId,id) => {
    axios.delete(`/api/wishlists/${wishlistId}/wishlist_items/${id}`)
      .then( res => setWishlistItems(wishlistitems.filter( wi => wi.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return(
    <WishlistItemContext.Provider value={{
      wishlistitems, 
      getAllWishlistItems,
      msgs,
      setMsgs,
      addWishlistItem,
      updateWishlistItem,
      deleteWishlistItem,
    }}>
      { children }
    </WishlistItemContext.Provider>
  )
}
export default WishlistItemProvider;