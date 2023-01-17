import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 error, page not found</h1>
    {/* Link are a tags to nav inside the app */}
    <Link to='/'>
      Return Home
    </Link>
  </>
)

export default Nomatch;