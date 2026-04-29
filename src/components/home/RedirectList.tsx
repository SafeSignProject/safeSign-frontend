import { ArrowRight, FileText, Shield, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const RedirectList = () => {
  return (
    <section className='mb-8 flex flex-col items-center justify-center gap-4 sm:mb-16 sm:flex-row sm:gap-6'>
      <div className='group bg-primary w-full rounded-3xl p-6 shadow-[0px_8px_10px_-6px_rgba(52,201,135,0.15),0px_20px_25px_-5px_rgba(52,201,135,0.15)] transition hover:scale-102 sm:p-8'>
        <div className='mb-4 inline-block h-12 w-12 rounded-2xl bg-white/20 p-3.5 text-white transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14'>
          <Upload className='h-full w-full' />
        </div>

        <p className='mb-2 text-xl leading-7 font-bold text-white'>새 계약서 업로드</p>
        <p className='mb-4 text-sm text-white/90'>PDF 또는 사진으로 즉시 분석</p>
        <Link
          to='/upload'
          className='flex items-center gap-1 text-sm font-semibold text-white transition hover:text-white/80 active:text-white/65'
        >
          시작하기
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            <ArrowRight size={16} strokeWidth={3} />
          </span>
        </Link>
      </div>

      <div className='group border-light-gray hover:border-primary w-full rounded-3xl border bg-white p-6 shadow-lg transition hover:scale-102 sm:p-8'>
        <div className='text-primary mb-4 inline-block h-12 w-12 rounded-2xl bg-[#F0FDF7] p-3.5 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14'>
          <FileText className='h-full w-full' />
        </div>

        <p className='text-dark mb-2 text-xl leading-7 font-bold'>내 계약서 보기</p>
        <p className='text-dark-gray mb-4 text-sm'>분석된 모든 계약서 확인</p>
        <Link
          to='/contracts'
          className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          보러가기
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            <ArrowRight size={16} strokeWidth={3} />
          </span>
        </Link>
      </div>

      <div className='group border-light-gray hover:border-primary w-full rounded-3xl border bg-white p-6 shadow-lg transition hover:scale-102 sm:p-8'>
        <div className='text-primary mb-4 inline-block h-12 w-12 rounded-2xl bg-[#F0FDF7] p-3.5 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14'>
          <Shield className='h-full w-full' />
        </div>

        <p className='text-dark mb-2 text-xl leading-7 font-bold'>정부 지원 찾기</p>
        <p className='text-dark-gray mb-4 text-sm'>맞춤 지원 서비스 추천</p>
        <Link
          to='/support'
          className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          탐색하기
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            <ArrowRight size={16} strokeWidth={3} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default RedirectList;
