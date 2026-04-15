import Button from './Button';

interface ModalProps {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ title, content, onConfirm, onCancel }: ModalProps) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40'>
      <div className='flex w-90 flex-col space-y-3 overflow-hidden rounded-[10px] bg-white px-5 py-8'>
        <p className='text-center text-xl font-extrabold'>{title}</p>
        <p className='px-8 text-center text-sm font-normal text-[#717182]'>{content}</p>
        <Button
          type='button'
          onClick={onConfirm}
          className='mt-3 bg-black p-2.5 text-sm font-semibold text-white'
          label='삭제'
        />

        <Button
          type='button'
          onClick={onCancel}
          className='border border-[#DADADA] bg-white p-2.5 text-sm font-semibold'
          label='취소'
        />
      </div>
    </div>
  );
};

export default Modal;
