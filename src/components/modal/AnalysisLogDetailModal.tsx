import { ANALYSIS_LOGS } from '@/mocks/analysisLogs';
import clsx from 'clsx';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';
import { useAdminAnalysisDetail } from '@/hooks/useAdminDashboard';

const AnalysisLogDetailSkeleton = () => {
  return (
    <div className='flex flex-col flex-1 min-h-0 mt-6'>
      <article className='flex items-start gap-4 animate-pulse'>
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-200 shrink-0'>
          <div className='h-5 w-5 rounded-full bg-slate-200' />
        </div>
        <div className='flex flex-col gap-2 flex-1'>
          <div className='h-4 bg-slate-200 rounded w-48' />
          <div className='h-3 bg-slate-200 rounded w-32' />
        </div>
      </article>

      <article className='mt-4 grid grid-cols-2 gap-4 rounded-2xl bg-[#F9FAFB] p-4 animate-pulse'>
        <div className='space-y-2'>
          <div className='h-3 bg-slate-200 rounded w-24' />
          <div className='h-5 bg-slate-200 rounded w-16' />
        </div>
        <div className='space-y-2'>
          <div className='h-3 bg-slate-200 rounded w-24' />
          <div className='h-5 bg-slate-200 rounded w-16' />
        </div>
      </article>

      <article className='mt-6 flex flex-col flex-1 min-h-0 animate-pulse'>
        <div className='h-4 bg-slate-200 rounded w-32 mb-4' />
        <div className='space-y-4 overflow-y-auto pr-1 flex-1'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='flex items-start gap-3'>
              <div className='mt-1.5 h-2 w-2 rounded-full bg-slate-200 shrink-0' />
              <div className='space-y-2 flex-1'>
                <div className='h-4 bg-slate-200 rounded w-3/4' />
                <div className='h-3 bg-slate-200 rounded w-full' />
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

interface AnalysisLogDetailModalProps {
  onClose: () => void;
  log: (typeof ANALYSIS_LOGS)[number];
}


const formatDate = (dateStr: string) => {
  try {
    if (!dateStr) return dateStr;
    let isoStr = dateStr;
    if (!dateStr.endsWith('Z') && !dateStr.includes('+')) {
      isoStr = dateStr.replace(' ', 'T') + 'Z';
    }
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  } catch {
    return dateStr;
  }
};

const AnalysisLogDetailModal = ({ onClose, log }: AnalysisLogDetailModalProps) => {
  const { data: detail, isLoading, isError } = useAdminAnalysisDetail(log.id, !!log.id);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  const totalTimeLabel = detail
    ? `${detail.totalTimeSeconds.toFixed(1)}초`
    : `${Number(parseFloat(log.ocrTime) + parseFloat(log.analysisTime)).toFixed(1)}초`;

  const riskScoreLabel = detail
    ? `${detail.riskScore}점`
    : log.riskScore;

  const issueCountLabel = detail
    ? `${detail.issueCount}건`
    : log.issueCount;

  const displayIssues = detail?.issues
    ? detail.issues.map((issue) => ({
        title: issue.title,
        description: issue.description,
        type: issue.riskType?.toUpperCase() === 'DANGER' ? 'danger' : 'warning',
      }))
    : [];

  const showLoading = isLoading;
  const showError = isError || (!detail && !isLoading);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] h-[600px] flex-col rounded-xl bg-white p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>분석 로그 상세정보</p>

        {showLoading ? (
          <AnalysisLogDetailSkeleton />
        ) : showError ? (
          <div className='flex flex-col items-center justify-center flex-1 py-12 text-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#FDECEC] text-[#E74C3C] mb-4'>
              <AlertTriangle size={24} />
            </div>
            <p className='text-base font-semibold text-dark leading-6'>상세정보를 불러올 수 없습니다</p>
            <p className='text-sm text-dark-gray mt-1 leading-5'>데이터가 없거나 서버와 연결이 원활하지 않습니다.</p>
          </div>
        ) : (
          <div className='flex flex-col flex-1 min-h-0 mt-6'>
            <article className='flex items-start gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary'>
                <CheckCircle2 size={20} />
              </div>
              <div className='flex flex-col'>
                <p className='leading-6 font-medium text-dark'>{detail?.fileName || log.fileName}</p>
                <p className='text-sm leading-5 text-dark-gray'>
                  {detail?.analyzedAt ? formatDate(detail.analyzedAt) : log.createdAt}
                </p>
              </div>
            </article>

            <article className='mt-4 grid grid-cols-2 gap-4 rounded-2xl bg-[#F9FAFB] p-4'>
              <div>
                <p className='text-xs text-dark-gray'>소요 시간 (OCR + AI)</p>
                <p className='mt-1 font-semibold text-dark leading-6'>
                  {totalTimeLabel}
                </p>
              </div>

              <div>
                <p className='text-xs text-dark-gray'>위험도 항수</p>
                <p className='mt-1 font-semibold text-[#D92D20] leading-6'>{riskScoreLabel}</p>
              </div>
            </article>

            <article className='mt-6 flex flex-col flex-1 min-h-0'>
              <h3 className='font-semibold text-dark leading-5'>발견된 주요 이슈 ({issueCountLabel})</h3>

              <div className='mt-4 space-y-3 overflow-y-auto pr-1 flex-1'>
                {displayIssues.map((issue, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div
                      className={clsx(
                        'mt-1.5 h-2 w-2 rounded-full shrink-0',
                        issue.type === 'danger' ? 'bg-[#E74C3C]' : 'bg-[#F39C12]',
                      )}
                    />

                    <div className='space-y-1'>
                      <p className='font-medium text-dark leading-5 text-sm'>{issue.title}</p>

                      <p className='text-xs text-dark-gray'>{issue.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        )}

        <button
          type='button'
          onClick={onClose}
          className='mt-6 h-11 w-full rounded-lg bg-[#1F2937] leading-6 font-medium text-white transition hover:brightness-110 active:brightness-95 shrink-0'
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default AnalysisLogDetailModal;
