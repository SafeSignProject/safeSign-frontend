import { ContractsSearch } from '@/components/contracts';
import CommonHeader from '@/components/header/CommonHeader';

const ContractsPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader title='내 계약서' desc='분석된 모든 계약서를 확인하고 관리하세요' />
      <div className='mt-52 w-275 space-y-8 max-sm:px-8'>
        <ContractsSearch />
      </div>
    </main>
  );
};

export default ContractsPage;
