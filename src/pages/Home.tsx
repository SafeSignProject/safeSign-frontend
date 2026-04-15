import {
  ArrowRight,
  Award,
  Check,
  Clock,
  FileText,
  Lightbulb,
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

        <section className='border-light-gray rounded-3xl border bg-white py-6 shadow-lg'>
          <div className='mb-4 flex items-center justify-between px-8'>
            <h3 className='text-dark text-2xl leading-8 font-bold'>최근 분석한 계약서</h3>
            <Link
              to='/contracts'
              className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
            >
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className='bg-light-gray my-6 h-px flex-1' />

          <section className='flex items-center justify-between px-8'>
            <div className='flex items-center gap-5'>
              <div className='inline-block rounded-2xl bg-[#FFEBE9] p-3.5'>
                <FileText size={28} className='text-[#D92D20]' />
              </div>
              <div className='flex flex-col gap-1'>
                <h5 className='text-dark text-lg leading-7 font-bold'>주택임대차계약서.pdf</h5>
                <div className='flex items-center gap-3'>
                  <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                    <Clock size={16} /> 2026-03-15
                  </p>
                  <p className='flex items-center gap-1.5 text-sm font-medium text-[#D92D20]'>
                    <TriangleAlert size={16} />
                    위험 3개
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex flex-col'>
                <p className='text-dark-gray text-right text-sm font-medium'>위험도</p>
                <h3 className='text-dark text-3xl leading-9 font-bold'>75점</h3>
              </div>
              <div className='flex h-9.5 items-center justify-center rounded-xl border border-[#FECDCA] bg-[#FFEBE9] px-4 text-sm font-bold text-[#D92D20]'>
                높음
              </div>
              <ArrowRight
                size={20}
                className='cursor-pointer text-[#D1D5DB] transition hover:brightness-90 active:brightness-75'
              />
            </div>
          </section>

          <div className='bg-light-gray my-6 h-px flex-1' />

          <section className='flex items-center justify-between px-8'>
            <div className='flex items-center gap-5'>
              <div className='inline-block rounded-2xl bg-[#FFF4E6] p-3.5'>
                <FileText size={28} className='text-[#F79009]' />
              </div>
              <div className='flex flex-col gap-1'>
                <h5 className='text-dark text-lg leading-7 font-bold'>프리랜서용역계약서.pdf</h5>
                <div className='flex items-center gap-3'>
                  <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                    <Clock size={16} /> 2026-03-15
                  </p>
                  <p className='flex items-center gap-1.5 text-sm font-medium text-[#F79009]'>
                    <TriangleAlert size={16} />
                    위험 2개
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex flex-col'>
                <p className='text-dark-gray text-right text-sm font-medium'>위험도</p>
                <h3 className='text-dark text-3xl leading-9 font-bold'>45점</h3>
              </div>
              <div className='flex h-9.5 items-center justify-center rounded-xl border border-[#FEC84B] bg-[#FFF4E6] px-4 text-sm font-bold text-[#F79009]'>
                높음
              </div>
              <ArrowRight
                size={20}
                className='cursor-pointer text-[#D1D5DB] transition hover:brightness-90 active:brightness-75'
              />
            </div>
          </section>

          <div className='bg-light-gray my-6 h-px flex-1' />

          <section className='flex items-center justify-between px-8'>
            <div className='flex items-center gap-5'>
              <div className='inline-block rounded-2xl bg-[#E8F9F0] p-3.5'>
                <FileText size={28} className='text-primary' />
              </div>
              <div className='flex flex-col gap-1'>
                <h5 className='text-dark text-lg leading-7 font-bold'>업무위탁계약서.pdf</h5>
                <div className='flex items-center gap-3'>
                  <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                    <Clock size={16} /> 2026-03-05
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex flex-col'>
                <p className='text-dark-gray text-right text-sm font-medium'>위험도</p>
                <h3 className='text-dark text-3xl leading-9 font-bold'>15점</h3>
              </div>
              <div className='flex h-9.5 items-center justify-center rounded-xl border border-[#A6F4C5] bg-[#E8F9F0] px-4 text-sm font-bold text-[#34C987]'>
                안전
              </div>
              <ArrowRight
                size={20}
                className='cursor-pointer text-[#D1D5DB] transition hover:brightness-90 active:brightness-75'
              />
            </div>
          </section>
        </section>

        <section className='my-8 rounded-3xl border border-[#D1F4E8] bg-[#F0FDF7] p-10'>
          <div className='flex gap-6'>
            <div className='bg-primary h-16 w-16 rounded-2xl p-4 text-white'>
              <Lightbulb size={32} strokeWidth={3} />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-dark text-2xl leading-8 font-bold'>계약서 체크리스트</h3>
              <div className='flex items-center gap-3'>
                <div className='bg-primary border-primary flex h-6 w-6 items-center justify-center rounded-lg border p-1'>
                  <Check size={16} className='text-white' strokeWidth={3} />
                </div>
                <p className='font-medium text-[#4B5563]'>
                  계약 기간과 해지 조건을 명확히 확인하세요
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-primary border-primary flex h-6 w-6 items-center justify-center rounded-lg border p-1'>
                  <Check size={16} className='text-white' strokeWidth={3} />
                </div>
                <p className='font-medium text-[#4B5563]'>
                  보증금 반환 시기와 방법이 구체적으로 명시되어 있는지 확인하세요
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-primary border-primary flex h-6 w-6 items-center justify-center rounded-lg border p-1'>
                  <Check size={16} className='text-white' strokeWidth={3} />
                </div>
                <p className='font-medium text-[#4B5563]'>
                  일방적으로 불리한 조항이 없는지 꼼꼼히 검토하세요
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
