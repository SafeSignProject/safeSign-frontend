import type { USERS } from '@/mocks/users';
import { useEffect } from 'react';
import { Button } from '../common';

interface AnalysisRecordModalProps {
  onClose: () => void;
  user: (typeof USERS)[number];
}

const AnalysisRecordModal = ({ onClose, user }: AnalysisRecordModalProps) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

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
        <p className='text-dark-gray leading-6 font-medium mt-8'>
          {user.name} ({user.id}) 님의 누적 분석 내역 3건/ 전체 12건
        </p>

        <div className='overflow-hidden rounded-xl border border-light-gray mt-6'>
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
              <tr className='border-t border-light-gray'>
                <td className='px-6 py-5 text-dark-gray font-medium'>2026-04-06 14:23</td>
                <td className='px-6 py-5 font-semibold text-dark'>주택임대차계약서.pdf</td>
                <td className='px-6 py-5 font-semibold text-[#22C55E]'>성공</td>
                <td className='px-6 py-5 font-semibold text-dark'>75점</td>
              </tr>

              <tr className='border-t border-light-gray'>
                <td className='px-6 py-5 text-dark-gray font-medium'>2026-03-20 11:05</td>
                <td className='px-6 py-5 font-semibold text-dark'>표준임대차계약서_서초.pdf</td>
                <td className='px-6 py-5 font-semibold text-[#22C55E]'>성공</td>
                <td className='px-6 py-5 font-semibold text-dark'>12점</td>
              </tr>

              <tr className='border-t border-light-gray'>
                <td className='px-6 py-5 text-dark-gray  font-medium'>2026-02-15 09:42</td>
                <td className='px-6 py-5 font-semibold text-dark'>scan_doc_001.jpg</td>
                <td className='px-6 py-5 font-semibold text-[#EF4444]'>실패 (OCR오류)</td>
                <td className='px-6 py-5 font-semibold text-dark'>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          type='button'
          label='닫기'
          className='bg-[#1F2937] w-full h-13 text-white font-semibold rounded-xl hover:brightness-90 active:brightness-80 mt-8'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default AnalysisRecordModal;
