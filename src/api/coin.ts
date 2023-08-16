import { type Coin } from '@/types';
import axios from 'axios';

const options = (uuid: string | undefined) => ({
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coin/' + uuid,
  params: {
    timePeriod: '24h',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
  },
});

export const getCoin = async (
  uuid: string | undefined
): Promise<Coin | undefined> => {
  try {
    const response = await axios.request(options(uuid));
    return response.data.data.coin;
  } catch (error) {
    console.error(error);
  }
};
