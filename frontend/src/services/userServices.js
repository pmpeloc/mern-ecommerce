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

export const userDetails = async (endpoint, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get(
      `${BASE_URL_BACK}/users/${endpoint}`,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const userUpdateProfile = async (user, userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${BASE_URL_BACK}/users/profile`,
      user,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
