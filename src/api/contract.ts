import type { RequestContracts, ResponseContracts } from '@/types/contracts';
import { axiosInstance } from './api';

export const getDashboard = async (): Promise<any> => {
  const { data } = await axiosInstance.get('/contracts');
  return data;
};

export const getContracts = async (params?: RequestContracts): Promise<ResponseContracts> => {
  const { data } = await axiosInstance.get('/contracts', {
    params,
  });

  return data;
};

export const deleteContract = async (contractId: number): Promise<void> => {
  await axiosInstance.delete(`/contracts/${contractId}`);
};
