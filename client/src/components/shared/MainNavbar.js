import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout}) => {
  
    const rightNavItems = () => {
      // links to show up when user is logged in
      if (user) {
        return (
          <>
            <Link to='/cart'>
              <Button>Cart</Button>
            </Link>
            <Link to='/wishlists'>
              <Button>Wishlists</Button>
            </Link>
            <Button onClick={() => handleLogout() }>
              Logout
            </Button>
          </>
        )
      } else {
        // links to show up when NOT logged in
        return (
          <>
            <Link to='/login'>
              <Button>Login</Button>
            </Link>
            <Link to='/register'>
              <Button>SignUp</Button>
            </Link>
          </>
        )
      }
    }
  
  // have links regardless of login or not
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/items'>
            <Button>Toys</Button>
          </Link>
          <Link to='/categorys'>
            <Button>Toy Categories</Button>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;