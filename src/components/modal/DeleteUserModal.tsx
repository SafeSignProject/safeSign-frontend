import type { USERS } from '@/mocks/users';
import { TriangleAlert } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '../common';
import { showToast } from '@/utils/toast';

interface DeleteUserModalProps {
  onClose: () => void;
  user: (typeof USERS)[number];
}

const DeleteUserModal = ({ onClose, user }: DeleteUserModalProps) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  const handleDelete = () => {
    onClose();
    showToast.success('회원 정보가 삭제되었습니다');
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='bg-[#FEE2E2] text-[#D92D20] h-20 w-20 rounded-full flex items-center justify-center'>
            <TriangleAlert size={40} />
          </div>
          <h1 className='text-2xl leading-8 font-bold text-dark mt-5'>정말 삭제하시겠습니까?</h1>
          <p className='leading-7 text-dark-gray mt-2'>
            {user.name} ({user.id}) 회원의 모든 데이터가 영구적으로 삭제됩니다.
          </p>

          <div className='flex items-center gap-4 w-full mt-8'>
            <Button
              type='button'
              label='취소'
              className='border border-[#E5E7EB] text-dark-gray font-semibold rounded-xl flex-1 shrink-0 h-12 bg-white hover:brightness-95 active:brightness-90'
              onClick={onClose}
            />
            <Button
              type='button'
              label='삭제'
              className='bg-[#D92D20] text-white font-semibold rounded-xl flex-1 shrink-0 h-12 hover:brightness-95 active:brightness-90'
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
