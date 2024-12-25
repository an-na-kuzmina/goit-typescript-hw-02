import axios, { AxiosResponse } from 'axios';
import { IPhoto } from '../types';

axios.defaults.baseURL = 'https://api.unsplash.com/';

type axiosResponse = {
  results: IPhoto[];
  total_pages: number;
};

export const fetchImages = async (
  page: number = 1,
  query: string = 'nature'
): Promise<axiosResponse> => {
  const { data } = await axios.get<axiosResponse>('/search/photos', {
    params: {
      client_id: '5STmvl5H74ZW9wccRQc24LaB6LGJWcOHg7B0r_dY8F4',
      query,
      per_page: 16,
      page,
    },
  });
  return data;
};
