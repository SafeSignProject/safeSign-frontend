import type { ResponseAdminLogin, ResponseMyInfo } from '@/types/auth';
import { axiosInstance } from './api';

export const postAdminLogin = async (body: {
  email: string;
  password: string;
}): Promise<ResponseAdminLogin> => {
  const { data } = await axiosInstance.post('/admin/auth/login', body);
  return data;
};

export const getMyInfo = async (): Promise<ResponseMyInfo> => {
  const { data } = await axiosInstance.get('/auth/me');
  return data;
};
