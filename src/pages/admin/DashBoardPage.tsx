import { DashboardStats, LogManagement } from '@/components/admin';
import AdminCommonHeader from '@/components/header/AdminCommonHeader';

const DashBoardPage = () => {
  return (
    <div className='w-full'>
      <AdminCommonHeader title='대시보드' desc='SafeSign 서비스 현황' />

      <div className='flex flex-col gap-6 px-8'>
        <DashboardStats />
        <LogManagement />
      </div>
    </div>
  );
};

export default DashBoardPage;
