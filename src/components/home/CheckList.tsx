import { Check, Lightbulb } from 'lucide-react';

const CheckList = () => {
  return (
    <section className='my-8 rounded-3xl border border-[#D1F4E8] bg-[#F0FDF7] p-6 sm:p-10'>
      <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
        <div className='bg-primary h-12 w-12 shrink-0 rounded-2xl p-3 text-white sm:h-16 sm:w-16 sm:p-4'>
          <Lightbulb className='h-full w-full' strokeWidth={3} />
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-dark text-2xl leading-8 font-bold'>계약서 체크리스트</h3>
          <div className='flex items-center gap-3'>
            <div className='bg-primary border-primary flex h-6 w-6 items-center justify-center rounded-lg border p-1'>
              <Check size={16} className='text-white' strokeWidth={3} />
            </div>
            <p className='font-medium text-[#4B5563]'>계약 기간과 해지 조건을 명확히 확인하세요</p>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-primary border-primary flex h-6 w-6 items-center justify-center rounded-lg border p-1'>
              <Check size={16} className='text-white' strokeWidth={3} />
            </div>
            <p className='leading-5 font-medium text-[#4B5563]'>
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
  );
};

export default CheckList;
