import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import productService from '../services/productService';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService
      .getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Últimos Productos</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
