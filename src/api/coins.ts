import axios from 'axios';

import { Coin } from '@/types';

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '16',
    offset: '0',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
  },
};

export const getCoins = async (): Promise<Coin[] | undefined> => {
  try {
    const response = await axios.request(options);
    return response.data.data.coins;
  } catch (error) {
    console.error(error);
  }
};
