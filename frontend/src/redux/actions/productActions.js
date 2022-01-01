import actionTypes from './action-types';
import { getProducts } from '../../services/productService';

export const listProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const data = await getProducts();
      dispatch({
        type: actionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
