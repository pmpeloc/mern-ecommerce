import axios from 'axios';
import { BASE_URL_BACK } from '../config';

export const loginUser = async (email, password) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/users/login`,
      { email, password },
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/users`,
      { name, email, password },
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
