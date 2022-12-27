import axios from 'axios';
import Config from '../../config';

export const getCoins = async ({search, offset, orderDirection, orderBy}) => {
  let url = `${Config.baseUrl}/assets?offset=${offset}&search=${search}&limit=15`;
  const response = await axios.get(url);

  return response.data;
};
