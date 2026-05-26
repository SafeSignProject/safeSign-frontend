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

export const reissueToken = async (): Promise<{ accessToken: string }> => {
  const { data } = await axiosInstance.post('/auth/reissue');

  return data;
};

export const postLogout = async () => {
  const { data } = await axiosInstance.post('/auth/logout');
  return data;
};

export const deleteUser = async () => {
  const { data } = await axiosInstance.delete('/users/me');
  return data;
};
