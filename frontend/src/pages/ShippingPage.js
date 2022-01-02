import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../redux/actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {
    shippingAddress: { address, city, postalCode, country },
  } = cart;

  const [values, setValues] = useState({
    address: address || '',
    city: city || '',
    postalCode: postalCode || '',
    country: country || '',
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ ...values }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Datos del Envío</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address' className='mb-2'>
          <FormLabel>Dirección</FormLabel>
          <Form.Control
            type='address'
            placeholder='Ingrese su dirección'
            value={values.address}
            required
            onChange={(e) =>
              setValues({ ...values, address: e.target.value })
            }></Form.Control>
        </FormGroup>
        <FormGroup controlId='city' className='mb-2'>
          <FormLabel>Ciudad</FormLabel>
          <Form.Control
            type='city'
            placeholder='Ingrese su ciudad'
            value={values.city}
            required
            onChange={(e) =>
              setValues({ ...values, city: e.target.value })
            }></Form.Control>
        </FormGroup>
        <FormGroup controlId='postalCode' className='mb-2'>
          <FormLabel>Código Postal</FormLabel>
          <Form.Control
            type='postalCode'
            placeholder='Ingrese su Código Postal'
            value={values.postalCode}
            required
            onChange={(e) =>
              setValues({ ...values, postalCode: e.target.value })
            }></Form.Control>
        </FormGroup>
        <FormGroup controlId='country' className='mb-3'>
          <FormLabel>País</FormLabel>
          <Form.Control
            type='country'
            placeholder='Ingrese su país'
            value={values.country}
            required
            onChange={(e) =>
              setValues({ ...values, country: e.target.value })
            }></Form.Control>
        </FormGroup>
        <Button type='submit' variant='primary'>
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingPage;
