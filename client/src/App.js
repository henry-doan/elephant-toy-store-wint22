import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
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
import ItemShow from './components/items/ItemsShow';
import AdminProtectedRoute from './components/auth/AdminProtectedRoute';
import NewsletterList from './components/newsletter/NewsletterList';
import About from './components/shared/About';
import Footer from './components/shared/Footer';
import Reviews from './components/reviews/Reviews';
import ReviewForm from './components/reviews/ReviewForm';
import AllOrders from './components/orders/AllOrders';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/items' element={<Items/>} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}
          <Route path='/items' element={<Items />} />
          <Route path='/categorys' element={<Categorys />} />
          <Route path='/about' element={<About/>} />
          <Route path='/items/:id' element={<ItemShow/>} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/cart' element={<Orders />} />
            <Route path='/:id/updateItem' element={<ItemForm />} />
            <Route path='/:id/updateOrder' element={<OrderForm />} />
            <Route path='/wishlists' element={<Wishlists />} />
            <Route path='/:id/updateWishlist' element={<WishlistForm />} />
            <Route path='/items/:itemId/reviews' element={<Reviews />} />
            <Route path='/items/:itemId/reviewform' element={<ReviewForm />} />

          </Route>

          <Route path='/' element={<AdminProtectedRoute />} >
            <Route path='/newsletters' element={<NewsletterList />} />
            <Route path='/orders' element={<AllOrders />} />
          </Route>

          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
    <Footer/>
  </>
)

export default App;