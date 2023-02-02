import { useState, useEffect } from 'react';
import { WishlistConsumer } from '../../providers/WishlistProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const WishlistForm = ({ setAdd, addWishlist, updateWishlist }) => {
  const [wishlist, setWishlist] = useState({ wish_item_quantity: 0, wish_total: 0, wishlist_name: '' })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { wish_item_quantity, wish_total, wishlist_name,} = location.state
      setWishlist({ wish_item_quantity, wish_total, wishlist_name})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWishlist(id, wishlist)
    } else {
      addWishlist(wishlist)
      setAdd(false)
    }
    setWishlist({ wish_item_quantity: 0, wish_total: 0, wishlist_name: ''})
  }

  return(
    <>
      { id ? <h1 className='main-MontserratBold-font'>Update Wishlist</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Label>Wishlist Name</Form.Label>
          <Form.Control 
            name='wishlist_name'
            value={wishlist.wishlist_name}
            onChange={(e) => setWishlist({ ...wishlist, wishlist_name: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Label>Wishlist Quantity</Form.Label>
          <Form.Control 
            name='wish_item_quantity'
            value={wishlist.wish_item_quantity}
            onChange={(e) => setWishlist({ ...wishlist, wish_item_quantity: e.target.value})}
            type='integer'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Label>Wishlist Total</Form.Label>
          <Form.Control 
            name='wish_total'
            value={wishlist.wish_total}
            onChange={(e) => setWishlist({ ...wishlist, wish_total: e.target.value})}
            type='float'
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedWishlistForm = (props) => (
  <WishlistConsumer>
    { value => <WishlistForm {...props} {...value} />}
  </WishlistConsumer>
)

export default ConnectedWishlistForm;