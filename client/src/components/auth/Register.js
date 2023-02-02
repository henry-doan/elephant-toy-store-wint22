import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Row, Col } from 'react-bootstrap';
import { PurpleBtn, ParText1, ParText2 } from '../styles/NewsletterStyles';

const Register = ({ handleRegister, setShowRegister, setShowLogin }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( user.password === user.passwordConfirmation) {
      handleRegister(user);
      setUser({ email: '', password: '', passwordConfirmation: '' })
    } else {
      alert('Passwords does not match')
    }
  }

  const displayLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  }

  return (
    <div className='text-center'>
      <h1 className='main-MontserratBold-font'>Sign Up</h1>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Control 
            name='email'
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value })}
            required
            type="email" 
            placeholder="Email"
            className='text-center'
          />
        </Form.Group>

        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Control 
            name='password'
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value })}
            required
            type="password" 
            placeholder="Password" 
            className='text-center'
          />
        </Form.Group>

        <Form.Group className="mb-3, main-Montserrat-font">
          <Form.Control 
            name='passwordConfirmation'
            value={user.passwordConfirmation}
            onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
            required
            type="password" 
            placeholder="Confirm Password" 
            className='text-center'
          />
        </Form.Group>
        <PurpleBtn type="submit" className='main-MontserratBold-font'>
          Register
        </PurpleBtn>
        <br/>
        <Row>
          <Col xs={8} className='text-end'>
            <ParText1 className="mb-3, main-Montserrat-font">Already a member?</ParText1>
          </Col>
          <Col className='text-start'>
            <ParText2 type="button" color='#8999CC' className='main-MontserratBold-font' onClick={() => displayLogin()}> Sign In</ParText2>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;