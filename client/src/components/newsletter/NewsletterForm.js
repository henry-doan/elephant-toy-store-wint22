import { useState } from 'react';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';
import { Form, Container } from 'react-bootstrap';
import { PurpleBtn } from '../styles/NewsletterStyles';

const NewsletterForm = ({ addNewsletter, setShowSubscribe }) => {
  const [newsletter, setNewsletter] = useState({ subscriber_name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewsletter(newsletter)
    setNewsletter({ subscriber_name: '', email: '' })
    setShowSubscribe(false)
  }

  return(
    <>
      <Container className='text-center'>
        <h1 className='main-bold-font'>Join our Newsletter</h1>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2, main-font">
            <Form.Control 
              name='subscriber_name'
              value={newsletter.subscriber_name}
              onChange={(e) => setNewsletter({ ...newsletter, subscriber_name: e.target.value})}
              required
              placeholder="Name"
              className='text-center'
            />
          </Form.Group>
          <Form.Group className="mb-3, main-font">
            <Form.Control 
              name='email'
              value={newsletter.email}
              onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value})}
              required
              placeholder="Email"
              className='text-center'
            />
          </Form.Group>
          <PurpleBtn type="submit" className='main-font'>
            Subscribe
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