import { GoogleIcon, KakaoIcon } from '@/assets';
import { analysisLogs as mockAnalysisLogs, recentUsers as mockRecentUsers } from '@/constants/admin';
import clsx from 'clsx';
import { Mail, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdminDashboard } from '@/hooks/useAdminDashboard';

const LogManagement = () => {
  const { data } = useAdminDashboard();
  const recentUsers = data?.recentUsers;
  const recentAnalysisLogs = data?.recentAnalysisLogs;

  const displayUsers = recentUsers || mockRecentUsers.map((u, i) => ({
    userId: i,
    name: u.name,
    email: u.email,
    providerType: u.provider,
    initial: u.name.charAt(0),
  }));

  const displayLogs = recentAnalysisLogs || mockAnalysisLogs.map((l, i) => ({
    analysisId: i,
    fileName: l.title,
    status: l.isSuccess ? 'SUCCESS' : 'FAILURE',
    userName: l.desc.split(' (')[0],
    userCode: l.desc.split('(')[1]?.split(')')[0] || 'U000',
    relativeTime: l.desc.split(' · ')[1] || '방금 전',
  }));

  const getProviderLabel = (providerType: string) => {
    const type = providerType.toUpperCase();
    if (type === 'EMAIL') return 'Email';
    if (type === 'KAKAO') return 'Kakao';
    if (type === 'GOOGLE') return 'Google';
    return providerType;
  };

  return (
    <section className='grid grid-cols-2 gap-5'>
      <article className='rounded-xl border border-light-gray bg-white p-6'>
        <div className='flex items-center justify-between'>
          <h3 className='leading-6 font-semibold text-dark'>최근 가입 회원</h3>

          <Link
            to='/users-management'
            className='text-xs font-medium text-primary hover:brightness-95 active:brightness-90 transition'
          >
            전체보기
          </Link>
        </div>

        <div className='mt-4 flex flex-col gap-4'>
          {displayUsers.map((user) => {
            const providerLabel = getProviderLabel(user.providerType);
            return (
              <div key={user.email} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
                    <UserRound size={18} />
                  </div>

                  <div>
                    <p className='font-medium leading-6 text-dark'>{user.name}</p>
                    <p className='text-sm text-dark-gray'>{user.email}</p>
                  </div>
                </div>

                <span
                  className={clsx(
                    'rounded-md px-3 py-1.5 text-xs font-medium bg-[#F3F4F6] text-[#374151] flex items-center gap-1.5',
                    providerLabel === 'Kakao' && 'bg-[#FEE500] text-[#3C1E1E]',
                  )}
                >
                  {providerLabel === 'Email' && <Mail size={14} />}
                  {providerLabel === 'Kakao' && <KakaoIcon width={12} height={12} />}
                  {providerLabel === 'Google' && <GoogleIcon width={12} height={12} />}
                  {providerLabel}
                </span>
              </div>
            );
          })}
        </div>
      </article>

      <article className='rounded-xl border border-light-gray bg-white p-6'>
        <div className='flex items-center justify-between'>
          <h3 className='leading-6 font-semibold text-dark'>최근 분석 로그</h3>

          <Link
            to='/analysis-management'
            className='text-xs font-medium text-primary hover:brightness-95 active:brightness-90 transition'
          >
            전체보기
          </Link>
        </div>

        <div className='mt-4 flex flex-col gap-4'>
          {displayLogs.map((log) => {
            const isSuccess = log.status.toUpperCase() === 'SUCCESS';
            return (
              <div key={log.analysisId} className='flex items-start justify-between'>
                <div>
                  <p className='font-medium leading-6 text-dark'>{log.fileName}</p>
                  <p className='text-sm text-dark-gray'>
                    {log.userName} ({log.userCode}) · {log.relativeTime}
                  </p>
                </div>

                <span
                  className={clsx(
                    'rounded-md px-3 py-1 text-xs font-medium',
                    isSuccess ? 'bg-accent text-primary' : 'bg-[#FEE2E2] text-[#D92D20]',
                  )}
                >
                  {isSuccess ? '성공' : '실패'}
                </span>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default LogManagement;
