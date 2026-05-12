import AdminCommonHeader from '@/components/header/AdminCommonHeader';

const AnalysisManagementPage = () => {
  return (
    <div className='w-full'>
      <AdminCommonHeader title='AI 분석 관리' desc='계약서 분석 로그 및 AI 모델 관리' />

      <div>
        <div>
          <p>OCR 성공률</p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisManagementPage;
