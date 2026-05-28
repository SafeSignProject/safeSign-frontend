import type { MappedAdminUser } from '@/types/admin';
import { useEffect } from 'react';
import { Button } from '../common';
import { useAdminUserAnalysisHistory } from '@/hooks/useAdminDashboard';

interface AnalysisRecordModalProps {
  onClose: () => void;
  user: MappedAdminUser;
}

const AnalysisRecordModal = ({ onClose, user }: AnalysisRecordModalProps) => {
  const { data, isLoading, isError } = useAdminUserAnalysisHistory(
    user.rawId,
    !!user.rawId && user.rawId !== 0
  );

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  const getStatusLabel = (status: string) => {
    const s = status.toUpperCase();
    if (s === 'SUCCESS' || s === '성공') return '성공';
    if (s === 'FAIL' || s === '실패') return '실패';
    return status;
  };

  const formatDate = (dateStr: string) => {
    try {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hour = String(d.getHours()).padStart(2, '0');
      const minute = String(d.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hour}:${minute}`;
    } catch {
      return dateStr;
    }
  };

  const displayHistories = data?.histories
    ? data.histories.map((hist) => ({
        analyzedAt: formatDate(hist.analyzedAt),
        fileName: hist.fileName,
        status: getStatusLabel(hist.status),
        riskScore: hist.riskScore,
      }))
    : [];

  const displayTotalCount = data?.allUserTotalAnalysisCount || 0;

  const displayAccumulatedCount = data?.totalAnalysisCount || 0;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-3xl max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>회원 분석 이력</p>
        <p className='text-dark-gray leading-6 font-medium mt-8 text-sm'>
          {user.name} ({user.id}) 님의 누적 분석 내역 <span className='font-bold text-dark'>{displayAccumulatedCount}건</span> / 전체 <span className='font-bold text-dark'>{displayTotalCount}건</span>
        </p>

        <div className='overflow-y-auto max-h-[300px] rounded-xl border border-light-gray mt-6'>
          <table className='w-full border-collapse'>
            <thead className='bg-[#F3F4F6]'>
              <tr className='text-left text-sm font-semibold text-[#374151]'>
                <th className='px-6 py-4'>분석 일시</th>
                <th className='px-6 py-4'>파일명</th>
                <th className='px-6 py-4'>상태</th>
                <th className='px-6 py-4'>항수</th>
              </tr>
            </thead>

            <tbody className='bg-white text-sm'>
              {isLoading && user.rawId !== 0 ? (
                [1, 2, 3].map((i) => (
                  <tr key={i} className='border-t border-light-gray animate-pulse'>
                    <td className='px-6 py-5'><div className='h-4 bg-slate-200 rounded w-28' /></td>
                    <td className='px-6 py-5'><div className='h-4 bg-slate-200 rounded w-44' /></td>
                    <td className='px-6 py-5'><div className='h-4 bg-slate-200 rounded w-12' /></td>
                    <td className='px-6 py-5'><div className='h-4 bg-slate-200 rounded w-10' /></td>
                  </tr>
                ))
              ) : isError ? (
                <tr>
                  <td colSpan={4} className='px-6 py-8 text-center text-[#E74C3C] font-semibold text-sm'>
                    이력을 불러오는 중 오류가 발생했습니다.
                  </td>
                </tr>
              ) : displayHistories.length > 0 ? (
                displayHistories.map((hist, index) => {
                  const isSuccess = hist.status === '성공' || hist.status.toUpperCase() === 'SUCCESS';
                  return (
                    <tr key={index} className='border-t border-light-gray'>
                      <td className='px-6 py-5 text-dark-gray font-medium'>{hist.analyzedAt}</td>
                      <td className='px-6 py-5 font-semibold text-dark'>{hist.fileName}</td>
                      <td className='px-6 py-5 font-semibold' style={{ color: isSuccess ? '#22C55E' : '#EF4444' }}>
                        {hist.status}
                      </td>
                      <td className='px-6 py-5 font-semibold text-dark'>
                        {isSuccess ? `${hist.riskScore}점` : '-'}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className='px-6 py-10 text-center text-dark-gray font-medium'>
                    진행된 분석 이력이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Button
          type='button'
          label='닫기'
          className='bg-[#1F2937] w-full h-13 text-white font-semibold rounded-xl hover:brightness-90 active:brightness-80 mt-8 shrink-0'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default AnalysisRecordModal;
