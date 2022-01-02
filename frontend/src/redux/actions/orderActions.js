import { postNewOrder } from '../../services/orderServices';
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
