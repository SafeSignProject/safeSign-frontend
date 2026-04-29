import { Button, Modal } from '@/components/common';
import { showToast } from '@/utils/toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountManagement = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
    showToast.success('로그아웃되었습니다');
  };

  const handleAccountDelete = () => {
    setIsDeleteModalOpen(false);
    navigate('/signup');
    showToast.success('계정이 삭제되었습니다');
  };

  return (
    <section className='border-light-gray mb-8 rounded-sm border bg-white p-6 sm:p-8'>
      <h3 className='text-dark mb-6 text-left text-xl leading-7 font-medium'>계정 관리</h3>
      <div className='flex items-center justify-between'>
        <div>
          <h5 className='text-dark leading-6 font-medium'>로그아웃</h5>
          <p className='text-dark-gray text-sm'>현재 기기에서 로그아웃합니다</p>
        </div>
        <Button
          type='button'
          label='로그아웃'
          className='border-light-gray text-dark h-8.5 border hover:brightness-95 active:brightness-90 max-sm:text-sm sm:h-10'
          onClick={() => setIsLogoutModalOpen(true)}
        />
      </div>

      <div className='my-4 h-px flex-1 bg-[#E5E7EB]' />

      <div className='flex items-center justify-between'>
        <div>
          <h5 className='leading-6 font-medium text-[#EF4444]'>계정 삭제</h5>
          <p className='text-dark-gray text-sm'>모든 데이터가 영구적으로 삭제됩니다</p>
        </div>
        <Button
          type='button'
          label='삭제'
          className='h-8.5 border border-[#FEE2E2] text-[#EF4444] hover:bg-[#EF4444]/10 active:bg-[#EF4444]/20 max-sm:text-sm sm:h-10'
          onClick={() => setIsDeleteModalOpen(true)}
        />
      </div>

      {isLogoutModalOpen && (
        <Modal
          title=' 로그아웃 하시겠습니까?'
          content='로그인 페이지로 돌아갑니다'
          buttonLabel='로그아웃'
          onConfirm={handleLogout}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && (
        <Modal
          title='계정을 삭제하시겠습니까?'
          content='삭제 시 복구할 수 없습니다'
          onConfirm={handleAccountDelete}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </section>
  );
};

export default AccountManagement;
