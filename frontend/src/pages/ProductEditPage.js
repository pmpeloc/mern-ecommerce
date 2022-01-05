import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { listProductsDetails } from '../redux/actions/productActions';

const ProductEditPage = () => {
  const [values, setValues] = useState({
    name: '',
    price: 0,
    image: '',
    brand: '',
    category: '',
    countInStock: 0,
    description: '',
  });

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listProductsDetails(productId));
    } else {
      setValues({
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        description: product.description,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product, productId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Update product
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Regresar
      </Link>
      <FormContainer>
        <h1>Editar Producto</h1>
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
            <FormGroup controlId='price' className='mb-2'>
              <FormLabel>Precio</FormLabel>
              <Form.Control
                type='number'
                placeholder='Ingrese el precio'
                value={values.price}
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='image' className='mb-2'>
              <FormLabel>Foto</FormLabel>
              <Form.Control
                type='text'
                placeholder='Ingrese la url de la imagen'
                value={values.image}
                onChange={(e) =>
                  setValues({ ...values, image: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='brand' className='mb-2'>
              <FormLabel>Marca</FormLabel>
              <Form.Control
                type='text'
                placeholder='Ingrese la marca'
                value={values.brand}
                onChange={(e) =>
                  setValues({ ...values, brand: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='countInStock' className='mb-2'>
              <FormLabel>Cantidad en Stock</FormLabel>
              <Form.Control
                type='number'
                placeholder='Ingrese la cantidad'
                value={values.countInStock}
                onChange={(e) =>
                  setValues({ ...values, countInStock: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='category' className='mb-2'>
              <FormLabel>Categoría</FormLabel>
              <Form.Control
                type='text'
                placeholder='Ingrese la categoría'
                value={values.category}
                onChange={(e) =>
                  setValues({ ...values, category: e.target.value })
                }></Form.Control>
            </FormGroup>
            <FormGroup controlId='description' className='mb-3'>
              <FormLabel>Categoría</FormLabel>
              <Form.Control
                type='text'
                placeholder='Ingrese la descripción'
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }></Form.Control>
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

export default ProductEditPage;
