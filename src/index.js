import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvdier } from './context/user-context';
import { ProductsProvider } from './context/product-context';
import { CartProvider } from './context/cart-context';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   <UserProvdier>
     <ProductsProvider>
       <CartProvider>
       <App />
        </CartProvider> 
     </ProductsProvider>
   </UserProvdier>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

