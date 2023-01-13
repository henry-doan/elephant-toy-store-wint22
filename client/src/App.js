import { Routes, Route } from 'react-router-dom';
import Categorys from './components/category/Categorys';
import Home from './components/shared/Home';


const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Categorys />} />
    </Routes>
  </>
)

export default App;
