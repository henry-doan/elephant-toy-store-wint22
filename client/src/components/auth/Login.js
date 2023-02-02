import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form } from 'react-bootstrap';
import { PurpleBtn } from '../styles/NewsletterStyles';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user);
    setUser({ email: '', password: '' })
  }

  return (
    <div className='text-center'>
      <h1 className='main-MontserratBold-font'>Sign In</h1>
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
        <PurpleBtn type="submit" className='main-MontserratBold-font'>
          Sign In
        </PurpleBtn>
      </Form>
    </div>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;