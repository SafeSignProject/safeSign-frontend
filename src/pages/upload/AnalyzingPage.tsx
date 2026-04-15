import { CircleCheck, FileSearchCorner } from 'lucide-react';

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

        <div className='mb-8 space-y-4'>
          <div>
            <div className='flex items-center gap-3'>
              <div className='bg-primary flex items-center justify-center rounded-full p-1 text-white'>
                <CircleCheck size={16} />
              </div>
              <p className='text-dark font-medium'>파일 업로드 완료</p>
            </div>
            <p className='text-dark-gray pl-9 text-left text-sm'>디오_발표자료 (1).pdf</p>
          </div>
          <div>
            <div className='flex items-center gap-3'>
              <div className='border-primary flex items-center justify-center rounded-full border-2 bg-[#E8F9F0] p-1.5 text-white'>
                <div className='bg-primary h-2 min-w-2 rounded-full' />
              </div>
              <p className='text-primary font-medium'>텍스트 인식 중</p>
            </div>
            <p className='text-dark-gray pl-9 text-left text-sm'>OCR 기술로 계약서 내용 추출</p>
          </div>
          <div>
            <div className='flex items-center gap-3'>
              <div className='bg-light-gray flex h-6 w-6 items-center justify-center rounded-full p-1 text-white' />
              <p className='font-medium text-[#9CA3AF]'>조항 분석</p>
            </div>
            <p className='text-dark-gray pl-9 text-left text-sm'>각 조항의 법적 타당성 검토</p>
          </div>
          <div>
            <div className='flex items-center gap-3'>
              <div className='bg-light-gray flex h-6 w-6 items-center justify-center rounded-full p-1 text-white' />
              <p className='font-medium text-[#9CA3AF]'>위험도 평가 완료</p>
            </div>
            <p className='text-dark-gray pl-9 text-left text-sm'>종합 리스크 점수 산출</p>
          </div>
        </div>

        <div className='bg-light-gray h-2 max-w-full rounded-full' />
      </section>
    </main>
  );
};

export default AnalyzingPage;
