import {
  getMyOrders,
  getOrderById,
  postNewOrder,
  putOrderToPay,
} from '../../services/orderServices';
import actionTypes from './action-types';

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
    } catch (error) {
      dispatch({
        type: actionTypes.ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
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
      dispatch({
        type: actionTypes.ORDER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
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
      dispatch({
        type: actionTypes.ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
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
      dispatch({
        type: actionTypes.ORDER_LIST_MY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};