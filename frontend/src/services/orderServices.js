import axios from 'axios';
import { BASE_URL_BACK } from '../config';

export const postNewOrder = async (order, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.post(`${BASE_URL_BACK}/orders`, order, config);
    return data;
  } catch (error) {
    throw error;
  }
};
