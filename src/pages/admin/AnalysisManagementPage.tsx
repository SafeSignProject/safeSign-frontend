import { AnalysisStats } from '@/components/admin';
import AdminCommonHeader from '@/components/header/AdminCommonHeader';

const AnalysisManagementPage = () => {
  return (
    <div className='w-full'>
      <AdminCommonHeader title='AI 분석 관리' desc='계약서 분석 로그 및 AI 모델 관리' />

      <div className='flex flex-col gap-6 px-8'>
        <AnalysisStats />
      </div>
    </div>
  );
};

export default AnalysisManagementPage;
