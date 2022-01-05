import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import actionTypes from '../redux/actions/action-types';

const UserEditPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    isAdmin: false,
  });

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: actionTypes.USER_UPDATE_RESET });
      navigate('/admin/userlist');
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setValues({
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        name: values.name,
        email: values.email,
        isAdmin: values.isAdmin,
      })
    );
  };

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Regresar
      </Link>
      <FormContainer>
        <h1>Editar Usuario</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
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
            <FormGroup controlId='isadmin' className='mb-3'>
              <Form.Check
                type='checkbox'
                label='¿Es Admin?'
                checked={values.isAdmin}
                onChange={(e) =>
                  setValues({ ...values, isAdmin: e.target.checked })
                }></Form.Check>
            </FormGroup>
            <Button type='submit' variant='primary'>
              Guardar Cambios
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditPage;
