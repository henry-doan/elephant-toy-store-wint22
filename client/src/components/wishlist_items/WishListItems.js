import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WishListItemList from './WishListItemList';
import WishListItemForm from './WishListItemForm';

const WishListItems = () => {
  const [wishlistitems, setWishListItems] = useState([])
  const { wishlistId } = useParams()


  useEffect( () => {
    axios.get(`/api/wishlist/${wishlistId}/wishlistitems`)
      .then( res => setWishListItems(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWishListItem = (wishlistitem) => {
    axios.post(`/api/wishlist/${wishlistId}/wishlistitems`, { wishlistitem })
      .then( res => setWishListItems([...wishlistitems, res.data]))
      .catch( err => console.log(err))
  }

   const updateWishListItem = (id, wishlistitem) => {
    axios.put(`/api/wishlist/${wishlistId}/wishlistitems/${id}`, { wishlistitem })
      .then( res => {
        const newUpdatedWishListItems = wishlistitems.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setWishListItems(newUpdatedWishListItems)      })
      .catch( err => console.log(err))
  }

  const deleteWishListItem = (id) => {
    axios.delete(`/api/wishlist/${wishlistId}/wishlistitems/${id}`)
      .then( res => setWishListItems(wishlistitems.filter( wi => wi.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <WishListItemForm addWishListItem={addWishListItem} />
      <h1>WishListItems</h1>
      <WishListItemList
        wishlistitems={wishlistitems}
        updateWishListItem={updateWishListItem}
        deleteWishListItem={deleteWishListItem}
      />
    </>
  )
}

export default WishListItems;