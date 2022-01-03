import axios from 'axios';
import { BASE_URL_BACK } from '../config';

export const addPayPalScript = async () => {
  const { data: clientId } = await axios.get(`${BASE_URL_BACK}/config/paypal`);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  script.async = true;
  return script;
};
