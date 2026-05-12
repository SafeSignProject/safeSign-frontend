import { GoogleIcon, KakaoIcon } from '@/assets';
import { analysisLogs, recentUsers } from '@/constants/admin';
import clsx from 'clsx';
import { Mail, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogManagement = () => {
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
          {recentUsers.map((user) => (
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
                  'rounded-md px-3 py-1 text-xs font-medium bg-[#F3F4F6] text-[#374151] flex items-center gap-1.5',
                  user.provider === 'Kakao' && 'bg-[#FEE500] text-[#3C1E1E]',
                )}
              >
                {user.provider === 'Email' && <Mail size={14} />}
                {user.provider === 'Kakao' && <KakaoIcon width={12} height={12} />}
                {user.provider === 'Google' && <GoogleIcon width={12} height={12} />}
                {user.provider}
              </span>
            </div>
          ))}
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
          {analysisLogs.map((log) => (
            <div key={log.title} className='flex items-start justify-between'>
              <div>
                <p className='font-medium leading-6 text-dark'>{log.title}</p>

                <p className='text-sm text-dark-gray'>{log.desc}</p>
              </div>

              <span
                className={clsx(
                  'rounded-md px-3 py-1 text-xs font-medium',
                  log.isSuccess ? 'bg-accent text-primary' : 'bg-[#FEE2E2] text-[#D92D20]',
                )}
              >
                {log.isSuccess ? '성공' : '실패'}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default LogManagement;
