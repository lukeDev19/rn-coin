import axios from 'axios';
import Config from '../../config';

export const getCoins = async ({search, offset, orderDirection, orderBy}) => {
  let url = `${Config.baseUrl}/coins?offset=${offset}&orderDirection=${orderDirection}&search=${search}&orderBy=${orderBy}`;
  const response = await axios.get(url, {headers: {'x-access-token': Config.accessToken}});

  return response.data;
};
