import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button } from 'react-bootstrap';

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
    <>
      <div className='text-center'>
        <h1 className='main-MontserratBold-font'>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3, main-Montserrat-font">
            <Form.Control 
              name='email'
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value })}
              required
              type="email" 
              placeholder="Enter email"
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
            />
          </Form.Group>

          <Form.Group className="mb-3, main-Montserrat-font">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control 
              name='passwordConfirmation'
              value={user.passwordConfirmation}
              onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
              required
              type="password" 
              placeholder="Password" 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="button" onClick={() => displayLogin()}>
            Already have an account?
          </Button>
        </Form>
      </div>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;