import { Camera, FileText, Upload, X } from 'lucide-react';
import { Button } from '@/components/common';

const UploadFile = () => {
  return (
    <>
      <div className='mt-52 flex flex-col items-center gap-8 md:flex-row md:gap-6'>
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

      <section className='border-light-gray rounded-sm border bg-white p-6'>
        <article className='mb-4 flex items-center justify-between'>
          <h4 className='text-dark text-left text-lg leading-7 font-medium'>업로드된 파일</h4>
          <button type='button'>
            <X
              size={20}
              className='text-dark-gray transition hover:brightness-90 active:brightness-75'
            />
          </button>
        </article>

        <article className='flex items-center justify-between bg-[#F9FAFB] p-4'>
          <div className='flex items-center gap-4'>
            <FileText size={24} className='text-primary' />
            <div>
              <h5 className='text-dark leading-6 font-medium'>디오_발표자료 (1).pdf</h5>
              <p className='text-dark-gray text-sm'>준비 완료</p>
            </div>
          </div>
          <Button
            type='button'
            label='분석 시작'
            className='bg-primary h-10 px-6 font-medium text-white hover:brightness-90 active:brightness-80'
          />
        </article>
      </section>
    </>
  );
};

export default UploadFile;
