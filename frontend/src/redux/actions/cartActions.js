import { getProductById } from '../../services/productService';
import actionTypes from './action-types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await getProductById(id);
  dispatch({
    type: actionTypes.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
