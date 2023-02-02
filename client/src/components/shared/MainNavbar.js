import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Image, Row, Col, Modal } from 'react-bootstrap';
import SmallLogo from '../images/SmallLogo.png';
import CartLogo from '../images/CartLogo.png';
import BagLogo from '../images/BagLogo.png';
import AccountLogo from '../images/AccountLogo.png';
import AccountRegLogo from '../images/AccountRegLogo.png';
import LogoutIcon from '../images/LogoutIcon.png';
import { NavBtn } from "../styles/NewsletterStyles";
import AdminIcon from '../images/AdminIcon.png';
import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";


const MainNavbar = ({ user, handleLogout}) => {
  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); 

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
            <Image 
              src={AccountLogo}
              alt='Elephant Store' 
              width='30px'
              className='me-3'
              onClick={() => setShowLogin(true)}
            />
            <Modal show={showLogin} onHide={() => setShowLogin(false)}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Login />
              </Modal.Body>
            </Modal>
            <Image 
              src={AccountRegLogo}
              alt='Elephant Store' 
              width='30px'
              className='me-3'
              onClick={() => setShowRegister(true)}
            />
            <Modal show={showRegister} onHide={() => setShowRegister(false)}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
              </Modal.Body>
            </Modal>
          </>
        )
      }
    }
  
  // have links regardless of login or not
  return (
    <>
      <div>
        <Row className="main-bold-font">
          <Col xs={3}>
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
            <Link to='/about'>
              <NavBtn>Meet the Team</NavBtn>
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