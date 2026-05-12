import { useEffect } from 'react';

const AnalysisRecordModal = ({ onClose }: { onClose: () => void }) => {
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
        className='flex w-md max-w-[90%] flex-col overflow-visible rounded-xl bg-white p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-lg leading-7 font-semibold text-dark'>회원 분석 이력</p>
      </div>
    </div>
  );
};

export default AnalysisRecordModal;
