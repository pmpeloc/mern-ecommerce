import {
  getMyOrders,
  getOrderById,
  getOrders,
  postNewOrder,
  putOrderToDeliver,
  putOrderToPay,
} from '../../services/orderServices';
import actionTypes from './action-types';
import { logout } from './userActions';

export const createOrder = (order) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await postNewOrder(order, userInfo);
      dispatch({
        type: actionTypes.ORDER_CREATE_SUCCESS,
        payload: data,
      });
      dispatch({
        type: actionTypes.CART_CLEAR_ITEMS,
      });
      localStorage.removeItem('cartItems');
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };
};

export const getOrderDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_DETAILS_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await getOrderById(id, userInfo);
      dispatch({
        type: actionTypes.ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_DETAILS_FAIL,
        payload: message,
      });
    }
  };
};

export const payOrder = (orderId, paymentResult) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_PAY_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await putOrderToPay(orderId, paymentResult, userInfo);
      dispatch({
        type: actionTypes.ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_PAY_FAIL,
        payload: message,
      });
    }
  };
};

export const deliverOrder = (order) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_DELIVER_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await putOrderToDeliver(order._id, userInfo);
      dispatch({
        type: actionTypes.ORDER_DELIVER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_DELIVER_FAIL,
        payload: message,
      });
    }
  };
};

export const listMyOrders = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_LIST_MY_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await getMyOrders(userInfo);
      dispatch({
        type: actionTypes.ORDER_LIST_MY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_LIST_MY_FAIL,
        payload: message,
      });
    }
  };
};

export const listOrders = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ORDER_LIST_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await getOrders(userInfo);
      dispatch({
        type: actionTypes.ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.ORDER_LIST_FAIL,
        payload: message,
      });
    }
  };
};
