import { useState } from 'react';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';
import { Form, Container } from 'react-bootstrap';
import { PurpleBtn } from '../styles/NewsletterStyles';

const NewsletterForm = ({ addNewsletter }) => {
  const [newsletter, setNewsletter] = useState({ subscriber_name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewsletter(newsletter)
    setNewsletter({ subscriber_name: '', email: '' })
  }

  return(
    <>
      <Container>
        <h1>Let the games begin</h1>
        <h6>Sign Up for our Newsletter!</h6>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
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
          <PurpleBtn type="submit">
            Register
          </PurpleBtn>
        </Form>
      </Container>
    </>
  )
}

const ConnectedNewsletterForm = (props) => (
  <NewsletterConsumer>
    { value => <NewsletterForm {...props} {...value} />}
  </NewsletterConsumer>
)

export default ConnectedNewsletterForm;