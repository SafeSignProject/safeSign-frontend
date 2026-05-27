import { DashboardStats, LogManagement, DashboardSkeleton } from '@/components/admin';
import AdminCommonHeader from '@/components/header/AdminCommonHeader';
import { useAdminDashboard } from '@/hooks/useAdminDashboard';

const DashBoardPage = () => {
  const { isLoading } = useAdminDashboard();

  return (
    <div className='w-full'>
      <AdminCommonHeader title='대시보드' desc='SafeSign 서비스 현황' />

      <div className='flex flex-col gap-6 px-8 mb-8'>
        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <>
            <DashboardStats />
            <LogManagement />
          </>
        )}
      </div>
    </div>
  );
};

export default DashBoardPage;
