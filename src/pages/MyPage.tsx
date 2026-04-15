import CommonHeader from '@/components/header/CommonHeader';
import { AccountManagement, ProfileInfo } from '@/components/my';

const MyPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader title='마이페이지' desc='계정 정보 및 설정을 관리하세요' />
      <div className='space-y-6'>
        <ProfileInfo />
        <AccountManagement />
      </div>
    </main>
  );
};

export default MyPage;
