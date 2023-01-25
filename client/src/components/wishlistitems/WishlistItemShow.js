import { Image, ListGroup, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WishlistItemShow = ({item_id, wishlist_id }) => {
  const [item, setItem] = useState({ item_name: '' , description: '' , quantity: "" , category: "" , discount: "" , brand: "" , image: "" })
  
  useEffect( () => {
    axios.get(`/api/items/${item_id}`)
    .then(res => setItem(res.data))
    .catch(error => console.log(error))
  },[])

  const { item_name, image } = item

  return (
    <ListGroup.Item>
     <Image src={image} alt={item_name} width='100px'/>
     {item_name} 
      <Button>
        Remove From Wishlist
      </Button>
      <Link to={`/items/${item_id}`} state={{ ...item }}>
      <Button>
        View Toy
      </Button>
      </Link>
    </ListGroup.Item>
  )
}

const ConnectedWishlistItemShow = (props) => (
  <WishlistItemConsumer>
    { value => <WishlistItemShow {...value } {...props }/>}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItemShow;