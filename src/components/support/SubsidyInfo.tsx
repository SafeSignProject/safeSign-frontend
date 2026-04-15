import { Shield } from 'lucide-react';

const INFO_ITEM = [
  '정부 보조금24 플랫폼과 연동하여 실시간 지원 프로그램 정보를 제공합니다',
  '지원 조건과 신청 방법은 시기에 따라 변경될 수 있으니 반드시 확인하세요',
  '자세한 내용은 각 프로그램의 공식 홈페이지에서 확인할 수 있습니다',
];

const SubsidyInfo = () => {
  return (
    <section className='border-light-gray mb-8 rounded-lg border bg-[#F0FDF7] p-6'>
      <div className='flex items-center gap-3'>
        <Shield size={20} className='text-primary' />
        <h5 className='text-dark text-lg leading-7 font-medium'>보조금24 정보</h5>
      </div>
      <div className='bg-white p-4'>
        <div className='space-y-2'>
          {INFO_ITEM.map((info, idx) => (
            <div key={idx} className='flex items-center gap-1.5'>
              <div className='bg-primary h-1 min-w-1 rounded-full' />
              <p className='text-dark-gray white text-sm'>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidyInfo;
