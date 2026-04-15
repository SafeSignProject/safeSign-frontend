import { Camera, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/common';

const UploadFile = () => {
  return (
    <div className='mt-52 flex items-center gap-6'>
      <section className='border-light-gray flex-1 rounded-sm border bg-white p-8'>
        <FileText size={24} className='text-primary' />
        <h5 className='text-dark mt-4 mb-1 text-lg leading-7 font-medium'>PDF 업로드</h5>
        <p className='text-dark-gray text-sm'>컴퓨터에 저장된 계약서 PDF 파일을 선택하세요</p>
        <div className='border-light-gray mt-6 flex flex-col items-center justify-center rounded-sm border-2 border-dashed py-12.5'>
          <Upload size={32} strokeWidth={1} className='text-dark-gray mb-4' />
          <p className='text-dark mb-2 leading-6'>파일을 드래그하거나 클릭하여 선택</p>
          <p className='text-dark-gray mb-4 text-sm'>PDF 파일만 업로드 가능 (최대 10MB)</p>
          <Button
            type='button'
            label='파일 선택'
            className='border-light-gray text-dark h-10 border bg-white hover:brightness-90 active:brightness-80'
          />
        </div>
      </section>
      <section className='border-light-gray flex-1 rounded-sm border bg-white p-8'>
        <Camera size={24} className='text-primary' />
        <h5 className='text-dark mt-4 mb-1 text-lg leading-7 font-medium'>사진 업로드</h5>
        <p className='text-dark-gray text-sm'>
          종이 계약서를 촬영하거나 이미지 파일을 업로드하세요
        </p>
        <div className='border-light-gray mt-6 flex flex-col items-center justify-center rounded-sm border-2 border-dashed py-12.5'>
          <Camera size={32} strokeWidth={1} className='text-dark-gray mb-4' />
          <p className='text-dark mb-2 leading-6'>사진 촬영 또는 선택</p>
          <p className='text-dark-gray mb-4 text-sm'>JPG, PNG 파일 (최대 5MB)</p>
          <Button
            type='button'
            label='사진 선택'
            className='border-light-gray text-dark h-10 border bg-white hover:brightness-90 active:brightness-80'
          />
        </div>
      </section>
    </div>
  );
};

export default UploadFile;
