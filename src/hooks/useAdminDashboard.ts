import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard } from '@/api/admin';

export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ['adminDashboard'],
    queryFn: getAdminDashboard,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
