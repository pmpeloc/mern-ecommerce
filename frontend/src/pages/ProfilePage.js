import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  getUserDetails,
  updateUserProfile,
} from '../redux/actions/userActions';
import actionTypes from '../redux/actions/action-types';

const ProfilePage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: actionTypes.USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setValues({ ...values, name: user.name, email: user.email });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, dispatch, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setMessage('Las contraseñas no son iguales');
    } else {
      dispatch(
        updateUserProfile({
          _id: user.id,
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Mi perfil</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {success && <Message variant='success'>Perfil actualizado</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
              Guardar Cambios
            </Button>
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>Mis órdenes</h2>
      </Col>
    </Row>
  );
};

export default ProfilePage;
