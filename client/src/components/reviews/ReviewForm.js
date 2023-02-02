import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import { PurpleBtn } from '../styles/NewsletterStyles';

const ReviewForm = ({ setAdd, addReview, updateReview, id, item_id, rating, comment, setShow }) => {
  const [review, setReview] = useState({ rating: '', comment: '', })
  const { itemId } = useParams()
  
  useEffect( () => {
    if (id) {
      setReview({ rating, comment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReview(itemId, review, id)
      setShow(false)
    } else {
      addReview(review, itemId)
      setAdd(false)
    }
    setReview({ rating: '', comment: '',})
  }

  return(
    <>
      <h1>Review Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            name='rating'
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value})}
            max='5'
            min='0'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            name='comment'
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value})}
            as='textarea'
            row={3}
            required
          />
        </Form.Group>
        <PurpleBtn variant="primary" type="submit">
          Submit
        </PurpleBtn>
      </Form>
    </>
  )
}

const ConnectedReviewForm = (props) => (
  <ReviewConsumer>
    { value => <ReviewForm {...props} {...value} />}
  </ReviewConsumer>
)


export default ConnectedReviewForm;