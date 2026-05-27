import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard, getAdminAnalysisLogs } from '@/api/admin';

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
