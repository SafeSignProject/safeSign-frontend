import UserManagement from '@/components/admin/UserManagement';
import AdminCommonHeader from '@/components/header/AdminCommonHeader';

const UsersManagementPage = () => {
  return (
    <div className='w-full'>
      <AdminCommonHeader title='회원 관리' desc='사용자 계정 및 권환 관리' />

      <div className='flex flex-col gap-6 px-8'>
        <UserManagement />
      </div>
    </div>
  );
};

export default UsersManagementPage;
