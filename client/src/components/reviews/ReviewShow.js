import { useEffect, useState } from 'react';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import axios from 'axios';
import ReviewForm from '../reviews/ReviewForm';
import Modal from 'react-bootstrap/Modal';
import { AuthConsumer } from '../../providers/AuthProvider';
import { PurpleBtn } from '../styles/NewsletterStyles';


const ReviewShow = ({ id, comment, rating, item_id, user_id, userId, deleteReview, itemId, user }) => {
  const [creatorUser, setUser] = useState({email: ''})
  const [showing, setShow] = useState(false)


  
  useEffect(() => {
  axios.get(`/api/users/${user_id}`)
  .then ( res => setUser(res.data))
  .catch ( err => console.log(err))
  }, [])
  
  const starRating = (rating) => {
    let starArray = []
    for (let i = 0; i < rating; i++) {
      starArray.push(<div class='flexContainer' style={{display: 'inline'}}>
        <span>⭐</span>
      </div>)
    }
    return starArray
  }

  const checkForUser = () => {
    const currentUser = userId
    if(user_id === currentUser || user.admin == true) {
      return (
        <>
          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ReviewForm 
              id={id}
              item_id={item_id}
              comment={comment}
              rating={rating}
              setShow={setShow}
              />
            </Modal.Body>
            </Modal>
            <PurpleBtn onClick={() => setShow(true)}>Edit</PurpleBtn>
          <PurpleBtn onClick={() => deleteReview(id, itemId)}>
            Delete
          </PurpleBtn>
        </>
      )
    }
  }
  
  return (
    <>
      <p>Created By: {creatorUser.email}</p>
      {starRating(rating) }
      <p>{comment}</p>
      {checkForUser() }
    </>
  )
}

const ConnectedReviewShow = (props) => (
  <ReviewConsumer>
    { value => <ReviewShow {...props} {...value } />}
  </ReviewConsumer>
)

const ConnectedAuthReview = (props) => (
  <AuthConsumer>
    { value => <ConnectedReviewShow {...props} {...value } />}
  </AuthConsumer>
)

export default ConnectedAuthReview;