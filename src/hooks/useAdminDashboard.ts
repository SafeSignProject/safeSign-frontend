import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard } from '@/api/admin';

/**
 * 어드민 대시보드 데이터를 가져오기 위한 TanStack Query 커스텀 훅입니다.
 * Zustand와 같은 전역 스토어에 상태를 저장하지 않고 React Query 캐시로 데이터가 관리됩니다.
 */
export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ['adminDashboard'],
    queryFn: getAdminDashboard,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh 상태 유지
    gcTime: 1000 * 60 * 10,   // 캐시 소멸 시간 10분
  });
};
