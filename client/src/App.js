
import { Routes, Route } from 'react-router-dom';
import Categorys from './components/category/Categorys';
import Home from './components/shared/Home';
import Footer from './components/shared/Footer';


const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Categorys />} />
    </Routes>
     <Footer/>
  </>
)

export default App;
