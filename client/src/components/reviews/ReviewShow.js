import { useState } from 'react';
import ReviewForm from './ReviewForm'; 

const ReviewShow = ({ item, body, rating, updateReview, deleteReview }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <ReviewForm 
            name={item}
            body={body}
            rating={rating}
            updateReview={updateReview}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h3>{item}</h3>
          <p>{body}</p>
          <p>{rating}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteReview}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default ReviewShow;