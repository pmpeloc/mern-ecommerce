import { loginUser } from '../../services/userServices';
import actionTypes from './action-types';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.USER_LOGIN_REQUEST,
      });
      const data = loginUser(email, password);
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
