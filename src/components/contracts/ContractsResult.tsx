import { CONTRACT_CONTENT } from '@/mocks/contracts';
import { Eye } from 'lucide-react';

const ContractsResult = () => {
  return (
    <div className='flex gap-6'>
      <section className='border-light-gray w-164 max-w-full shrink rounded-sm border bg-white py-4'>
        <h3 className='text-dark mb-4 px-6 text-xl leading-7 font-medium'>계약서 문서</h3>

        <div className='bg-light-gray h-px w-full' />

        <div className='p-8'>
          {CONTRACT_CONTENT.map((contract) => (
            <article key={contract.id} className='mb-8 space-y-3'>
              <h4 className='text-dark text-lg leading-7 font-medium'>{contract.title}</h4>
              <p className='text-dark text-sm'>{contract.content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-light-gray flex h-48.5 flex-1 flex-col items-center justify-center rounded-sm border bg-white p-4'>
        <Eye size={32} className='text-[#D1D5DB]' />
        <p className='text-dark-gray px-15 text-center leading-6'>
          하이라이트된 조항을 클릭하면 상세 분석을 확인할 수 있습니다
        </p>
      </section>
    </div>
  );
};

export default ContractsResult;
