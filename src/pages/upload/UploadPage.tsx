import CommonHeader from '@/components/header/CommonHeader';
import { UploadFile, UploadGuide } from '@/components/upload';

const UploadPage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader
        title='계약서 업로드'
        desc='PDF 파일 또는 사진을 업로드하여 분석을 시작하세요'
      />
      <div className='mt-44 w-240 space-y-4 px-4 sm:space-y-8 sm:p-8'>
        <UploadFile />
        <UploadGuide />
      </div>
    </main>
  );
};

export default UploadPage;
