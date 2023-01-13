import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';


const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </>
)

export default App;
