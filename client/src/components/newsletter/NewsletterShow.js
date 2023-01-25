import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';

const NewsletterShow = ({ id, subscriber_name, email, deleteNewsletter }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Body>
          <Card.Title>{subscriber_name}</Card.Title>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h1>{subscriber_name}</h1>
                <Link
                  to={`/${id}/updateNewsletter`}
                  state={{
                    id,
                    subscriber_name,
                    email
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteNewsletter(id)}
                >
                  Delete
                </Button>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <br />
    </>
  )
}

const ConnectedNewsletterShow = (props) => (
  <NewsletterConsumer>
    { value => <NewsletterShow {...props} {...value} />}
  </NewsletterConsumer>
)

export default ConnectedNewsletterShow;