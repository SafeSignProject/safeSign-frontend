import { ArrowLeft, Frown, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen items-center justify-center px-8 sm:px-4'>
      <div className='w-full max-w-md text-center'>
        <div className='mb-8'>
          <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 sm:h-24 sm:w-24'>
            <Frown size={36} className='text-slate-700 sm:h-11 sm:w-11' />
          </div>
          <h1 className='mb-2 text-5xl font-bold text-slate-900 sm:text-6xl'>404</h1>
          <h2 className='mb-4 text-xl font-semibold break-keep text-slate-700 sm:text-2xl'>
            페이지를 찾을 수 없습니다
          </h2>
          <p className='mb-8 text-sm leading-relaxed break-keep text-slate-600 sm:text-base'>
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>

        <div className='flex flex-col justify-center gap-3 sm:flex-row'>
          <Link
            to='/'
            className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-500 px-6 py-3 font-medium transition-colors hover:bg-slate-700 sm:w-auto'
          >
            <Home size={20} className='text-white' />
            <span className='text-white'>메인으로 돌아가기</span>
          </Link>
          <button
            onClick={() => navigate(-1)}
            className='inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 transition-colors hover:border-slate-400 sm:w-auto'
          >
            <ArrowLeft size={20} />
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
