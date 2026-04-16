import { useEffect } from 'react';
import Button from './Button';

interface ModalProps {
  title: string;
  content: string;
  buttonLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ title, content, buttonLabel = '삭제', onConfirm, onCancel }: ModalProps) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='flex w-80 flex-col space-y-3 overflow-hidden rounded-[10px] bg-white px-6 py-8'>
        <p className='text-dark text-center text-xl font-semibold'>{title}</p>
        <p className='text-dark-gray px-8 text-center text-sm'>{content}</p>

        <div className='mt-4 flex items-center gap-3'>
          <Button
            type='button'
            onClick={onCancel}
            className='flex-1 border border-[#DADADA] bg-white p-2.5 text-sm font-medium hover:brightness-95 active:brightness-90'
            label='취소'
          />
          <Button
            type='button'
            onClick={onConfirm}
            className='bg-primary flex-1 p-2.5 text-sm font-medium text-white hover:brightness-95 active:brightness-90'
            label={buttonLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
