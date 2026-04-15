import { FileSearchCorner } from 'lucide-react';
import { AnalyzingBar, AnalyzingStep } from '@/components/upload';

const AnalyzingPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#F9FAFB]'>
      <section className='border-light-gray w-[384px] rounded-sm border bg-white p-8'>
        <header className='mb-8 flex flex-col items-center justify-center gap-2'>
          <div className='bg-accent text-primary mb-2 rounded-full p-4'>
            <FileSearchCorner size={32} strokeWidth={1.5} />
          </div>
          <h3 className='text-dark text-xl leading-7 font-semibold'>계약서 분석 중</h3>
          <p className='text-dark-gray text-sm'>AI가 계약서를 분석하고 있습니다</p>
        </header>

        <AnalyzingStep />
        <AnalyzingBar />
      </section>
    </main>
  );
};

export default AnalyzingPage;
