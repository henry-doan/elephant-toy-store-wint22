import { useState, useEffect } from 'react';
import { WishlistItemConsumer } from '../../providers/WishlistProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const WishlistItemForm = ({setAdd, addWishlistItem, updateWishlistItem}) => {
  const [wishlistitem,setWishlistItem]= useState({item_id:0})
  const location = useLocation()
  const {id} = useParams()

  useEffect(() => {
    if (id) {
      const {item_id} = location.state
      setWishlistItem({item_id})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWishlistItem(id, wishlistitem)
    } else {
      addWishlistItem(wishlistitem)
      setAdd(false)
    }
    setWishlistItem({item_id})
  }
  
  return(
    <>
    { id ? <h1>Items?</h1> : null}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="omega">
        <Form.Label>
          SKU
        </Form.Label>
        <Form.Control
          name='item_id'
          value={wishlistitem.item_id}
          onChange={(e) => setWishlistItem ({...wishlistitem, item_id: e. target.value})}
          required
        />
      </Form.Group>
      <Button varient='primary' type='submit'>
        Bingo
      </Button>
    </Form>
    </>
  )
}
  const ConnectedWishlistItemForm = (props) => (
  <WishlistItemConsumer>
    { value => <WishlistItemForm {...props}{...value} />}
  </WishlistItemConsumer>
  )
  export default ConnectedWishlistItemForm;
