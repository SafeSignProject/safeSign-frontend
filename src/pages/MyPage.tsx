import CommonHeader from '@/components/header/CommonHeader';
import { AccountManagement, ProfileInfo } from '@/components/my';

const MyPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader title='마이페이지' desc='계정 정보 및 설정을 관리하세요' />
      <div className='mt-44 w-240 space-y-4 px-4 sm:space-y-8 sm:p-8'>
        <ProfileInfo />
        <AccountManagement />
      </div>
    </main>
  );
};

export default MyPage;
