import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const WishlistItemContext = React.createContext();
export const WishlistItemsConsumer = WishlistItemsContext.Consumer;

const WishlistItemProvider = ({children}) => {
  const [wishlistitems, setWishlistItems] = useState([])
  const { wishlistId } = useParams()
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()


  const getAllWishlistItems = (wishlistId) => {
    axios.get(`/api/wishlist/${wishlistId}/wishlistitems`)
      .then( res => setWishlistItems(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addWishlistItem = (wishlistId, wishlistitem) => {
    axios.post(`/api/wishlist/${wishlistId}/wishlistitems`, { wishlistitem })
      .then( res => setWishlistItems([...wishlistitems, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

   const updateWishlistItem = (wishlistId, id, wishlistitem) => {
    axios.put(`/api/wishlist/${wishlistId}/wishlistitems/${id}`, { wishlistitem })
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

  const deleteWishlistItem = (wishlistId, id) => {
    axios.delete(`/api/wishlist/${wishlistId}/wishlistitems/${id}`)
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