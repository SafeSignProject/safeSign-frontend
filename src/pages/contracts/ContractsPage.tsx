import { resetContractsAtom } from '@/atoms';
import { ContractsList, ContractsSearch, ContractsStats } from '@/components/contracts';
import CommonHeader from '@/components/header/CommonHeader';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const ContractsPage = () => {
  const resetContracts = useSetAtom(resetContractsAtom);

  // 페이지 다시 돌아오면 초기화
  useEffect(() => {
    return () => {
      resetContracts();
    };
  }, [resetContracts]);

  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader title='내 계약서' desc='분석된 모든 계약서를 확인하고 관리하세요' />

      <div className='mt-52 mb-8 w-275 space-y-8 max-xl:px-8'>
        <ContractsSearch />
        <ContractsStats />
        <ContractsList />
      </div>
    </main>
  );
};

export default ContractsPage;
