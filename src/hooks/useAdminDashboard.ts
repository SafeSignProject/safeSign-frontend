import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard, getAdminAnalysisLogs, getAdminAnalysisLogsFilter, getAdminAnalysisDetail } from '@/api/admin';

export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ['adminDashboard'],
    queryFn: getAdminDashboard,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useAdminAnalysisLogs = () => {
  return useQuery({
    queryKey: ['adminAnalysisLogs'],
    queryFn: getAdminAnalysisLogs,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useAdminAnalysisLogsFilter = (
  period: string,
  status: string,
  keyword: string
) => {
  return useQuery({
    queryKey: ['adminAnalysisLogsFilter', { period, status, keyword }],
    queryFn: () => getAdminAnalysisLogsFilter(period, status, keyword),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useAdminAnalysisDetail = (analysisId: number, enabled: boolean) => {
  return useQuery({
    queryKey: ['adminAnalysisDetail', analysisId],
    queryFn: () => getAdminAnalysisDetail(analysisId),
    enabled,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
