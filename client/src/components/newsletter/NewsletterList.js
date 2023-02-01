import { Container, Table } from 'react-bootstrap';
import NewsletterShow from './NewsletterShow';
import { NewsletterConsumer } from "../../providers/NewsletterProvider";
import { useEffect } from 'react';

const NewsletterList = ({ newsletters, getAllNewsletters }) => {

  useEffect( () => {
    getAllNewsletters()
  }, [])

  return (
    <Container>
      <br/>
      <h2>Admin Dashboard</h2>
      <br />
      <h5>Newsletter Subscriber List</h5>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { newsletters.map( n => 
            <tr key={n.id}>
              <NewsletterShow 
                {...n}
              />
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

const ConnectedNewsletterList = (props) => (
  <NewsletterConsumer>
    { value => <NewsletterList {...value} {...props} />}
  </NewsletterConsumer>
)

export default ConnectedNewsletterList;