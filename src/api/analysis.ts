import type {
  ResponseContractAnalysis,
  ResponseContractAnalysisResult,
  ResponseContractAnalysisStatus,
  ResponseContractOCR,
} from '@/types/analysis';
import { axiosInstance } from './api';

export const postContractOCR = async (contractId: number): Promise<ResponseContractOCR> => {
  const { data } = await axiosInstance.post(`/contracts/${contractId}/ocr`);
  return data;
};

export const postContractAnalysis = async (
  contractId: number,
): Promise<ResponseContractAnalysis> => {
  const { data } = await axiosInstance.post(`/contracts/${contractId}/analysis`);
  return data;
};

export const getContractAnalysisStatus = async (
  contractId: number,
): Promise<ResponseContractAnalysisStatus> => {
  const { data } = await axiosInstance.get(`/contracts/${contractId}/analysis/status`);
  return data;
};

export const getContractAnalysis = async (
  contractId: number,
): Promise<ResponseContractAnalysisResult> => {
  const { data } = await axiosInstance.get(`/contracts/${contractId}/analysis`);
  return data;
};
