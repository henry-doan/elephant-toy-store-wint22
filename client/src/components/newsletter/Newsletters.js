import { NewsletterConsumer } from "../../providers/NewsletterProvider";
import NewsletterList from './NewsletterList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import NewsletterForm from './NewsletterForm';

const Newsletters = ({ newsletters, getAllNewsletters }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllNewsletters()
  }, [])

  return (
    <Container>

      <Button variant="primary" onClick={() => setAdd(true)}>
        Sign Up
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to our Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsletterForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <NewsletterList 
        newsletters={newsletters}
      />
    </Container>
  )
}

const ConnectedNewsletters = (props) => (
  <NewsletterConsumer>
    { value => <Newsletters {...value} {...props} />}
  </NewsletterConsumer>
)

export default ConnectedNewsletters;