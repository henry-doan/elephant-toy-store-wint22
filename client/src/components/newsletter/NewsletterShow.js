import { NewsletterConsumer } from '../../providers/NewsletterProvider';
import { PurpleBtn } from '../styles/NewsletterStyles';

const NewsletterShow = ({ id, subscriber_name, email, deleteNewsletter }) => {

  return(
    <>
      <td>{subscriber_name}</td>
      <td>{email}</td>
      <td>
        <PurpleBtn
          type='button'
          onClick={() => deleteNewsletter(id)}
        >
          Delete
        </PurpleBtn>
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