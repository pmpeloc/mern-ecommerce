import actionTypes from './action-types';
import {
  createAProduct,
  deleteAProduct,
  getProductById,
  getProducts,
  updateAProduct,
} from '../../services/productServices';

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

export const listProductsDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });
      const data = await getProductById(id);
      dispatch({
        type: actionTypes.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_DELETE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      await deleteAProduct(id, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const createProduct = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await createAProduct(userInfo);
      dispatch({
        type: actionTypes.PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await updateAProduct(product, userInfo);
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
