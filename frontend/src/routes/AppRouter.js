import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

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
