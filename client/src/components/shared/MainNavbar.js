import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Image, Row, Col } from 'react-bootstrap';
import SmallLogo from '../images/SmallLogo.png';
import CartLogo from '../images/CartLogo.png';
import BagLogo from '../images/BagLogo.png';
import AccountLogo from '../images/AccountLogo.png';
import AccountRegLogo from '../images/AccountRegLogo.png';
import LogoutIcon from '../images/LogoutIcon.png';
import { NavBtn } from "../styles/NewsletterStyles";
import AdminIcon from '../images/AdminIcon.png';

const MainNavbar = ({ user, handleLogout}) => {
  
    const rightNavItems = () => {
      // links to show up when user is logged in
      if (user) {
        return (
          <>
            { user.admin ? 
              <>
                <Link to='/newsletters'>
                  <Image 
                    src={AdminIcon}
                    alt='Elephant Store' 
                    width='30px'
                    className='me-3'
                  />
                </Link>
              </>
              : 
              <>
                <Link to='/cart'>
                  <Image 
                    src={CartLogo}
                    alt='Elephant Store' 
                    width='30px'
                    className='me-3'
                  />
                </Link>
                <Link to='/wishlists'>
                  <Image 
                    src={BagLogo}
                    alt='Elephant Store' 
                    width='30px'
                    className='me-3'
                  />
                </Link>
              </>
            }
            <Link onClick={() => handleLogout() }>
              <Image 
                src={LogoutIcon}
                alt='Elephant Store' 
                width='30px'
                className='me-3'
              />
            </Link>
          </>
        )
      } else {
        // links to show up when NOT logged in
        return (
          <>
            <Link to='/login'>
              <Image 
                src={AccountLogo}
                alt='Elephant Store' 
                width='30px'
                className='me-3'
              />
            </Link>
            <Link to='/register'>
              <Image 
                src={AccountRegLogo}
                alt='Elephant Store' 
                width='30px'
                className='me-3'
              />
            </Link>
          </>
        )
      }
    }
  
  // have links regardless of login or not
  return (
    <>
      <div>
        <Row>
          <Col sm={4}>
            <Link to='/'>
              <Image 
                src={SmallLogo}
                alt='Elephant Store' 
              />
            </Link>
          </Col>
          <Col>
            <Link to='/categorys'>
              <NavBtn>Toys</NavBtn>
            </Link>
          </Col>
          <Col>
            <Link to='/items'>
              <NavBtn>Search All</NavBtn>
            </Link>
          </Col>
          <Col className="align-items-center justify-content-end d-flex">
            { rightNavItems() }
          </Col>
        </Row>
      </div>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;