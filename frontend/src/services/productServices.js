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

export const createAProduct = async (userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.post(`${BASE_URL_BACK}/products`, {}, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateAProduct = async (product, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${BASE_URL_BACK}/products/${product._id}`,
      product,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const upload = async (formData, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL_BACK}/upload`,
      formData,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const createAProductReview = async (productId, review, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL_BACK}/products/${productId}/reviews`,
      review,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
