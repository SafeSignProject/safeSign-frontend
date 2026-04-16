import { CONTRACT_RESPONSE } from '@/mocks/contracts';
import clsx from 'clsx';
import { CircleAlert, CircleCheck, Eye, Link2, TriangleAlert, X } from 'lucide-react';
import { useState } from 'react';

const ContractsResult = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedAnalysis =
    selectedId !== null
      ? (CONTRACT_RESPONSE.find((c) => c.id === selectedId)?.analysis ?? null)
      : null;

  return (
    <div className='mb-8 flex gap-6'>
      <section className='border-light-gray h-fit max-w-full rounded-sm border bg-white pt-4 lg:w-164'>
        <h3 className='text-dark mb-4 px-6 text-xl leading-7 font-medium'>계약서 문서</h3>

        <div className='bg-light-gray h-px w-full' />

        <div className='px-8'>
          {CONTRACT_RESPONSE.map((contract) => (
            <article key={contract.id} className='my-8 space-y-3'>
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

      <section className='border-light-gray hidden h-fit flex-1 flex-col rounded-sm border bg-white lg:flex'>
        {!selectedAnalysis ? (
          <div className='flex flex-1 flex-col items-center justify-center py-20'>
            <Eye size={32} className='mx-auto mb-4 text-[#D1D5DB]' />
            <p className='text-dark-gray px-20 text-center leading-6'>
              하이라이트된 조항을 클릭하면 <br />
              상세 분석을 확인할 수 있습니다
            </p>
          </div>
        ) : (
          <div className=''>
            <div className='flex items-center justify-between px-6 py-4'>
              <h4 className='text-lg font-semibold'>상세 분석</h4>
              <button
                type='button'
                onClick={() => setSelectedId(null)}
                className='text-dark-gray rounded-full bg-white p-1 transition hover:brightness-95 active:brightness-90'
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className='bg-light-gray h-px w-full' />

            <div className='space-y-6 p-6'>
              <div className='flex items-center gap-3'>
                <div className='flex flex-col gap-1'>
                  <p
                    className={clsx(
                      'inline-block items-center justify-center rounded-sm px-3 py-2',
                      selectedAnalysis.type === 'danger'
                        ? 'bg-[#FEE2E2] text-[#991B1B]'
                        : 'bg-[#FEF3C7] text-[#92400E]',
                    )}
                  >
                    {selectedAnalysis.title}
                  </p>
                  <p className='text-dark-gray text-xs leading-4'>{selectedAnalysis.subtitle}</p>
                </div>
              </div>

              {selectedAnalysis.relation && (
                <div className='space-y-3 rounded border border-[#D1F4E8] bg-[#F0FDF7] p-4'>
                  <div className='flex items-center gap-2'>
                    <Link2 size={16} className='text-primary' />
                    <p className='text-dark text-sm font-medium'>연관 조항 1개</p>
                  </div>

                  <p className='text-dark-gray text-xs leading-4'>
                    이 조항과 함께 검토해야 할 관련 조항이 있습니다
                  </p>
                  <div className='rounded-sm border border-[#D1F4E8] bg-white p-4 font-medium'>
                    <div className='mb-1.5 flex items-center justify-between'>
                      <p className='text-primary text-xs font-medium'>
                        {selectedAnalysis.relation.title}
                      </p>
                      <CircleAlert size={12} className='text-[#F59E0B]' />
                    </div>
                    <p className='text-dark-gray text-xs leading-4'>
                      {selectedAnalysis.relation.content}
                    </p>
                  </div>
                </div>
              )}

              <h5 className='text-dark mb-2 text-sm font-medium'>문제 조항</h5>
              <p className='text-dark border-light-gray rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6'>
                {selectedAnalysis.issue}
              </p>

              <h5 className='text-dark mb-2 text-sm font-medium'>왜 위험한가요?</h5>
              <p className='text-dark text-sm leading-6'>{selectedAnalysis.reason}</p>

              <h5 className='text-dark mb-2 text-sm font-medium'>관련 법령</h5>
              <p className='text-dark border-light-gray rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6'>
                {selectedAnalysis.law}
              </p>

              {selectedAnalysis.analysis && (
                <div className='rounded bg-[#FFFBEB] p-4 text-[#92400E]'>
                  <div className='mb-2 flex items-center gap-2'>
                    <TriangleAlert size={16} strokeWidth={1.5} />
                    <p className='text-sm font-medium'>종합 분석</p>
                  </div>
                  <p className='text-sm leading-6'>{selectedAnalysis.analysis}</p>
                </div>
              )}

              <div className='mb-2 flex items-center gap-2'>
                <CircleCheck size={16} className='text-primary' />
                <h5 className='text-dark text-sm font-medium'>추가 권장 특약 사항</h5>
              </div>
              <p className='rounded-sm border border-[#A7F3D0] bg-[#D1FAE5] p-4 text-sm text-[#065F46]'>
                {selectedAnalysis.recommendation}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContractsResult;
