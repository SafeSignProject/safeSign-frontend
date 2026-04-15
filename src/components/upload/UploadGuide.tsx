const GUIDE_ITEM = [
  '계약서 전체 페이지가 포함된 파일을 업로드해주세요',
  '사진 촬영 시 계약서가 화면 전체에 꽉 차도록 촬영하면 인식률이 높아집니다',
  '흐릿하거나 빛 반사가 심한 이미지는 분석 정확도가 낮아질 수 있습니다',
  '업로드된 파일은 암호화되어 안전하게 보관되며, 분석 후 30일 뒤 자동 삭제됩니다',
];

const UploadGuide = () => {
  return (
    <section className='border-light-gray mb-8 rounded-sm border bg-white p-6'>
      <h4 className='text-dark mb-4 text-left text-lg leading-7 font-medium'>업로드 안내</h4>

      <div className='space-y-2'>
        {GUIDE_ITEM.map((guide, idx) => (
          <div key={idx} className='flex items-center gap-1.5'>
            <div className='bg-primary h-1 min-w-1 rounded-full' />
            <p className='text-dark-gray text-sm'>{guide}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UploadGuide;
