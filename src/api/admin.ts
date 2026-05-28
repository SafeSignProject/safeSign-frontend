import { axiosInstance } from './api';
import type { ResponseAdminDashboard, ResponseAdminAnalysisLogs, ResponseAdminAnalysisDetail, AdminUser, ResponseAdminUserAnalysisHistory, ResponseAdminDeleteUser } from '@/types/admin';

export const getAdminDashboard = async (): Promise<ResponseAdminDashboard> => {
  const { data } = await axiosInstance.get('/admin/dashboard');
  return data;
};

export const getAdminAnalysisLogs = async (): Promise<ResponseAdminAnalysisLogs> => {
  const { data } = await axiosInstance.get('/admin/analysis/logs');
  return data;
};

export const getAdminAnalysisLogsFilter = async (
  period: string,
  status: string,
  keyword: string
): Promise<ResponseAdminAnalysisLogs> => {
  const { data } = await axiosInstance.get('/admin/analysis/logs/filter', {
    params: {
      period,
      status,
      keyword: keyword || undefined,
    },
  });
  return data;
};

export const getAdminAnalysisDetail = async (
  analysisId: number
): Promise<ResponseAdminAnalysisDetail> => {
  const { data } = await axiosInstance.get(`/admin/analysis/logs/${analysisId}`);
  return data;
};

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  const { data } = await axiosInstance.get('/admin/users');
  return data;
};

export const getAdminUserDetail = async (
  userId: number
): Promise<AdminUser> => {
  const { data } = await axiosInstance.get(`/admin/users/${userId}`);
  return data;
};

export const getAdminUserAnalysisHistory = async (
  userId: number
): Promise<ResponseAdminUserAnalysisHistory> => {
  const { data } = await axiosInstance.get(`/admin/analysis/users/${userId}/analysis-history`);
  return data;
};

export const deleteAdminUser = async (
  userId: number
): Promise<ResponseAdminDeleteUser> => {
  const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
  return data;
};
