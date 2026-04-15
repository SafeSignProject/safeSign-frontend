import { Input } from '@/components/common';
import CommonHeader from '@/components/header/CommonHeader';
import { SupportSuggestion, SupportList } from '@/components/support';

const SupportPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader
        title='정부 지원 서비스'
        desc='내 상황에 맞는 정부 지원 프로그램을 찾아보세요'
      />
      <div className='mt-52 w-275 space-y-8 max-sm:px-8'>
        <Input isSearch={true} placeholder='지원 프로그램 검색 (예: 청년, 전월세, 보증금)' />
        <SupportSuggestion />
        <SupportList />
      </div>
    </main>
  );
};

export default SupportPage;
