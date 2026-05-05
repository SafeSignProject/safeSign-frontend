import { Logo } from '@/assets';

const LandingFooter = () => {
  return (
    <footer className='snap-start bg-dark text-[#9CA3AF] py-10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-8'>
        <div className='mb-12 grid grid-cols-1 gap-8 sm:mb-16 sm:grid-cols-3 sm:gap-12'>
          <div className='space-y-3'>
            <Logo height={32} width={25.5313} />
            <p className='max-w-xs text-sm leading-relaxed text-[#9CA3AF]'>
              법률 사각지대를 해소하는 AI 계약서 분석 서비스
            </p>
          </div>

          <div>
            <h4 className='mb-3 text-sm font-semibold text-white'>지원</h4>
            <div className='text-sm flex sm:flex-col gap-3 sm:gap-2'>
              <p className='transition-colors hover:text-primary'>문의하기</p>
              <p className='transition-colors hover:text-primary'>자주 묻는 질문</p>
              <p className='transition-colors hover:text-primary'>이용 가이드</p>
            </div>
          </div>

          <div>
            <h4 className='mb-3 text-sm font-semibold text-white'>법적 고지</h4>
            <div className='text-sm flex sm:flex-col gap-3 sm:gap-2'>
              <p className='transition-colors hover:text-primary'>이용약관</p>
              <p className='transition-colors hover:text-primary'>개인정보처리방침</p>
              <p className='transition-colors hover:text-primary'>위치기반서비스</p>
            </div>
          </div>
        </div>

        <div className='border-t border-[#374151] pt-8 text-center'>
          <p className='text-sm text-[#6B7280]'>© 2026 SafeSign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
