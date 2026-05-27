import type {
  RequestContracts,
  RequestContractsParams,
  ResponseContracts,
  ResponseUploadContracts,
} from '@/types/contracts';
import { axiosInstance } from './api';
import type { ResponseDashboard } from '@/types/dashboard';

export const getDashboard = async (): Promise<ResponseDashboard> => {
  const { data } = await axiosInstance.get('/contracts');
  return data;
};

export const postContracts = async (
  params: RequestContractsParams,
  files: File[],
): Promise<ResponseUploadContracts> => {
  const formData = new FormData();

  formData.append('title', params.title);
  formData.append('uploadType', params.uploadType);

  files.forEach((file) => {
    formData.append('files', file);
  });

  const { data } = await axiosInstance.post('/contracts', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

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
