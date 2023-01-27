import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NewsletterContext = React.createContext();
export const NewsletterConsumer = NewsletterContext.Consumer;

const NewsletterProvider = ({ children }) => {
  const [newsletters, setNewsletters] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllNewsletters = () => {
    axios.get('/api/newsletters')
      .then( res => setNewsletters(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addNewsletter = (newsletter) => {
    axios.post('/api/newsletters', { newsletter })
      .then( res => setNewsletters([...newsletters, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateNewsletter = (id, newsletter) => {
    axios.put(`/api/newsletters/${id}`, { newsletter })
      .then(res => {
        const newUpdatedNewsletters = newsletters.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setNewsletters(newUpdatedNewsletters)
        navigate('/newsletters')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteNewsletter = (id) => {
    axios.delete(`/api/newsletters/${id}`)
      .then( res => setNewsletters( newsletters.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <NewsletterContext.Provider value={{
      newsletters, 
      getAllNewsletters,
      msgs,
      setMsgs,
      addNewsletter,
      updateNewsletter,
      deleteNewsletter,
    }}>
      { children }
    </NewsletterContext.Provider>
  )
}

export default NewsletterProvider;