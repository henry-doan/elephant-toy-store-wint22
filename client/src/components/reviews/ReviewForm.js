import { useState, useEffect } from 'react';
import { ReviewConsumer } from '../../providers/ReviewsProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const ReviewForm = ({ setAdd, addReview, updateReview }) => {
  const [review, setReview] = useState({ rating: '', comment: '', })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { rating, comment, } = location.state
      setReview({ rating, comment })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReview(id, review)
    } else {
      addReview(review)
      setAdd(false)
    }
    setReview({ rating: '', comment: '',})
  }

  return(
    <>
      { id ? <h1>Rating</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            name='rating'
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            name='comment'
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value})}
            type='text'
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

const ConnectedReviewForm = (props) => (
  <ReviewConsumer>
    { value => <ReviewForm {...props} {...value} />}
  </ReviewConsumer>
)

export default ConnectedReviewForm;