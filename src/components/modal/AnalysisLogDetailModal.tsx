import { ANALYSIS_LOGS } from '@/mocks/analysisLogs';
import clsx from 'clsx';
import { CheckCircle2 } from 'lucide-react';

interface AnalysisLogDetailModalProps {
  onClose: () => void;
  log: (typeof ANALYSIS_LOGS)[number];
}

const ISSUE_LIST = [
  {
    title: '특약사항 4조: 보증금 반환 거부',
    description: '임차 종료 시 보증금 반환을 거부할 수 있는 조항',
    type: 'danger',
  },
  {
    title: '임대인 신원 정보 누락',
    description: '임대인의 주민등록번호 또는 법인 미성명 미작성 등의 불가',
    type: 'warning',
  },
  {
    title: '계약 기간 불명확',
    description: '계약 시작일 및 종료일이 명확하지 않음',
    type: 'warning',
  },
];

const AnalysisLogDetailModal = ({ onClose, log }: AnalysisLogDetailModalProps) => {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>분석 로그 상세정보</p>

        <article className='mt-6 flex items-start gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary'>
            <CheckCircle2 size={20} />
          </div>
          <div className='flex flex-col'>
            <p className='leading-6 font-medium text-dark'>{log.fileName}</p>
            <p className='text-sm leading-5 text-dark-gray'>{log.createdAt}</p>
          </div>
        </article>

        <article className='mt-4 grid grid-cols-2 gap-4 rounded-2xl bg-[#F9FAFB] p-4'>
          <div>
            <p className='text-xs text-dark-gray'>소요 시간 (OCR + AI)</p>
            <p className='mt-1 font-semibold text-dark leading-6'>
              {Number(parseFloat(log.ocrTime) + parseFloat(log.analysisTime)).toFixed(1)}초
            </p>
          </div>

          <div>
            <p className='text-xs text-dark-gray'>위험도 항수</p>
            <p className='mt-1 font-semibold text-[#D92D20] leading-6'>{log.riskScore}</p>
          </div>
        </article>

        <article className='mt-6'>
          <h3 className='font-semibold text-dark leading-5'>발견된 주요 이슈 ({log.issueCount})</h3>

          <div className='mt-4 space-y-3'>
            {ISSUE_LIST.slice(0, Number(log.issueCount.replace('건', ''))).map((issue, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div
                  className={clsx(
                    'mt-1 h-1.5 w-1.5 rounded-full',
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

        <button
          type='button'
          onClick={onClose}
          className='mt-6 h-11 w-full rounded-lg bg-[#1F2937] leading-6 font-medium text-white transition hover:brightness-110 active:brightness-95'
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default AnalysisLogDetailModal;
