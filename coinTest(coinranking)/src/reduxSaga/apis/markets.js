import axios from 'axios';
import Config from '../../config';

export const getMarkets = async ({uuid, offset}) => {
  let url = `https://api.coincap.io/v2/assets/bitcoin/markets`;
  const response = await axios.get(url, {
    headers: {'x-access-token': Config.accessToken},
  });
  return response.data;
};
