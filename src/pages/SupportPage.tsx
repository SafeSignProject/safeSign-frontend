import { Input } from '@/components/common';
import CommonHeader from '@/components/header/CommonHeader';

const SupportPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader
        title='정부 지원 서비스'
        desc='내 상황에 맞는 정부 지원 프로그램을 찾아보세요'
      />
      <div className='mt-52 w-275 space-y-8 max-sm:px-8'>
        <Input isSearch={true} placeholder='계약서 검색...' className='bg-white' />
      </div>
    </main>
  );
};

export default SupportPage;
