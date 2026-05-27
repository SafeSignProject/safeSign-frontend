import { axiosInstance } from './api';
import type { ResponseAdminDashboard } from '@/types/admin';

export const getAdminDashboard = async (): Promise<ResponseAdminDashboard> => {
  const { data } = await axiosInstance.get('/admin/dashboard');
  return data;
};
