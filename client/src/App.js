import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import Items from './components/items/Items';
import Categorys from './components/category/Categorys';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Orders from './components/orders/Orders';
import ItemForm from './components/items/ItemForm';
import OrderForm from './components/orders/OrderForm';
import Wishlists from './components/wishlists/Wishlists';
import WishlistForm from './components/wishlists/WishlistForm';
import AdminProtectedRoute from './components/auth/AdminProtectedRoute';
import NewsletterList from './components/newsletter/NewsletterList';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/items' element={<Items />} />
          <Route path='/categorys' element={<Categorys />} />

          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/cart' element={<Orders />} />
            <Route path='/:id/updateItem' element={<ItemForm />} />
            <Route path='/:id/updateOrder' element={<OrderForm />} />
            <Route path='/wishlists' element={<Wishlists />} />
            <Route path='/:id/updateWishlist' element={<WishlistForm />} />
          </Route>

          <Route path='/' element={<AdminProtectedRoute />} >
            <Route path='/newsletters' element={<NewsletterList />} />
          </Route>

          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;