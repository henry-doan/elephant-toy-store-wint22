import { useState } from 'react';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';
import { Form, Button } from 'react-bootstrap';

const NewsletterForm = ({ addNewsletter }) => {
  const [newsletter, setNewsletter] = useState({ subscriber_name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewsletter(newsletter)
    setNewsletter({ subscriber_name: '', email: '' })
  }

  return(
    <>
      <h3>Subscribe to our Newsletter</h3>
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