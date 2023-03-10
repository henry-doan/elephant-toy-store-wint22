import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReviewContext = React.createContext();
export const ReviewConsumer = ReviewContext.Consumer;

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()


  const getAllReviews = (itemId) => {
    axios.get(`/api/items/${itemId}/reviews`)
      .then( res => setReviews(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addReview = (review, itemId) => {
    axios.post(`/api/items/${itemId}/reviews`, { review })
      .then( res => setReviews([...reviews, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateReview = (itemId, review, id) => {
    axios.put(`/api/items/${itemId}/reviews/${id}`, { review })
      .then(res => {
        const newUpdatedReviews = reviews.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setReviews(newUpdatedReviews)
        navigate(`/items/${itemId}/reviews`)
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteReview = (id, itemId) => {
    axios.delete(`/api/items/${itemId}/reviews/${id}`)
      .then( res => setReviews( reviews.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <ReviewContext.Provider value={{
      reviews, 
      getAllReviews,
      msgs,
      setMsgs,
      addReview,
      updateReview,
      deleteReview,
    }}>
      { children }
    </ReviewContext.Provider>
  )
}

export default ReviewProvider;