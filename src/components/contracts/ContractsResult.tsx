import { getContractAnalysis } from '@/api/analysis';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { CircleCheck, Link2, TriangleAlert, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const ContractsResult = ({ contractId }: { contractId?: number }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data } = useQuery({
    queryKey: ['contract-result', contractId],
    queryFn: () => getContractAnalysis(contractId!),
    enabled: !!contractId,
  });

  const getRiskType = (score: number) => {
    if (score >= 75) return 'danger';
    if (score <= 25) return 'safe';
    return 'warning';
  };

  const normalizedClauses = useMemo(
    () =>
      data?.clauseAnalyses.map((clause) => ({
        ...clause,
        highlightType: getRiskType(clause.riskScore),
      })) ?? [],
    [data],
  );

  // 특약사항 여부 판단
  const isSpecialClause = (articleNo: string) => articleNo === '특약사항';

  // 특약사항 묶음 + 일반 조항 분리
  const groupedClauses = useMemo(() => {
    const result: { type: 'normal' | 'special'; clauses: typeof normalizedClauses }[] = [];
    const specialClauses = normalizedClauses.filter((c) => isSpecialClause(c.articleNo));
    const normalClauses = normalizedClauses.filter((c) => !isSpecialClause(c.articleNo));

    normalClauses.forEach((clause) => {
      result.push({ type: 'normal', clauses: [clause] });
    });

    if (specialClauses.length > 0) {
      result.push({ type: 'special', clauses: specialClauses });
    }

    return result;
  }, [normalizedClauses]);

  const selectedAnalysis = selectedIndex !== null ? normalizedClauses[selectedIndex] : null;

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
          {groupedClauses.map((group, groupIdx) =>
            group.type === 'normal' ? (
              // 일반 조항
              group.clauses.map((clause) => {
                const index = normalizedClauses.indexOf(clause);
                return (
                  <article key={index} className='my-6 space-y-3 sm:my-8'>
                    <h4 className='text-dark text-lg leading-7 font-medium'>
                      {clause.articleNo} ({clause.title})
                    </h4>
                    <p className='text-dark text-sm leading-6'>
                      {clause.content && (
                        <span
                          onClick={() => setSelectedIndex(index)}
                          className={clsx(
                            'cursor-pointer transition hover:brightness-95',
                            clause.highlightType === 'danger' &&
                              'border-l-2 border-[#EF4444] bg-[#FEE2E2] px-2.5 py-1',
                            clause.highlightType === 'warning' &&
                              'border-l-2 border-[#F59E0B] bg-[#FEF3C7] px-2.5 py-1',
                          )}
                        >
                          {clause.content}
                        </span>
                      )}
                    </p>
                  </article>
                );
              })
            ) : (
              // 특약사항 묶음
              <article key={`special-${groupIdx}`} className='my-6 space-y-3 sm:my-8'>
                <h4 className='text-dark text-lg leading-7 font-medium'>특약사항</h4>
                <ol className='space-y-2 list-none'>
                  {group.clauses.map((clause, num) => {
                    const index = normalizedClauses.indexOf(clause);
                    return (
                      <li key={index} className='text-dark text-sm leading-6 flex gap-2'>
                        <span className='shrink-0 font-medium'>{num + 1}.</span>
                        <span
                          onClick={() => setSelectedIndex(index)}
                          className={clsx(
                            'cursor-pointer transition hover:brightness-95',
                            clause.highlightType === 'danger' &&
                              'border-l-2 border-[#EF4444] bg-[#FEE2E2] px-2.5 py-1',
                            clause.highlightType === 'warning' &&
                              'border-l-2 border-[#F59E0B] bg-[#FEF3C7] px-2.5 py-1',
                          )}
                        >
                          {clause.content}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </article>
            ),
          )}
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
                onClick={() => setSelectedIndex(null)}
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
                      'w-fit rounded-sm px-2 py-1 text-sm',
                      selectedAnalysis.highlightType === 'danger' && 'bg-[#FEE2E2] text-[#991B1B]',
                      selectedAnalysis.highlightType === 'warning' && 'bg-[#FEF3C7] text-[#92400E]',
                      selectedAnalysis.highlightType === 'safe' && 'bg-[#DCFCE7] text-primary',
                    )}
                  >
                    {selectedAnalysis.title}
                  </p>
                  <p className='text-dark-gray text-xs leading-4'>{selectedAnalysis.clauseType}</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-dark-gray'>위험도 점수</p>
                  <h6 className='text-xl font-semibold'>{selectedAnalysis.riskScore}점</h6>
                </div>
              </div>

              {selectedAnalysis.relatedClauses.length > 0 && (
                <div className='space-y-3 rounded border border-[#D1F4E8] bg-[#F0FDF7] p-4'>
                  <div className='flex items-center gap-2'>
                    <button type='button' className='text-primary transition hover:text-green-600'>
                      <Link2 size={16} />
                    </button>
                    <p className='text-dark text-sm font-medium'>
                      연관 조항 {selectedAnalysis.relatedClauses.length}개
                    </p>
                  </div>

                  <p className='text-dark-gray text-xs leading-4'>
                    이 조항과 함께 검토해야 할 관련 조항이 있습니다
                  </p>
                  <div className='rounded-sm border border-[#D1F4E8] bg-white p-4 font-medium'>
                    {selectedAnalysis.relatedClauses.map((clause, idx) => (
                      <p key={`${clause}-${idx}`} className='text-dark-gray text-xs leading-4'>
                        {clause}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <h5 className='text-dark mb-2 text-sm font-medium'>왜 위험한가요?</h5>
              <p className='text-dark text-sm leading-6'>{selectedAnalysis.reason}</p>

              <h5 className='text-dark mb-2 text-sm font-medium'>관련 법령</h5>
              <div className='text-dark border-light-gray rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6 space-y-2'>
                {selectedAnalysis.relatedLaws?.map((law, idx) => (
                  <div key={`${law.lawName}-${law.article}-${idx}`}>
                    <span className='text-primary font-medium'>{law.lawName}</span> {law.article}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {selectedAnalysis && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-hidden lg:hidden'>
          <div className='absolute inset-0 bg-black/40' onClick={() => setSelectedIndex(null)} />

          <div className='thin-scrollbar relative z-10 max-h-[90%] w-[90%] max-w-md overflow-y-auto rounded-xl bg-white shadow-lg'>
            <>
              <div className='flex items-center justify-between px-6 py-4'>
                <h4 className='text-xl font-semibold'>상세 분석</h4>
                <button
                  type='button'
                  onClick={() => setSelectedIndex(null)}
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
                        'w-fit rounded-sm px-2 py-1 text-sm',
                        selectedAnalysis.highlightType === 'danger' &&
                          'bg-[#FEE2E2] text-[#991B1B]',
                        selectedAnalysis.highlightType === 'warning' &&
                          'bg-[#FEF3C7] text-[#92400E]',
                        selectedAnalysis.highlightType === 'safe' && 'bg-[#DCFCE7] text-primary',
                      )}
                    >
                      {selectedAnalysis.title}
                    </p>
                    <p className='text-dark-gray text-xs leading-4'>
                      {selectedAnalysis.clauseType}
                    </p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-sm text-dark-gray'>위험도 점수</p>
                    <h6 className='text-xl font-semibold'>{selectedAnalysis.riskScore}점</h6>
                  </div>
                </div>

                {selectedAnalysis.relatedClauses.length > 0 && (
                  <div className='space-y-3 rounded border border-[#D1F4E8] bg-[#F0FDF7] p-4'>
                    <div className='flex items-center gap-2'>
                      <button
                        type='button'
                        className='text-primary transition hover:text-green-600'
                      >
                        <Link2 size={16} />
                      </button>
                      <p className='text-dark text-sm font-medium'>
                        연관 조항 {selectedAnalysis.relatedClauses.length}개
                      </p>
                    </div>

                    <p className='text-dark-gray text-xs leading-4'>
                      이 조항과 함께 검토해야 할 관련 조항이 있습니다
                    </p>
                    <div className='rounded-sm border border-[#D1F4E8] bg-white p-4 font-medium'>
                      {selectedAnalysis.relatedClauses.map((clause, idx) => (
                        <p key={`${clause}-${idx}`} className='text-dark-gray text-xs leading-4'>
                          {clause}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <h5 className='text-dark mb-2 text-sm font-medium'>왜 위험한가요?</h5>
                <p className='text-dark text-sm leading-6'>{selectedAnalysis.reason}</p>

                <h5 className='text-dark mb-2 text-sm font-medium'>관련 법령</h5>
                <div className='text-dark border-light-gray rounded-sm border bg-[#F9FAFB] p-3 text-sm leading-6 space-y-2'>
                  {selectedAnalysis.relatedLaws?.map((law, idx) => (
                    <div key={`${law.lawName}-${law.article}-${idx}`}>
                      <span className='text-primary font-medium'>{law.lawName}</span> {law.article}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractsResult;
