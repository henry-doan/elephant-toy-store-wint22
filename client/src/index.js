import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import ItemsProvider from './providers/ItemsProvider';
import OrderProvider from './providers/OrderProvider';
import ReviewProvider from './providers/ReviewProvider';
import WishlistProvider from './providers/WishlistProvider';
import WishlistItemProvider from './providers/WishlistItemsProvider';
import NewsletterProvider from './providers/NewsletterProvider';
import OrderItemProvider from './providers/OrderItemProvider';
import './components/styles/Poppins/Poppins-Regular.ttf';
import './components/styles/Poppins/Poppins-ExtraBold.ttf';
import './components/styles/Open_Sans/OpenSans.ttf';
import './components/styles/Montserrat/Montserrat-SemiBold.ttf';
import './components/styles/Montserrat/Montserrat-Regular.ttf';


initMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsletterProvider>
        <AuthProvider>
          <ItemsProvider>
            <OrderProvider>
              <ReviewProvider>
                <WishlistProvider>
                  <OrderItemProvider>
                    <WishlistItemProvider>
                      <App />
                    </WishlistItemProvider>
                  </OrderItemProvider>
                </WishlistProvider>
              </ReviewProvider>
            </OrderProvider>
          </ItemsProvider>
        </AuthProvider>
      </NewsletterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();