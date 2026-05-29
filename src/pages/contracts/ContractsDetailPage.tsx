import { ContractsResult } from '@/components/contracts';
import CommonHeader from '@/components/header/CommonHeader';
import { useLocation, useParams } from 'react-router-dom';

const ContractsDetailPage = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const title = state?.title;
  const score = state?.score;
  const level = state?.level;
  const contractId = state?.id || (id ? Number(id) : undefined);

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

      <div className='mt-44 w-275 space-y-4 px-4 sm:space-y-8 sm:p-8'>
        <ContractsResult contractId={contractId} />
      </div>
    </main>
  );
};
export default ContractsDetailPage;
