import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import { Container, Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {ItemConsumer} from '../../providers/ItemsProvider';
import { AuthConsumer } from '../../providers/AuthProvider';


const Reviews = ({reviews, getAllReviews, user }) => {
  const [adding, setAdd] = useState(false)
  const { itemId } = useParams()

  useEffect( () => {
    getAllReviews(itemId)
  }, [])

  return (
    <Container>
      {/* <h1>{itemId ? "hello" : "no id" }</h1> */}
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>My Reviews</h1>
      <ReviewList 
        reviews={reviews}
        itemId = {itemId}
        userId = {user.id}
      />
    </Container>
  )
}

const ConnectedReviews = (props) => (
  <ReviewConsumer>
    { value => <Reviews {...value} {...props} />}
  </ReviewConsumer>
)

const ConnectedReviewItem = (props) => (
  <ItemConsumer>
    { value => <ConnectedReviews {...value} {...props} />}
  </ItemConsumer>
)

const ConnectedReviewAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedReviewItem {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedReviewAuth;