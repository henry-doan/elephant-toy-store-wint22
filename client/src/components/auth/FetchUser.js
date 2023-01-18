import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthConsumer } from "../../providers/AuthProvider";

const FetchUser = ({ authenticated, setUser, children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    if (authenticated) {
      setLoaded(true);
    } else {
      if (checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setUser(res.data.data);
            setLoaded(true);
          })
          .catch( res => {
            setLoaded(true);
          })
      } else {
        setLoaded(true);
      }
    }
  }, [])

  const checkLocalToken = () => {
    const token = localStorage.getItem('access-token');
    return token;
  }
  
  return loaded ? children : null; 
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { value => <FetchUser { ...props } { ...value } /> }
  </AuthConsumer>
)

export default ConnectedFetchUser;