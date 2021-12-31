import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import productService from '../services/productService';

const ProductPage = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    productService
      .getProductById(params.id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  const renderRating = product.rating ? (
    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
  ) : null;

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Atrás
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{renderRating}</ListGroup.Item>
            <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Precio</Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Disponible' : 'Sin stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='d-grid'>
                <Button
                  disabled={product.countInStock === 0}
                  variant='primary'
                  className='text-uppercase fw-bold'
                  type='button'>
                  Agregar al Carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
