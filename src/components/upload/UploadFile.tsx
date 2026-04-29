import { Camera, FileText, Upload, X } from 'lucide-react';
import { Button } from '@/components/common';
import { useRef, useState } from 'react';
import { showToast } from '@/utils/toast';
import { useNavigate } from 'react-router-dom';

const UploadFile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const navigate = useNavigate();

  // PDF 업로드
  const handlePdfChange = (file: File) => {
    if (imageFiles.length > 0) {
      return showToast.error('이미 선택된 파일이 있습니다');
    }
    if (file.type !== 'application/pdf') {
      return showToast.error('알맞지 않은 파일입니다');
    }
    if (file.size > 10 * 1024 * 1024) {
      return showToast.error('파일 크기가 너무 큽니다');
    }
    if (pdfFile) {
      return showToast.error('파일은 1개만 업로드 가능합니다');
    }

    setPdfFile(file);
  };

  // 이미지 업로드
  const handleImageChange = (files: FileList) => {
    if (pdfFile) {
      return showToast.error('이미 선택된 파일이 있습니다');
    }

    const newFiles = Array.from(files);

    if (imageFiles.length + newFiles.length > 3) {
      return showToast.error('사진은 최대 3장까지 업로드 가능합니다');
    }

    for (const file of newFiles) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        return showToast.error('JPG, PNG 파일만 업로드 가능합니다');
      }

      if (file.size > 5 * 1024 * 1024) {
        return showToast.error('파일 크기가 너무 큽니다');
      }
    }

    setImageFiles((prev) => [...prev, ...newFiles]);
  };

  // PDF 드래그
  const handleDropPdf = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handlePdfChange(file);
  };

  // 이미지 드래그
  const handleDropImage = (e: React.DragEvent) => {
    e.preventDefault();
    handleImageChange(e.dataTransfer.files);
  };

  // 초기화
  const handleReset = () => {
    setPdfFile(null);
    setImageFiles([]);

    if (fileInputRef.current) fileInputRef.current.value = '';
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  return (
    <>
      <div className='flex w-full flex-col items-center gap-4 sm:gap-8 md:flex-row'>
        <section className='border-light-gray w-full flex-1 rounded-sm border bg-white p-6 sm:p-8'>
          <FileText size={24} className='text-primary' />
          <h5 className='text-dark mt-4 mb-1 text-lg leading-7 font-medium'>PDF 업로드</h5>
          <p className='text-dark-gray text-sm'>컴퓨터에 저장된 계약서 PDF 파일을 선택하세요</p>
          <div
            className='border-light-gray hover:border-primary mt-6 flex flex-col items-center justify-center rounded-sm border-2 border-dashed py-12.5 transition'
            onDrop={handleDropPdf}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload size={32} strokeWidth={1.5} className='text-dark-gray mb-4' />
            <p className='text-dark mb-2 leading-6'>파일을 드래그하거나 클릭하여 선택</p>
            <p className='text-dark-gray mb-4 text-sm'>PDF 파일만 업로드 가능 (최대 10MB)</p>
            <Button
              type='button'
              label='파일 선택'
              className='border-light-gray text-dark h-10 border bg-white hover:brightness-95 active:brightness-90'
              onClick={() => fileInputRef.current?.click()}
            />
            <input
              ref={fileInputRef}
              type='file'
              accept='application/pdf'
              className='hidden'
              onChange={(e) => e.target.files && handlePdfChange(e.target.files[0])}
            />
          </div>
        </section>

        <section className='border-light-gray w-full flex-1 rounded-sm border bg-white p-6 sm:p-8'>
          <Camera size={24} className='text-primary' />
          <h5 className='text-dark mt-4 mb-1 text-lg leading-7 font-medium'>사진 업로드</h5>
          <p className='text-dark-gray text-sm'>
            종이 계약서를 촬영하거나 이미지 파일을 업로드하세요 (최대 3장)
          </p>
          <div
            className='border-light-gray hover:border-primary mt-6 flex flex-col items-center justify-center rounded-sm border-2 border-dashed py-12.5 transition'
            onDrop={handleDropImage}
            onDragOver={(e) => e.preventDefault()}
          >
            <Camera size={32} strokeWidth={1.5} className='text-dark-gray mb-4' />
            <p className='text-dark mb-2 leading-6'>사진 촬영 또는 선택</p>
            <p className='text-dark-gray mb-4 text-sm'>JPG, PNG 파일 (최대 5MB)</p>
            <Button
              type='button'
              label='사진 선택'
              className='border-light-gray text-dark h-10 border bg-white hover:brightness-95 active:brightness-90'
              onClick={() => imageInputRef.current?.click()}
            />
            <input
              ref={imageInputRef}
              type='file'
              multiple
              accept='image/jpeg, image/png'
              className='hidden'
              onChange={(e) => e.target.files && handleImageChange(e.target.files)}
            />
          </div>
        </section>
      </div>

      {(pdfFile || imageFiles.length > 0) && (
        <section className='border-light-gray w-full rounded-sm border bg-white p-6'>
          <article className='mb-4 flex items-center justify-between'>
            <h4 className='text-dark text-left text-lg leading-7 font-medium'>업로드된 파일</h4>
            <button type='button' onClick={handleReset}>
              <X
                size={20}
                className='text-dark-gray transition hover:brightness-75 active:brightness-60'
              />
            </button>
          </article>

          {pdfFile && (
            <article className='flex items-center justify-between bg-[#F9FAFB] p-4'>
              <div className='mr-4 flex items-center gap-2 sm:gap-4'>
                <FileText className='text-primary h-5 w-5 shrink-0 sm:h-6 sm:w-6' />
                <h6 className='text-dark line-clamp-1 leading-6 font-medium break-all max-sm:text-sm'>
                  {pdfFile.name}
                </h6>
              </div>

              <Button
                type='button'
                label='분석 시작'
                className='bg-primary h-8.5 px-4 font-medium text-white hover:brightness-95 active:brightness-90 max-sm:text-sm sm:h-10 sm:px-6'
                onClick={() =>
                  navigate('/analyze', {
                    state: {
                      fileNames: [pdfFile.name],
                    },
                  })
                }
              />
            </article>
          )}

          {imageFiles.length > 0 && (
            <article className='flex items-center justify-between bg-[#F9FAFB] p-4'>
              <div className='space-y-3'>
                {imageFiles.map((image, idx) => (
                  <div key={idx} className='mr-4 flex items-center gap-2 sm:gap-4'>
                    <FileText className='text-primary h-5 w-5 shrink-0 sm:h-6 sm:w-6' />
                    <h6 className='text-dark line-clamp-1 leading-6 font-medium break-all max-sm:text-sm'>
                      {image.name}
                    </h6>
                  </div>
                ))}
              </div>

              <Button
                type='button'
                label='분석 시작'
                className='bg-primary h-8.5 px-4 font-medium text-white hover:brightness-95 active:brightness-90 max-sm:text-sm sm:h-10 sm:px-6'
                onClick={() =>
                  navigate('/analyze', {
                    state: {
                      fileNames: imageFiles.map((file) => file.name),
                    },
                  })
                }
              />
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default UploadFile;
