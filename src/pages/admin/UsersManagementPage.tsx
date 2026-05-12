import AdminCommonHeader from '@/components/header/AdminCommonHeader';

const UsersManagementPage = () => {
  return (
    <div className='w-full'>
      <AdminCommonHeader title='회원 관리' desc='사용자 계정 및 권환 관리' />

      <div>
        <div>
          <p>OCR 성공률</p>
        </div>
      </div>
    </div>
  );
};

export default UsersManagementPage;
