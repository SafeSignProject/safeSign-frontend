import type { USERS } from '@/mocks/users';
import { useEffect } from 'react';
import { Button } from '../common';

interface UserDetailInfoModalProps {
  onClose: () => void;
  user: (typeof USERS)[number];
}

const UserDetailInfoModal = ({ onClose, user }: UserDetailInfoModalProps) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>회원 상세 정보</p>

        <section className='flex flex-col items-center justify-center mt-8'>
          <div className='bg-primary h-20 w-20 text-white text-3xl font-bold leading-9 flex items-center justify-center rounded-full'>
            {user.name[0]}
          </div>
          <p className='text-xl text-dark leading-7 font-bold mt-4'>{user.name}</p>
          <p className='leading-6 text-dark-gray mt-2'>{user.email}</p>
          <p className='text-sm leading-5 text-[#9CA3AF] mt-3'>
            {user.provider === 'Email'
              ? '이메일 가입'
              : user.provider === 'Kakao'
                ? '카카오 가입'
                : '구글 가입'}
          </p>

          <div className='flex items-center justify-between w-full mt-12'>
            <p className='text-dark-gray leading-6 font-medium'>회원 ID</p>
            <p className='text-dark leading-6 font-semibold'>{user.id}</p>
          </div>

          <div className='h-px w-full bg-light-gray my-4' />

          <div className='flex items-center justify-between w-full mt-4'>
            <p className='text-dark-gray leading-6 font-medium'>가입 일자</p>
            <p className='text-dark leading-6 font-semibold'>{user.joinedAt}</p>
          </div>

          <div className='h-px w-full bg-light-gray my-4' />
        </section>

        <Button
          type='button'
          label='확인'
          className='bg-[#1F2937] w-full h-13 text-white font-semibold rounded-xl hover:brightness-90 active:brightness-80 mt-4'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default UserDetailInfoModal;
