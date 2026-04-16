import { ContractsResult } from '@/components/contracts';
import CommonHeader from '@/components/header/CommonHeader';
import { useLocation } from 'react-router-dom';

const ContractsDetailPage = () => {
  const { state } = useLocation();

  const title = state?.title;
  const score = state?.score;
  const level = state?.level;

  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader
        title='분석결과'
        desc={title ?? '계약서 상세'}
        riskState={
          score
            ? {
                score,
                level,
              }
            : undefined
        }
      />

      <div className='mt-52 w-275 space-y-8 max-xl:px-8'>
        <ContractsResult />
      </div>
    </main>
  );
};
export default ContractsDetailPage;
