import type { ResponseDashboard } from '@/types/dashboard';
import { axiosInstance } from './api';

export const getDashboard = async (): Promise<ResponseDashboard> => {
  const { data } = await axiosInstance.get('/dashboard');

  return data;
};
