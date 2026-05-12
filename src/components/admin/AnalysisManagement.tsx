import { adminAnalysisKeywordAtom } from '@/atoms';
import { Button, Input } from '@/components/common';
import { useAtom } from 'jotai';
import { Funnel } from 'lucide-react';

const AnalysisManagement = () => {
  const [keyword, setKeyword] = useAtom(adminAnalysisKeywordAtom);

  return (
    <section className='bg-white rounded-xl border border-light-gray p-6'>
      <article className='space-y-4'>
        <h3 className='text-xl leading-8 text-dark font-semibold'>분석 로그</h3>
        <div className='relative flex items-center gap-4'>
          <Input
            isSearch={true}
            placeholder='검색...'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <Button
            type='button'
            label='필터'
            className='border-light-gray h-10.5 border whitespace-nowrap hover:brightness-95 active:brightness-90 text-dark-gray'
            icon={<Funnel size={16} />}
          />
        </div>
      </article>
    </section>
  );
};

export default AnalysisManagement;
