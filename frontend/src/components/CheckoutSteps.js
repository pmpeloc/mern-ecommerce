import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ ...steps }) => {
  const { step1, step2, step3, step4 } = steps;
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Iniciar Sesión</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Iniciar Sesión</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Datos del Envío</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Datos del Envío</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Datos del Pago</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Datos del Pago</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Finalizar la Compra</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Finalizar la Compra</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
