import { CONTRACT_ANALYSIS, CONTRACT_CONTENT } from '@/mocks/contracts';
import clsx from 'clsx';
import { Eye, X } from 'lucide-react';
import { useState } from 'react';

const ContractsResult = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedAnalysis = selectedId ? CONTRACT_ANALYSIS[selectedId] : null;

  return (
    <div className='flex gap-6'>
      <section className='border-light-gray max-w-full shrink rounded-sm border bg-white py-4 lg:w-164'>
        <h3 className='text-dark mb-4 px-6 text-xl leading-7 font-medium'>계약서 문서</h3>

        <div className='bg-light-gray h-px w-full' />

        <div className='p-8'>
          {CONTRACT_CONTENT.map((contract) => (
            <article key={contract.id} className='mb-8 space-y-3'>
              <h4 className='text-dark text-lg leading-7 font-medium'>{contract.title}</h4>

              <p
                onClick={() => {
                  if (contract.highlight) {
                    setSelectedId(contract.id);
                  }
                }}
                className={clsx(
                  'text-dark text-sm',
                  contract.highlight && 'cursor-pointer transition hover:brightness-95',
                  contract.highlight === 'danger' &&
                    'inline-block border-l-2 border-[#EF4444] bg-[#FEE2E2] px-2.5 py-1',
                  contract.highlight === 'warning' &&
                    'border-l-2 border-[#F59E0B] bg-[#FEF3C7] px-2.5 py-1',
                )}
              >
                {contract.content}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-light-gray hidden flex-1 flex-col rounded-sm border bg-white lg:flex'>
        {!selectedAnalysis ? (
          <>
            <Eye size={32} className='mx-auto mb-4 text-[#D1D5DB]' />
            <p className='text-dark-gray px-20 text-center'>하이라이트된 조항을 클릭하세요</p>
          </>
        ) : (
          <div className='space-y-4'>
            <div className='flex items-center justify-between p-6'>
              <h4 className='text-lg font-semibold'>상세 분석</h4>
              <button onClick={() => setSelectedId(null)}>
                <X size={20} />
              </button>
            </div>

            <div className='space-y-4 p-6'>
              <div>
                <p className='text-sm text-red-500'>{selectedAnalysis.title}</p>
                <p className='text-xs text-gray-500'>{selectedAnalysis.subtitle}</p>
              </div>

              <div className='rounded bg-gray-100 p-3'>{selectedAnalysis.issue.content}</div>

              <div>
                <h5 className='font-medium'>왜 위험한가요?</h5>
                <p className='text-sm'>{selectedAnalysis.reason.content}</p>
              </div>

              <div>
                <h5 className='font-medium'>관련 법령</h5>
                <p className='text-sm'>{selectedAnalysis.law.content}</p>
              </div>

              {selectedAnalysis.analysis && (
                <div className='rounded bg-yellow-100 p-3'>{selectedAnalysis.analysis.content}</div>
              )}

              <div className='rounded bg-green-100 p-3'>
                {selectedAnalysis.recommendation.content}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContractsResult;
