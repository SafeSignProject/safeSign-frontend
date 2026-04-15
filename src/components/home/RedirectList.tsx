import { ArrowRight, FileText, Shield, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const RedirectList = () => {
  return (
    <section className='mb-16 grid grid-cols-3 gap-6'>
      <div className='bg-primary w-88 rounded-3xl p-8 shadow-[0px_8px_10px_-6px_rgba(52,201,135,0.15),0px_20px_25px_-5px_rgba(52,201,135,0.15)] transition hover:scale-102'>
        <div className='mb-4 inline-block rounded-2xl bg-white/20 p-3.5 text-white'>
          <Upload size={28} />
        </div>

        <p className='mb-2 text-xl leading-7 font-bold text-white'>새 계약서 업로드</p>
        <p className='mb-4 text-sm text-white/90'>PDF 또는 사진으로 즉시 분석</p>
        <Link
          to='/upload'
          className='flex items-center gap-1 text-sm font-semibold text-white transition hover:text-white/80 active:text-white/65'
        >
          시작하기 <ArrowRight size={16} />
        </Link>
      </div>

      <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg transition hover:scale-102'>
        <div className='text-primary mb-4 inline-block rounded-2xl bg-[#F0FDF7] p-3.5'>
          <FileText size={28} />
        </div>

        <p className='text-dark mb-2 text-xl leading-7 font-bold'>내 계약서 보기</p>
        <p className='text-dark-gray mb-4 text-sm'>분석된 모든 계약서 확인</p>
        <Link
          to='/contracts'
          className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          보러가기 <ArrowRight size={16} />
        </Link>
      </div>

      <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg transition hover:scale-102'>
        <div className='text-primary mb-4 inline-block rounded-2xl bg-[#F0FDF7] p-3.5'>
          <Shield size={28} />
        </div>

        <p className='text-dark mb-2 text-xl leading-7 font-bold'>정부 지원 찾기</p>
        <p className='text-dark-gray mb-4 text-sm'>맞춤 지원 서비스 추천</p>
        <Link
          to='/support'
          className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          탐색하기 <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default RedirectList;
