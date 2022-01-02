import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../redux/actions/userActions';
import FormContainer from '../components/FormContainer';

const LoginPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(values.email, values.password));
  };

  return (
    <FormContainer>
      <h1>Iniciar Sesión</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='email'>
          <FormLabel>Email</FormLabel>
          <Form.Control
            type='email'
            placeholder='Ingrese su email'
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }></Form.Control>
        </FormGroup>
        <FormGroup controlId='password'>
          <FormLabel>Constraseña</FormLabel>
          <Form.Control
            type='password'
            placeholder='Ingrese su contraseña'
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })
            }></Form.Control>
        </FormGroup>
        <Button type='submit' variant='primary' className='mt-3'>
          Iniciar Sesión
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Eres un nuevo usuario?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Crear Cuenta
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
