import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  Col,
  Form,
  FormSelect,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import {
  createProductReview,
  listProductsDetails,
} from '../redux/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import actionTypes from '../redux/actions/action-types';
import Meta from '../components/Meta';

const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (successProductReview) {
      alert('Review Enviada!');
      setReview({
        rating: 0,
        comment: '',
      });
      dispatch({ type: actionTypes.PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductsDetails(params.id));
  }, [dispatch, params, successProductReview]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(params.id, review));
  };

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Atrás
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Descripción: {product.description}
                </ListGroup.Item>
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
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item className='d-grid'>
                    <Button
                      onClick={addToCartHandler}
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>Sin reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Escribir una review</h2>
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating' className='mb-2'>
                        <Form.Label>Rating</Form.Label>
                        <FormSelect
                          value={review.rating}
                          onChange={(e) =>
                            setReview({ ...review, rating: e.target.value })
                          }>
                          <option value=''>Seleccionar...</option>
                          <option value='1'>1 - Malo</option>
                          <option value='2'>2 - Regular</option>
                          <option value='3'>3 - Bueno</option>
                          <option value='4'>4 - Muy Bueno</option>
                          <option value='5'>5 - Excelente</option>
                        </FormSelect>
                      </Form.Group>
                      <Form.Group controlId='comment' className='mb-3'>
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control
                          as='textarea'
                          rows='3'
                          value={review.comment}
                          onChange={(e) =>
                            setReview({ ...review, comment: e.target.value })
                          }></Form.Control>
                      </Form.Group>
                      <Button type='submit' variant='primary'>
                        Enviar
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Por favor <Link to='/login'>iniciar sesión</Link> para
                      escribir una review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
