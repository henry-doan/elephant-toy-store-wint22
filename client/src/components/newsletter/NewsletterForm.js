import { useState, useEffect } from 'react';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const NewsletterForm = ({ setAdd, addNewsletter, updateNewsletter }) => {
  const [newsletter, setNewsletter] = useState({ subscriber_name: '', email: '' })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { subscriber_name, email } = location.state
      setNewsletter({ subscriber_name, email })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNewsletter(id, newsletter)
    } else {
      addNewsletter(newsletter)
      setAdd(false)
    }
    setNewsletter({ subscriber_name: '', email: '' })
  }

  return(
    <>
      { id ? <h1>Subscribe to our Newsletter</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control 
            name='subscriber_name'
            value={newsletter.subscriber_name}
            onChange={(e) => setNewsletter({ ...newsletter, subscriber_name: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name='email'
            value={newsletter.email}
            onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value})}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  )
}

const ConnectedNewsletterForm = (props) => (
  <NewsletterConsumer>
    { value => <NewsletterForm {...props} {...value} />}
  </NewsletterConsumer>
)

export default ConnectedNewsletterForm;