import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { itemId } = useParams()


  useEffect( () => {
    axios.get(`/api/items/${itemId}/reviews`)
      .then( res => setReviews(res.data))
      .catch( err => console.log(err))
  }, [])

  const addReview = (review) => {
    axios.post(`/api/items/${itemId}/reviews`, { review })
      .then( res => setReviews([...reviews, res.data]))
      .catch( err => console.log(err))
  }

   const updateReview = (id, review) => {
    axios.put(`/api/items/${itemId}/reviews/${id}`, { review })
      .then( res => {
        const newUpdatedReviews = reviews.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setReviews(newUpdatedReviews)      })
      .catch( err => console.log(err))
  }

  const deleteReview = (id) => {
    axios.delete(`/api/items/${itemId}/reviews/${id}`)
      .then( res => setReviews(reviews.filter( c => c.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <ReviewForm addReview={addReview} />
      <h1>Reviews</h1>
      <ReviewList
        reviews={reviews}
        updateReview={updateReview}
        deleteReview={deleteReview}
      />
    </>
  )
}

export default Reviews;