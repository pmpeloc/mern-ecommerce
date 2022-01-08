import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import OrderListPage from '../pages/OrderListPage';
import OrderPage from '../pages/OrderPage';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import ProductEditPage from '../pages/ProductEditPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ShippingPage from '../pages/ShippingPage';
import UserEditPage from '../pages/UserEditPage';
import UserListPage from '../pages/UserListPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart'>
              <Route path=':id' element={<CartPage />} />
              <Route path='' element={<CartPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/shipping' element={<ShippingPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/placeorder' element={<PlaceOrderPage />} />
            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
            <Route path='/admin/productlist' element={<ProductListPage />} />
            <Route path='/admin/orderlist' element={<OrderListPage />} />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditPage />}
            />
            <Route path='/order/:id' element={<OrderPage />} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem', textAlign: 'center' }}>
                  <p>404</p>
                </main>
              }
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
