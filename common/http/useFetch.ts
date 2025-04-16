"use client";
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

interface FetchOptions<T> extends UseQueryOptions<T, Error> {
  queryKey: QueryKey;
  url: string;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  axiosConfig?: AxiosRequestConfig;
}

const fetchData = async <T>({ url, params, headers, axiosConfig }: Omit<FetchOptions<T>, 'queryKey'>): Promise<T> => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      params,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...axiosConfig,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error: ${error.response?.status} ${error.response?.statusText}`);
    }
    throw error;
  }
};

const useFetch = <T>({ queryKey, url, params, headers, axiosConfig, ...options }: FetchOptions<T>) => {
  return useQuery<T, Error>({
    ...options,
    queryKey: [queryKey, url, params],
    queryFn: () => fetchData<T>({ url, params, headers, axiosConfig }),
  });
};

export default useFetch;