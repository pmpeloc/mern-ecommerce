import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { Link } from 'react-router-dom';

const PlaceOrderPage = () => {
  const cart = useSelector((state) => state.cart);
  const {
    shippingAddress: { address, city, postalCode, country },
    paymentMethod,
    cartItems,
  } = cart;

  // Calculate prices
  cart.itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100;
  cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2));
  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);

  const placeOrderHandler = () => {
    console.log('enviar');
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Datos del Envío</h2>
              <p>
                <strong>Dirección: </strong>
                {`${address}, ${city} ${postalCode}, ${country}`}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Método de Pago</h2>
              <strong>Método: </strong>
              {paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Artículos del Carrito</h2>
              {cartItems.length === 0 ? (
                <Message>Tu carrito está vacío</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item, i) => (
                    <ListGroup.Item key={i}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Resumen de Compra</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>$ {cart.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Costo de Envío</Col>
                  <Col>$ {cart.shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Impuestos</Col>
                  <Col>$ {cart.taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>$ {cart.totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='d-grid'>
                <Button
                  type='button'
                  disabled={cartItems === 0}
                  onClick={placeOrderHandler}
                  className='text-uppercase fw-bold'>
                  Finalizar la Compra
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderPage;
