import { TrendingUp } from 'lucide-react';
import { Badge } from '../common';

const SupportSuggestion = () => {
  return (
    <div className='space-y-4'>
      <p className='text-dark-gray text-sm'>
        <span className='text-dark font-medium'>10개</span>의 지원 프로그램
      </p>
      <section className='border-primary flex gap-4 rounded-sm border bg-white p-6'>
        <TrendingUp size={24} className='text-primary' />
        <div className='flex flex-col gap-1.5'>
          <h5 className='text-dark text-lg leading-7 font-medium'>AI 맞춤 추천</h5>
          <p className='text-dark-gray text-sm'>
            최근 분석한 '주택임대차계약서'를 기반으로 다음 지원 프로그램을 추천합니다
          </p>
          <div className='mt-3 flex items-center gap-2'>
            <Badge
              label='청년 전월세 보증금 대출'
              className='text-dark bg-[#F3F4F6] px-3 text-sm'
            />
            <Badge label='주거 급여' className='text-dark bg-[#F3F4F6] px-3 text-sm' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportSuggestion;
