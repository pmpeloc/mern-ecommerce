import axios from 'axios';
import { BASE_URL_BACK } from '../config';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/products`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/products/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAProduct = async (id, userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.delete(
      `${BASE_URL_BACK}/products/${id}`,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
