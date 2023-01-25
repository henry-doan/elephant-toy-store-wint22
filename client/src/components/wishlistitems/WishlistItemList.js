import { Container, ListGroup,} from 'react-bootstrap';
import { useEffect,} from 'react';
import { WishlistItemConsumer } from '../../providers/WishlistItemsProvider';
import WishlistItemShow from './WishlistItemShow';

const WishlistItemList = ({ wishlistitems, getAllWishlistItems, wishlistId }) => {
  useEffect( () => {
    getAllWishlistItems(wishlistId)
  },[])

  return (
    <Container>
       <ListGroup variant="flush">
          { wishlistitems.map( wi => 
            <WishlistItemShow { ...wi } key={wi.id}/>
          )}
      </ListGroup>
    </Container>
  )
}

const ConnectedWishlistItemlist = (props) => (
  <WishlistItemConsumer>
    { value => <WishlistItemList {...value } {...props }/>}
  </WishlistItemConsumer>
)

export default ConnectedWishlistItemlist;