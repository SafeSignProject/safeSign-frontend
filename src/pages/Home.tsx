import {
  ArrowRight,
  Award,
  FileText,
  Shield,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Upload,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB] px-8 pt-32'>
      <div>
        <section className='mb-8 space-y-4'>
          <h1 className='text-dark text-center text-5xl leading-12 font-bold'>
            안녕하세요, <span className='text-primary'>김철수</span>님
          </h1>
          <p className='text-dark-gray text-center text-xl leading-7'>
            오늘도 안전한 계약을 위해 함께해요
          </p>
        </section>

        <section className='mb-16 grid grid-cols-3 gap-6'>
          <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'>
            <article className='mb-4 flex items-center justify-between'>
              <div className='text-primary rounded-2xl bg-[#F0FDF7] p-3.5'>
                <FileText size={28} />
              </div>
              <Sparkles size={20} className='text-primary' />
            </article>
            <p className='text-dark-gray mb-2 text-sm font-medium'>전체 계약서</p>
            <h5 className='text-dark mb-1 text-4xl leading-10 font-bold'>12</h5>
            <p className='text-xs leading-4 text-[#9CA3AF]'>총 분석 완료</p>
          </div>

          <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'>
            <article className='mb-4 flex items-center justify-between'>
              <div className='text-primary rounded-2xl bg-[#F0FDF7] p-3.5'>
                <TriangleAlert size={28} />
              </div>
              <Zap size={20} className='text-primary' />
            </article>
            <p className='text-dark-gray mb-2 text-sm font-medium'>위험 계약서</p>
            <h5 className='text-dark mb-1 text-4xl leading-10 font-bold'>3</h5>
            <p className='text-xs leading-4 text-[#9CA3AF]'>주의 필요</p>
          </div>

          <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'>
            <article className='mb-4 flex items-center justify-between'>
              <div className='text-primary rounded-2xl bg-[#F0FDF7] p-3.5'>
                <TrendingUp size={28} />
              </div>
              <Award size={20} className='text-primary' />
            </article>
            <p className='text-dark-gray mb-2 text-sm font-medium'>이번 달 분석</p>
            <h5 className='text-dark mb-1 text-4xl leading-10 font-bold'>5</h5>
            <p className='text-xs leading-4 text-[#9CA3AF]'>활발한 활동 중</p>
          </div>
        </section>

        <section className='mb-16 grid grid-cols-3 gap-6'>
          <div className='bg-primary w-88 rounded-3xl p-8 shadow-[0px_8px_10px_-6px_rgba(52,201,135,0.15),0px_20px_25px_-5px_rgba(52,201,135,0.15)]'>
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

          <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'>
            <div className='text-primary mb-4 inline-block rounded-2xl bg-[#F0FDF7] p-3.5'>
              <FileText size={28} />
            </div>

            <p className='text-dark mb-2 text-xl leading-7 font-bold'>내 계약서 보기</p>
            <p className='text-dark-gray mb-4 text-sm'>분석된 모든 계약서 확인</p>
            <Link
              to='/upload'
              className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
            >
              보러가기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'>
            <div className='text-primary mb-4 inline-block rounded-2xl bg-[#F0FDF7] p-3.5'>
              <Shield size={28} />
            </div>

            <p className='text-dark mb-2 text-xl leading-7 font-bold'>정부 지원 찾기</p>
            <p className='text-dark-gray mb-4 text-sm'>맞춤 지원 서비스 추천</p>
            <Link
              to='/upload'
              className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
            >
              탐색하기 <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className='border-light-gray rounded-3xl border bg-white px-8 py-6 shadow-lg'>
          <div></div>
        </section>
      </div>
    </main>
  );
};
