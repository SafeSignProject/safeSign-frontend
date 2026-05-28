import type { MappedAdminUser } from '@/types/admin';
import { useEffect } from 'react';
import { Button } from '../common';
import { useAdminUserDetail } from '@/hooks/useAdminDashboard';
import { AlertTriangle } from 'lucide-react';

interface UserDetailInfoModalProps {
  onClose: () => void;
  user: MappedAdminUser;
}

const UserDetailInfoSkeleton = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-8 animate-pulse w-full'>
      <div className='bg-slate-200 h-20 w-20 rounded-full' />
      <div className='h-6 bg-slate-200 rounded w-24 mt-4' />
      <div className='h-4 bg-slate-200 rounded w-40 mt-2' />
      <div className='h-3 bg-slate-200 rounded w-20 mt-3' />

      <div className='flex items-center justify-between w-full mt-12'>
        <div className='h-4 bg-slate-200 rounded w-16' />
        <div className='h-4 bg-slate-200 rounded w-12' />
      </div>

      <div className='h-px w-full bg-light-gray my-4' />

      <div className='flex items-center justify-between w-full mt-4'>
        <div className='h-4 bg-slate-200 rounded w-16' />
        <div className='h-4 bg-slate-200 rounded w-24' />
      </div>

      <div className='h-px w-full bg-light-gray my-4' />
    </section>
  );
};

const UserDetailInfoError = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12 text-center w-full'>
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#FDECEC] text-[#E74C3C] mb-4'>
        <AlertTriangle size={24} />
      </div>
      <p className='text-base font-semibold text-dark leading-6'>상세정보를 불러올 수 없습니다</p>
      <p className='text-sm text-dark-gray mt-1 leading-5'>데이터가 없거나 서버와 연결이 원활하지 않습니다.</p>
    </div>
  );
};

const UserDetailInfoModal = ({ onClose, user }: UserDetailInfoModalProps) => {
  const { data: detailUser, isLoading, isError } = useAdminUserDetail(
    user.rawId,
    !!user.rawId && user.rawId !== 0
  );

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  const getProviderLabel = (providerType: string) => {
    const p = providerType.toUpperCase();
    if (p === 'EMAIL' || p === 'LOCAL') return 'Email';
    if (p === 'KAKAO') return 'Kakao';
    if (p === 'GOOGLE') return 'Google';
    return providerType;
  };

  const formatDate = (dateStr: string) => {
    try {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch {
      return dateStr;
    }
  };

  const displayUser = detailUser
    ? {
        id: String(detailUser.userId),
        name: detailUser.name,
        email: detailUser.email,
        joinedAt: formatDate(detailUser.createdAt),
        provider: getProviderLabel(detailUser.providerType),
      }
    : user;

  const showLoading = isLoading && !!user.rawId && user.rawId !== 0;
  const showError = isError;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-8 animate-fadeIn'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>회원 상세 정보</p>

        {showLoading ? (
          <UserDetailInfoSkeleton />
        ) : showError ? (
          <UserDetailInfoError />
        ) : (
          <section className='flex flex-col items-center justify-center mt-8 w-full'>
            <div className='bg-primary h-20 w-20 text-white text-3xl font-bold leading-9 flex items-center justify-center rounded-full'>
              {displayUser.name[0]}
            </div>
            <p className='text-xl text-dark leading-7 font-bold mt-4'>{displayUser.name}</p>
            <p className='leading-6 text-dark-gray mt-2 text-sm'>{displayUser.email}</p>
            <p className='text-xs leading-5 text-[#9CA3AF] mt-3 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100 font-medium'>
              {displayUser.provider === 'Email'
                ? '이메일 가입'
                : displayUser.provider === 'Kakao'
                  ? '카카오 가입'
                  : displayUser.provider === 'Google'
                    ? '구글 가입'
                    : `${displayUser.provider} 가입`}
            </p>

            <div className='flex items-center justify-between w-full mt-10'>
              <p className='text-dark-gray leading-6 font-medium text-sm'>회원 ID</p>
              <p className='text-dark leading-6 font-semibold text-sm'>{displayUser.id}</p>
            </div>

            <div className='h-px w-full bg-light-gray my-4' />

            <div className='flex items-center justify-between w-full mt-2'>
              <p className='text-dark-gray leading-6 font-medium text-sm'>가입 일자</p>
              <p className='text-dark leading-6 font-semibold text-sm'>{displayUser.joinedAt}</p>
            </div>

            <div className='h-px w-full bg-light-gray my-4' />
          </section>
        )}

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
