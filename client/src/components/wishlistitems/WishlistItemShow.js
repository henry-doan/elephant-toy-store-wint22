import { Image, ListGroup, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PurpleBtn } from '../styles/NewsletterStyles';
import { Scrollbar } from '../styles/WishlistStyles';

const WishlistItemShow = ({ id, item_id, wishlistId, deleteWishlistItem }) => {
  const [item, setItem] = useState({ item_name: '' , description: '' , quantity: "" , category: "" , discount: "" , brand: "" , image: "" })
  
  useEffect( () => {
    axios.get(`/api/items/${item_id}`)
    .then(res => setItem(res.data))
    .catch(error => console.log(error))
  },[])

  const { item_name, image } = item

  return(
    <Scrollbar>
    <ListGroup.Item className='main-Sans-font'>
     <Image src={image} alt={item_name} width='100px'/>
     <br></br>
     {item_name} 
     <br></br>
      <PurpleBtn onClick={() => deleteWishlistItem(wishlistId, id)} className='main-bold-font'>
        Remove From Wishlist
      </PurpleBtn>
      <br></br>
      <Link to={`/items/${item_id}`} state={{ ...item }}>
      <PurpleBtn className='main-bold-font'>
        View Toy
      </PurpleBtn>
      </Link>
    </ListGroup.Item>
    </Scrollbar>
  )
}

const ConnectedWishlistItemShow = (props) => (
  <WishlistItemConsumer>
    { value => <WishlistItemShow {...value } {...props }/>}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItemShow;