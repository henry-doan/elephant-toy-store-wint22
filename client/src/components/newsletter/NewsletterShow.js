import { Button } from 'react-bootstrap';
import { NewsletterConsumer } from '../../providers/NewsletterProvider';

const NewsletterShow = ({ id, subscriber_name, email, deleteNewsletter }) => {

  return(
    <>
      <td>{subscriber_name}</td>
      <td>{email}</td>
      <td>
        <Button
          onClick={() => deleteNewsletter(id)}
        >
          Delete
        </Button>
      </td>
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