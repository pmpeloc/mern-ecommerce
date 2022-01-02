import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../redux/actions/userActions';

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
    if (values.password !== values.confirmPassword) {
      setMessage('Las contraseñas no son iguales');
    } else {
      dispatch(register(values.name, values.email, values.password));
    }
  };

  return (
    <FormContainer>
      <h1>Iniciar Sesión</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <FormGroup controlId='name' className='mb-2'>
              <FormLabel>Nombre</FormLabel>
              <Form.Control
                type='name'
                placeholder='Ingrese su nombre'
                value={values.name}
                onChange={(e) =>
                  setValues({ ...values, name: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='email' className='mb-2'>
              <FormLabel>Email</FormLabel>
              <Form.Control
                type='email'
                placeholder='Ingrese su email'
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='password' className='mb-2'>
              <FormLabel>Constraseña</FormLabel>
              <Form.Control
                type='password'
                placeholder='Ingrese su contraseña'
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='confirmPassword' className='mb-3'>
              <FormLabel>Confirmar constraseña</FormLabel>
              <Form.Control
                type='password'
                placeholder='Ingrese nuevamente su contraseña'
                value={values.confirmPassword}
                onChange={(e) =>
                  setValues({ ...values, confirmPassword: e.target.value })
                }></Form.Control>
            </FormGroup>
            <Button type='submit' variant='primary'>
              Crear Cuenta
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              Ya tienes una cuenta?{' '}
              <Link to={redirect ? `/login?redirect=/${redirect}` : '/login'}>
                Iniciar Sesión
              </Link>
            </Col>
          </Row>
        </>
      )}
    </FormContainer>
  );
};

export default RegisterPage;
