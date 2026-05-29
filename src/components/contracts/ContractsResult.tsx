import { getContractAnalysis } from '@/api/analysis';
import { CONTRACT_RESPONSE } from '@/mocks/contracts';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { CircleAlert, CircleCheck, Link2, TriangleAlert, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const ContractsResult = ({ contractId }: { contractId: number }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data } = useQuery({
    queryKey: ['contract-result'],
    queryFn: () => getContractAnalysis(contractId),
  });

  const selectedAnalysis =
    selectedId !== null
      ? (CONTRACT_RESPONSE.find((c) => c.id === selectedId)?.analysis ?? null)
      : null;

  const isMobile = () => window.innerWidth < 1024;

  useEffect(() => {
    if (selectedAnalysis && isMobile()) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedAnalysis]);

  return (
    <div className='mb-8 flex gap-6'>
      <section className='border-light-gray h-fit max-w-full rounded-sm border bg-white pt-4 lg:w-164'>
        <h3 className='text-dark mb-4 px-4 text-xl leading-7 font-semibold sm:px-6'>계약서 문서</h3>

        <div className='bg-light-gray h-px w-full' />

        <div className='px-6 sm:px-8'>
          {CONTRACT_RESPONSE.map((contract) => (
            <article key={contract.id} className='my-6 space-y-3 sm:my-8'>
              <h4 className='text-dark text-lg leading-7 font-medium'>{contract.title}</h4>
              <p className='text-dark text-sm leading-6'>
                {contract.content && <span>{contract.content} </span>} <br />
                {contract.highlightContent && (
                  <span
                    onClick={() => setSelectedId(contract.id)}
                    className={clsx(
                      'cursor-pointer transition hover:brightness-95',
                      contract.highlight === 'danger' &&
                        'border-l-2 border-[#EF4444] bg-[#FEE2E2] px-2.5 py-1',
                      contract.highlight === 'warning' &&
                        'border-l-2 border-[#F59E0B] bg-[#FEF3C7] px-2.5 py-1',
                    )}
                  >
                    {contract.highlightContent}
                  </span>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-light-gray hidden h-fit flex-1 flex-col rounded-sm border bg-white lg:flex'>
        {!selectedAnalysis ? (
          <>
            <div className='flex items-center justify-between px-6 py-4'>
              <h4 className='text-xl font-semibold'>종합 분석</h4>
            </div>

            <div className='bg-light-gray h-px w-full' />

            <div className='p-6 space-y-6'>
              <div className='flex gap-3'>
                {data?.overallAnalysis.riskTypes.map((item, idx) => (
                  <div
                    key={idx}
                    className='bg-gray-200 text-dark-gray flex items-center text-sm p-1 px-2 rounded-md font-medium'
                  >
                    {item}
                  </div>
                ))}
              </div>

              {data?.overallAnalysis.summary && (
                <div className='rounded bg-[#FFFBEB] p-4 text-[#92400E]'>
                  <div className='mb-2 flex items-center gap-2'>
                    <TriangleAlert size={16} strokeWidth={1.5} />
                    <p className='text-sm font-semibold'>종합 분석</p>
                  </div>
                  <p className='text-sm leading-6 whitespace-pre-line'>
                    {data.overallAnalysis.summary}
                  </p>
                </div>
              )}
              <div className='mb-2 flex items-center gap-2'>
                <CircleCheck size={16} className='text-primary' />
                <h5 className='text-dark text-sm font-medium'>추가 권장 특약 사항</h5>
              </div>
              <div className='rounded-sm border border-[#A7F3D0] bg-[#D1FAE5] p-4 text-sm text-[#065F46] space-y-4'>
                {data?.recommendedSpecialClauses.map((recommend, idx) => (
                  <div key={idx}>
                    <p className='mb-1 font-semibold text-[#065F46]'>{recommend.title}</p>
                    <p className='text-sm'>{recommend.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex items-center justify-between px-6 py-4'>
              <h4 className='text-xl font-semibold'>상세 분석</h4>
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
              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                  <p
                    className={clsx(
                      'inline-block items-center justify-center rounded-sm px-2 py-1 text-sm',
                      selectedAnalysis.type === 'danger'
                        ? 'bg-[#FEE2E2] text-[#991B1B]'
                        : 'bg-[#FEF3C7] text-[#92400E]',
                    )}
                  >
                    {selectedAnalysis.title}
                  </p>
                  <p className='text-dark-gray text-xs leading-4'>{selectedAnalysis.subtitle}</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-dark-gray'>위험도 점수</p>
                  <h6 className='text-xl font-semibold'>{selectedAnalysis.score}점</h6>
                </div>
              </div>

              {selectedAnalysis.relation && (
                <div className='space-y-3 rounded border border-[#D1F4E8] bg-[#F0FDF7] p-4'>
                  <div className='flex items-center gap-2'>
                    <button
                      type='button'
                      className='rounded-full text-primary transition hover:bg-[#ecf1ec]'
                      onClick={() => window.open(selectedAnalysis.relation.lawUrl, '_blank')}
                    >
                      <Link2 size={16} />
                    </button>
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
                      <button
                        type='button'
                        className='rounded-full text-[#F59E0B] transition hover:bg-[#FEF3C7]'
                        onClick={() => window.open(selectedAnalysis.relation.lawUrl, '_blank')}
                      >
                        <CircleAlert size={12} />
                      </button>
                    </div>
                    <p className='text-dark-gray text-xs leading-4'>
                      {selectedAnalysis.relation.content}
                    </p>
                  </div>
                </div>
              )}

              <h5 className='text-dark mb-2 text-sm font-medium'>왜 위험한가요?</h5>
              <p className='text-dark text-sm leading-6'>{selectedAnalysis.reason}</p>

              <h5 className='text-dark mb-2 text-sm font-medium'>관련 법령</h5>
              <a
                href={selectedAnalysis.lawUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-dark border-light-gray block rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6 transition hover:brightness-95 active:brightness-90'
              >
                {selectedAnalysis.law}
              </a>
            </div>
          </>
        )}
      </section>

      {selectedAnalysis && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-hidden lg:hidden'>
          <div className='absolute inset-0 bg-black/40' onClick={() => setSelectedId(null)} />

          <div className='thin-scrollbar relative z-10 max-h-[90%] w-[90%] max-w-md overflow-y-auto rounded-xl bg-white shadow-lg'>
            <>
              <div className='flex items-center justify-between px-6 py-4'>
                <h4 className='text-xl font-semibold'>상세 분석</h4>
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
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col gap-1'>
                    <p
                      className={clsx(
                        'inline-block items-center justify-center rounded-sm px-2 py-1 text-sm',
                        selectedAnalysis.type === 'danger'
                          ? 'bg-[#FEE2E2] text-[#991B1B]'
                          : 'bg-[#FEF3C7] text-[#92400E]',
                      )}
                    >
                      {selectedAnalysis.title}
                    </p>
                    <p className='text-dark-gray text-xs leading-4'>{selectedAnalysis.subtitle}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-sm text-dark-gray'>위험도 점수</p>
                    <h6 className='text-xl font-semibold'>{selectedAnalysis.score}점</h6>
                  </div>
                </div>

                {selectedAnalysis.relation && (
                  <div className='space-y-3 rounded border border-[#D1F4E8] bg-[#F0FDF7] p-4'>
                    <div className='flex items-center gap-2'>
                      <button
                        type='button'
                        className='rounded-full text-primary transition hover:bg-[#ecf1ec]'
                        onClick={() => window.open(selectedAnalysis.relation.lawUrl, '_blank')}
                      >
                        <Link2 size={16} />
                      </button>
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
                        <button
                          type='button'
                          className='rounded-full text-[#F59E0B] transition hover:bg-[#FEF3C7]'
                          onClick={() => window.open(selectedAnalysis.relation.lawUrl, '_blank')}
                        >
                          <CircleAlert size={12} />
                        </button>
                      </div>
                      <p className='text-dark-gray text-xs leading-4'>
                        {selectedAnalysis.relation.content}
                      </p>
                    </div>
                  </div>
                )}

                <h5 className='text-dark mb-2 text-sm font-medium'>왜 위험한가요?</h5>
                <p className='text-dark text-sm leading-6'>{selectedAnalysis.reason}</p>

                <h5 className='text-dark mb-2 text-sm font-medium'>관련 법령</h5>
                <a
                  href={selectedAnalysis.lawUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-dark border-light-gray block rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6 transition hover:brightness-95 active:brightness-90'
                >
                  {selectedAnalysis.law}
                </a>

                {selectedAnalysis.analysis && (
                  <div className='rounded bg-[#FFFBEB] p-4 text-[#92400E]'>
                    <div className='mb-2 flex items-center gap-2'>
                      <TriangleAlert size={16} strokeWidth={1.5} />
                      <p className='text-sm font-medium'>종합 분석</p>
                    </div>
                    <p className='text-sm leading-6  whitespace-pre-line'>
                      {selectedAnalysis.analysis}
                    </p>
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
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractsResult;
