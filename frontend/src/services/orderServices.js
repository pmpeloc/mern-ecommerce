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

export const getOrderById = async (id, userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/orders/${id}`, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putOrderToPay = async (orderId, paymentResult, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${BASE_URL_BACK}/orders/${orderId}/pay`,
      paymentResult,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const putOrderToDeliver = async (orderId, userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${BASE_URL_BACK}/orders/${orderId}/deliver`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyOrders = async (userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get(
      `${BASE_URL_BACK}/orders/myorders`,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrders = async (userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/orders`, config);
    return data;
  } catch (error) {
    throw error;
  }
};
