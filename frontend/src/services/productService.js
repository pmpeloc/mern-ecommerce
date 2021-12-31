/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { BASE_URL_BACK } from '../config';

export default {
  getProducts: async function () {
    try {
      const { data } = await axios.get(`${BASE_URL_BACK}/products`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getProductById: async function (id) {
    try {
      const { data } = await axios.get(`${BASE_URL_BACK}/products/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
