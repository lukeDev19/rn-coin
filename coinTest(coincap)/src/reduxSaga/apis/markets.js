import axios from 'axios';
import Config from '../../config';

export const getMarkets = async ({id, offset}) => {
  let url = `https://api.coincap.io/v2/assets/${id}/markets?offset=${offset}&limit=${10}`;
  const response = await axios.get(url);
  return response.data;
};
