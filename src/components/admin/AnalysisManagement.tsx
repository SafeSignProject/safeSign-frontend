import { adminAnalysisKeywordAtom, analysisFilterAtom } from '@/atoms';
import { Button, Input } from '@/components/common';
import { ANALYSIS_LOGS } from '@/mocks/analysisLogs';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { CircleCheck, Eye, Funnel } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnalysisFilterModal, AnalysisLogDetailModal } from '@/components/modal';

const AnalysisManagement = () => {
  const [keyword, setKeyword] = useAtom(adminAnalysisKeywordAtom);
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [isOpenfilterModal, setIsOpenfilterModal] = useState(false);

  const [selectedLog, setSelectedLog] = useState<(typeof ANALYSIS_LOGS)[number] | null>(null);

  const [filter] = useAtom(analysisFilterAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  const filteredLogs = ANALYSIS_LOGS.filter((log) => {
    const matchedKeyword =
      log.fileName.includes(debouncedKeyword) || log.user.includes(debouncedKeyword);

    const matchedStatus = filter.status === '전체' ? true : log.status === filter.status;

    return matchedKeyword && matchedStatus;
  });

  return (
    <section className='bg-white rounded-xl border border-light-gray py-6 mb-8'>
      <article className='space-y-4 px-6'>
        <h3 className='text-xl leading-8 text-dark font-semibold'>분석 로그</h3>

        <div className='relative flex items-center gap-4'>
          <Input
            isSearch={true}
            placeholder='검색...'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className='rounded-lg'
          />

          <Button
            type='button'
            label='필터'
            className='border-light-gray h-10.5 border rounded-lg hover:brightness-95 active:brightness-90 text-dark-gray'
            icon={<Funnel size={16} />}
            onClick={() => setIsOpenfilterModal(true)}
          />
        </div>
      </article>

      <div className='h-px w-full bg-light-gray my-6' />

      {filteredLogs.length > 0 ? (
        filteredLogs.map((log, index) => (
          <article key={log.id}>
            <div className='px-6'>
              <div className='flex items-start justify-between'>
                <div className='space-y-1.5'>
                  <div className='flex items-center gap-3'>
                    <h4 className='text-lg font-medium leading-7 text-dark'>{log.fileName}</h4>

                    <span
                      className={clsx(
                        'rounded-md px-3 py-1 text-xs font-medium',
                        log.status === '성공' && 'bg-[#E8F9F0] text-primary',
                        log.status === '실패' && 'bg-[#FDECEC] text-[#E74C3C]',
                      )}
                    >
                      {log.status}
                    </span>
                  </div>

                  <p className='text-sm leading-5 text-dark-gray'>
                    사용자: {log.user} ({log.userCode}) · {log.createdAt}
                  </p>
                </div>

                <Button
                  type='button'
                  label='상세'
                  icon={<Eye size={16} />}
                  className='h-8.5 rounded-lg border border-light-gray bg-white px-3 py-1 text-dark-gray hover:brightness-95 active:brightness-90'
                  onClick={() => setSelectedLog(log)}
                />
              </div>

              <div className='mt-6 grid grid-cols-4'>
                <div>
                  <p className='text-xs text-dark-gray'>OCR 상태</p>

                  <div className='mt-1 flex items-center gap-1.5 text-dark'>
                    <CircleCheck size={16} className='text-primary' />

                    <span className='text-sm leading-5'>{log.ocrTime}</span>
                  </div>
                </div>

                <div>
                  <p className='text-xs text-dark-gray'>분석 시간</p>

                  <p className='mt-1 text-sm leading-5 text-dark'>{log.analysisTime}</p>
                </div>

                <div>
                  <p className='text-xs text-dark-gray'>위험도 점수</p>

                  <p className='mt-1 text-sm leading-5 text-dark'>{log.riskScore}</p>
                </div>

                <div>
                  <p className='text-xs text-dark-gray'>발견된 이슈</p>

                  <p className='mt-1 text-sm leading-5 text-dark'>{log.issueCount}</p>
                </div>
              </div>
            </div>

            {index !== filteredLogs.length - 1 && (
              <div className='my-6 h-px w-full bg-light-gray' />
            )}
          </article>
        ))
      ) : (
        <div className='py-20 text-center text-dark-gray'>검색 결과가 없습니다.</div>
      )}

      {isOpenfilterModal && <AnalysisFilterModal onClose={() => setIsOpenfilterModal(false)} />}

      {selectedLog && (
        <AnalysisLogDetailModal log={selectedLog} onClose={() => setSelectedLog(null)} />
      )}
    </section>
  );
};

export default AnalysisManagement;
